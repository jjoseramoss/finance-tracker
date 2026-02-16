"use client";

import { logTransaction } from "@/app/lib/actions";

interface Category {
  name: string;
  icon: string;
}

interface TransactionFormProps {
  // The 'categories' array we talked about (pass this from the Dashboard)
  categories: Category[];

  // This is the 'challenge' part:
  // How will you handle the Server Action?
  // Use the standard 'action' type for Next.js forms.
}

export default function LogForm({ categories }: TransactionFormProps) {
  return (
    <form
      // TODO: Link the action here
      action={logTransaction}
      className="flex flex-col gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100"
    >
      <h3 className="font-bold text-gray-700">Log a Spend</h3>

      <div>
        <label className="text-xs text-gray-400">Amount ($)</label>
        <input
          name="amount"
          type="number"
          step="0.01"
          placeholder="5.50"
          className="w-full p-2 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-green-300"
        />
      </div>

      <div>
        <label className="text-xs text-gray-400">Description</label>
        <input
          name="description"
          type="text"
          placeholder="Strawberry Matcha"
          className="w-full p-2 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-green-300"
        />
      </div>

      <div>
        <label className="text-xs text-gray-400">Category</label>
        <select
          name="category"
          className="w-full p-2 bg-gray-50 rounded-xl outline-none"
        >
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-green-400 text-white font-bold rounded-2xl hover:bg-green-500 transition"
      >
        Feed the Pet (Log Spend)
      </button>
    </form>
  );
}
