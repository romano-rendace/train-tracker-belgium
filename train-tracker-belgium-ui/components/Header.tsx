"use client";

import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white px-6 py4">
            <nav className="flex gap-6">
                <Link href={"/"} className="hover:underline" >
                    Home
                </Link>
                <Link href={"/trains"} className="hover:underline">
                    Trains
                </Link>
                <Link href={"about"} className="hover:underline">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;