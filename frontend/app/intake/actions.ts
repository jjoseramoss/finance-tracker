'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function submitIntake(formData: FormData) {
    const supabase = await createClient()

    const amount = formData.get('amount')

    if (!amount) {
        // Handle validation error - for now we'll just return
        return
    }

    const { error } = await supabase
        .from('intake_logs')
        .insert({ amount: parseFloat(amount.toString()) })

    if (error) {
        console.error('Error inserting data:', error)
        throw new Error('Failed to submit intake')
    }

    revalidatePath('/dashboard')
    redirect('/dashboard')
}
