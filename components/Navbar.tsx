'use client';

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    const { user, signOutUser } = useAuth();

    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                {!user ? (
                    <Link href="/sign-in">
                        <button className="btn-signin">Sign In</button>
                    </Link>
                ) : (
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            {user.email}
                        </span>
                        <button 
                            onClick={signOutUser}
                            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar