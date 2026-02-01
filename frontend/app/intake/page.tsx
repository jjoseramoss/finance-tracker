"use client"
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#E5E2DB]">
      <div className="flex flex-col w-full max-w-[500px] p-8 md:p-12 gap-8 bg-white rounded-xl shadow-sm mx-4">

        {/* Back Link */}
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 12.6667L2 8M2 8L6.66667 3.33333M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        <div className="flex flex-col gap-6">
          {/* Header Group */}
          <div className="space-y-4">
            <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">The Intake</p>
            <h1 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] leading-tight">
              How much money is available right now?
            </h1>
          </div>

          <form action="" className="flex flex-col gap-6 w-full">
            {/* Input */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
              <input
                type="number"
                id="amount"
                name="amount"
                min="0"
                step="0.01"
                inputMode="decimal"
                placeholder="0.00"
                className="w-full bg-[#f3f3f3] p-4 pl-10 rounded-lg text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#374B43]/20 transition-all font-serif"
              />
            </div>

            {/* Submit Button */}
            <Link href="/dashboard" className="w-full bg-[#374B43] hover:bg-[#2A3A33] text-white p-4 rounded-md uppercase tracking-wider text-md font-light transition-colors mt-2 font-['Poppins'] text-center ">Start Tracking</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page