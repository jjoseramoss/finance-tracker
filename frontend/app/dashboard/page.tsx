"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState<"GROCERIES" | "CASUAL">("GROCERIES");

  return (
    <div className="min-h-screen text-foreground font-sans p-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 opacity-60 hover:opacity-100 transition-opacity">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium tracking-wide">
          <span className="text-lg">$</span> Liquid
        </Link>
        <button className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase hover:text-accent-green transition-colors cursor-pointer">
          <span className="text-lg">+</span> Reset Cycle
        </button>
      </header>

      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-5xl font-serif text-accent-green">
          Track every dollar.
        </h1>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Balance Card - Full Width */}
        <div className="md:col-span-2 bg-accent-green text-white p-8 rounded-lg shadow-sm flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-xs font-medium tracking-widest opacity-80 mb-2 uppercase">
              Total Remaining Balance
            </h3>
            <div className="text-6xl font-serif mb-4">$100.00</div>
          </div>
          <div className="flex justify-between items-end text-sm opacity-90">
            <div>
              <span className="opacity-70 font-medium tracking-wide uppercase text-xs mr-2">Safe Daily Spend</span>
              <span className="text-xl font-serif">$0.00</span>
            </div>
            <div className="font-medium">0 days left</div>
          </div>
        </div>

        {/* Log Transaction Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-transparent hover:border-black/5 transition-colors">
          <h3 className="text-xs font-bold tracking-widest text-muted uppercase mb-6">
            Log Transaction
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold tracking-widest text-muted uppercase mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-accent-light rounded-md border-none py-3 pl-8 pr-4 text-accent-green placeholder:text-muted focus:ring-1 focus:ring-accent-green/20 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest text-muted uppercase mb-2">
                Category
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setCategory("GROCERIES")}
                  className={`flex-1 py-2 text-xs font-bold tracking-widest uppercase rounded-md transition-colors ${category === "GROCERIES"
                    ? "bg-accent-green text-white shadow-md"
                    : "bg-accent-light text-muted hover:bg-black/5"
                    }`}
                >
                  Groceries
                </button>
                <button
                  onClick={() => setCategory("CASUAL")}
                  className={`flex-1 py-2 text-xs font-bold tracking-widest uppercase rounded-md transition-colors ${category === "CASUAL"
                    ? "bg-accent-green text-white shadow-md"
                    : "bg-accent-light text-muted hover:bg-black/5"
                    }`}
                >
                  Casual
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest text-muted uppercase mb-2">
                Note (Optional)
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g. Coffee or HEB Run"
                className="w-full bg-accent-light rounded-md border-none py-3 px-4 text-accent-green placeholder:text-muted focus:ring-1 focus:ring-accent-green/20 outline-none transition-all"
              />
            </div>

            <button className="w-full bg-accent-green text-white py-4 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-opacity-90 transition-opacity shadow-sm mt-2">
              Save Transaction
            </button>
          </div>
        </div>

        {/* Recent Transactions Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm min-h-[400px] flex flex-col">
          <h3 className="text-xs font-bold tracking-widest text-muted uppercase mb-6">
            Recent Transactions
          </h3>
          <div className="flex-1 flex items-center justify-center text-muted/60 text-sm">
            No transactions yet
          </div>
        </div>

        {/* Category Split Card */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm min-h-[200px] flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold tracking-widest text-muted uppercase">
              Category Split
            </h3>
            <span className="text-xs font-bold tracking-widest text-muted uppercase">$0.00 Total</span>
          </div>
          <div className="flex-1 flex items-center justify-center text-muted/60 text-sm">
            No spending data yet
          </div>
        </div>

        {/* Efficiency Score Card */}
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-xs font-bold tracking-widest text-muted uppercase mb-1">
              Efficiency Score
            </h3>
            <div className="text-sm font-medium text-accent-green">
              Started with <span className="font-bold text-base ml-1">$100.00</span>
            </div>
          </div>
          <div className="text-xl font-serif text-accent-green">
            -$0.00
          </div>
        </div>

      </div>
    </div>
  );
}