'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const path = usePathname()
    const productsPath = path.startsWith('/program') ;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`navbar ${isScrolled ? "bg-[#ffffff76] backdrop-blur-lg !text-gray-800" : "bg-transparent text-gray-800"} ${productsPath ? "bg-[#ffffff76] text-white": "text-gray-800"} duration-300 ease-in-out fixed z-50`}>
                <div className="navbar-start lg:pl-24">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Hidamari</a>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link
                                    href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"program"}>
                                    Program
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"gallery"}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"about-us"}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"faq"}>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end lg:pr-24">
                    <a
                        href=""
                        className="bg-red-600 hover:bg-red-800 hover:scale-95 duration-300 font-medium text-white py-2 px-5 rounded-full">Contact Us</a>
                </div>
            </div>
        </>
    )
}