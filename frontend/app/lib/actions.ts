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

    const amount = formData.get('amount') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string

    if(amount){
        const amountVal = parseFloat(amount)
        //2. Update ONLY the row where ID matches logged in user
        const { error } = await supabase
            .from('transactions')
            .insert([
                {user_id: user.id, amount: amount, category: category, description: description}
            ])

        if (error){
            console.error('Update failed: ', error.message)
            return
        }

        // 3. Refresh dashboard data
        revalidatePath('/dashboard')
    }
}
