import Link from "next/link"
import { createClient } from "@/app/lib/supabase/server"
import { GhostLogo } from "./GhostLogo"
import { signOut } from "@/app/login/actions"

export default async function Navbar() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <nav className="fixed top-0 w-full p-4 flex justify-between items-center z-50 bg-transparent mix-blend-difference text-white">
            <Link href="/" className="flex items-center gap-2">
                <GhostLogo />
                <span className="font-bold tracking-wider text-lg hidden md:block">LIQUID</span>
            </Link>

            <div className="flex gap-4 items-center">
                {user ? (
                    <form action={signOut}>
                        <button className="text-sm px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                            Sign Out
                        </button>
                    </form>
                ) : (
                    <Link href="/login" className="text-sm px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-medium">
                        Get Started
                    </Link>
                )}
            </div>
        </nav>
    )
}
