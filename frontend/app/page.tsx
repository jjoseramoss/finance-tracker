"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHello = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/hello");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        console.error("Failed to fetch from backend:", err);
        setError("Could not connect to the backend. Make sure it's running on localhost:8000");
        setMessage("Connection failed");
      }
    };

    fetchHello();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Fintracker Starter Template
          </h1>
          <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <p className="text-sm font-mono text-zinc-500 mb-2 uppercase tracking-wider">Backend Status:</p>
            {error ? (
              <p className="text-red-500 font-medium">{error}</p>
            ) : (
              <p className="text-green-600 dark:text-green-400 font-medium text-lg">{message}</p>
            )}
          </div>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is a production-ready starter template for a FinTech application. 
            The frontend is built with Next.js and TailwindCSS, while the backend uses FastAPI.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Docs
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="http://localhost:8000/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend API (Swagger)
          </a>
        </div>
      </main>
    </div>
  );
}
