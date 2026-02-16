"use client";

import { updateBudget } from "@/app/lib/actions";

interface BudgetFormProps {
  currentBudget: number;
}

export default function BudgetForm({ currentBudget }: BudgetFormProps) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <form action={updateBudget} className="flex flex-col gap-4">
        <label htmlFor="budget" className="text-sm font-medium text-gray-500">
          Monthly Budget
        </label>

        <div className="flex gap-2">
          <input
            id="budget"
            name="budget"
            type="number"
            placeholder="0"
            defaultValue={currentBudget}
            className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="font-bold py-2 px-6 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-white shadow-md active:scale-95"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
