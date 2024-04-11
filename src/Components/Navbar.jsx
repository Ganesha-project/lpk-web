'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const path = usePathname()
    const specialPath = path.startsWith('/program') || path.startsWith('/about-us');
    const faqPath = path.startsWith('/faq')

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
            <div className={`navbar ${isScrolled ? "bg-[#00000076] backdrop-blur-lg !text-white" : "bg-transparent text-white lg:text-gray-800"} ${specialPath ? "!text-white" : "text-gray-800"} ${faqPath ? '!text-gray-800' : ''} duration-300 ease-in-out fixed z-50`}>
                <div className="navbar-start lg:pl-24">
                    <div className="dropdown">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div tabIndex={0} role="button" className="drawer-content btn btn-ghost btn-circle lg:hidden">
                                <label htmlFor="my-drawer" className="drawer-button"><HiMenuAlt2 size={25} /></label>
                            </div>
                            <div className="drawer-side z-[60]">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar mobile content here */}
                                    <li>
                                        <Link
                                            className={path === '/' ? 'text-red-600 font-bold' : ''}
                                            href={"/"}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={path === '/program' ? 'text-red-600 font-bold' : ''}
                                            href={"program"}>
                                            Program
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={path === '/gallery' ? 'text-red-600 font-bold' : ''}
                                            href={"gallery"}>
                                            Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={path === '/about-us' ? 'text-red-600 font-bold' : ''}
                                            href={"about-us"}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={path === '/faq' ? 'text-white bg-red-600 text-center rounded-full font-bold' : ''}
                                            href={"faq"}>
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a className="text-xl font-bold">Hidamari</a>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-5 text-base ml-5">
                            <li>
                                <Link
                                    className={path === '/' ? 'text-white bg-red-600 px-3 py-1 text-center rounded-full font-bold' : ''}
                                    href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={path === '/program' ? 'text-white bg-red-600 px-3 py-1 text-center rounded-full font-bold' : ''}
                                    href={"program"}>
                                    Program
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={path === '/gallery' ? 'text-white bg-red-600 px-3 py-1 text-center rounded-full font-bold' : ''}
                                    href={"gallery"}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={path === '/about-us' ? 'text-white bg-red-600 px-3 py-1 text-center rounded-full font-bold' : ''}
                                    href={"about-us"}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={path === '/faq' ? 'text-white bg-red-600 px-3 py-1 text-center rounded-full font-bold' : ''}
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