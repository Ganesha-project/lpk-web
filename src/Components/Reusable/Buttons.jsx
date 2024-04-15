"use client"
import Link from "next/link"
import { RiWhatsappFill } from "react-icons/ri"
import { useState, useEffect } from 'react';
import { MdAppRegistration } from "react-icons/md";

export const Buttons = () => {
    const WaLink = "https://api.whatsapp.com/send?phone=62881025220845&text=Halo%20LPK%20Hidamari%20Kenshu%20Senta"
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fungsi yang dijalankan setiap kali komponen di-mount atau nilai isVisible berubah
        const handleScroll = () => {
            // Tentukan titik scroll ketika tombol muncul
            const scrollThreshold = 200;

            // Periksa posisi scroll
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Pasang event listener untuk memantau scroll
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Dependency array kosong agar useEffect hanya dijalankan sekali saat komponen di-mount

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll ke atas
        });
    };
    return (
        <>
            <section className="flex flex-col gap-3 duration-300">
                <div>
                    <button
                        onClick={scrollToTop}
                        className={`${isVisible ? "scale-100 " : 'scale-0 '} bg-[#dc25255d] duration-300 backdrop-blur-md hover:bg-[#dc2525] text-white rounded-full p-4 shadow-lg`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </button>
                </div>
                <Link
                    href={WaLink}
                >
                    <button
                        className="bg-[#4DED69] hover:bg-[#35a549] hover:scale-95 duration-300 ease-in-out text-white font-bold py-4 px-4 rounded-full">
                        <RiWhatsappFill size={25} />
                    </button>
                </Link>
                <Link
                    href={'/registrasi'}
                >
                    <button
                        className="bg-red-500 hover:bg-red-600 hover:scale-95 duration-300 ease-in-out text-white font-bold py-4 px-4 rounded-full">
                        <MdAppRegistration size={25} />
                    </button>
                </Link>
            </section>
        </>
    )
}