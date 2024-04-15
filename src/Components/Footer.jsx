import Link from "next/link"
import { FaFacebook, FaLinkedin } from "react-icons/fa6"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { RiInstagramFill } from "react-icons/ri"
import { FBLINK, IGLINK, LINKEDINLINK, MAILLINK, WALINK } from "./Links/Links"

export const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content mt-24">
                <aside>
                    <img
                        width={150}
                        height={150}
                        className=""
                        src={'/Logo_lpk.png'}
                        alt="" />
                    <p className="capitalize font-medium">LPK Hidamari Kenshu Senta<br />Raih Mimpimu dan berkarir di Jepang besama kami!</p>
                    <Link
                        href={'/registrasi'}
                    >
                        <button
                            className="link link-hover font-bold">
                            Registrasi Sekarang!
                        </button>
                    </Link>
                </aside>
                <nav>
                    <h6 className="text-xs font-bold uppercase text-red-500">Alamat</h6>
                    <Link
                        href={''} className="lg:w-[15lvw] link link-hover">
                        Grand Wisata, Jalan Celebration Boulevard Blok AA 15 - Nomor 29, Desa/Kelurahan Lambangsari, Kec. Tambun Selatan, Kab. Bekasi, Provinsi Jawa Barat, 17510.
                    </Link>
                </nav>
                <nav>
                    <h6 className="text-xs font-bold uppercase text-red-500">Navigasi</h6>
                    <Link href={'/'} className="link link-hover">Home</Link>
                    <Link href={'/program'} className="link link-hover">Program</Link>
                    <Link href={'/about-us'} className="link link-hover">About Us</Link>
                    <Link href={'/faq'} className="link link-hover">FAQ</Link>
                    <Link href={'/contact-us'} className="link link-hover">Contact Us</Link>
                </nav>
                <nav>
                    <h6 className="text-xs font-bold uppercase text-red-500">Kontak</h6>
                    <Link href={MAILLINK} className="link link-hover flex items-center gap-1">
                        <MdEmail />
                        Mail
                    </Link>
                    <Link href={WALINK} className="link link-hover flex items-center gap-1">
                        <IoLogoWhatsapp />
                        WhatsApp
                    </Link>
                    <Link href={IGLINK} className="link link-hover flex items-center gap-1">
                        <RiInstagramFill />
                        Instagram
                    </Link>
                    <Link href={FBLINK} className="link link-hover flex items-center gap-1">
                        <FaFacebook />
                        Facebook
                    </Link>
                    <Link href={LINKEDINLINK} className="link link-hover flex items-center gap-1">
                        <FaLinkedin />
                        LinkedIn
                    </Link>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by LPK Hidamari Kenshu Senta</p>
                </aside>
            </footer>
        </>
    )
}