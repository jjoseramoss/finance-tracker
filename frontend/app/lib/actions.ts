'use server'

import { createClient } from '@/app/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateBudget(formData: FormData){
    const supabase = await createClient()

    // 1. Get current user information
    const { data: { user } } = await supabase.auth.getUser()

    if(!user) {
        throw new Error('You must be logged in to update your budget.')
    }

    const newBudget = formData.get('budget')

    if(newBudget){
        const budgetVal = parseFloat(newBudget as string)
        //2. Update ONLY the row where ID matches logged in user
        const { error } = await supabase
            .from('profiles')
            .update({ monthly_budget: budgetVal})
            .eq('id', user.id)

        if (error){
            console.error('Update failed: ', error.message)
            return
        }

        // 3. Refresh dashboard data
        revalidatePath('/dashboard')
    }
}



// Log Transaction:

export async function logTransaction(formData: FormData){
    const supabase = await createClient()

    // 1. Get current user information
    const { data: { user } } = await supabase.auth.getUser()    

    
    if(!user) {
        throw new Error('You must be logged in to update your budget.')
    }

    // 2. Get current budget
    const {data: profile } = await supabase
        .from("profiles")
        .select("monthly_budget, pet_type")
        .eq("id", user.id) 
        .single()

    const amount = formData.get('amount') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string

    const amountVal = parseFloat(amount)
    if(amountVal > 0){
        //3. Add transaction ONLY the row where ID matches logged in user
        const { error: insertError } = await supabase
            .from('transactions')
            .insert([
                {user_id: user.id, amount: amountVal, category: category, description: description}
            ])

        if (insertError){
            console.error('Update failed: ', insertError.message)
            return
        }

        //4. Subtract from budget 
        const newBudget = profile?.monthly_budget - amountVal;

        const { error: updateError } = await supabase
            .from('profiles')
            .update({monthly_budget: newBudget})
            .eq("id", user.id)

        if (updateError){
            console.error('Update failed: ', updateError.message)
            return
        }

        // 3. Refresh dashboard data
        revalidatePath('/dashboard')
    }
}
