import { createClient } from "@/app/lib/supabase/server"
import BudgetForm from "@/components/BudgetForm"
import { redirect } from "next/navigation"
import LogForm from "@/components/LogForm"

export default async function Dashboard() {
  const supabase = await createClient()

  // 1. Check Auth & Fetch Data
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const { data: profile } = await supabase
    .from("profiles")
    .select("monthly_budget, pet_type")
    .eq("id", user.id)
    .single()

  const { data: categories } = await supabase
    .from("categories")
    .select("*")

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 pt-20 px-4">
      <div className="max-w-md w-full flex flex-col gap-8">
        
        {/* Visual Header / Pet Placeholders */}
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-800">
            ${profile?.monthly_budget || 0}
          </h1>
          <p className="text-gray-400 text-sm">REMAINING LIQUID</p>
        </div>

        {/* The Refactored Budget Component */}
        <BudgetForm currentBudget={profile?.monthly_budget || 0} />

        {/* Next up: Transaction Logging Component */}
        <LogForm categories={categories} />
        
      </div>
    </div>
  )
}