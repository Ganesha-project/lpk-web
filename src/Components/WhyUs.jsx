import { MdGppGood } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { SiCoveralls } from "react-icons/si";
import { FaPeopleLine } from "react-icons/fa6";
export const WhyUs = () => {
    return (
        <>
            <section className="py-16 gridBg flex justify-center">
                <div className="mx-5 lg:mx-24 flex flex-col justify-between gap-5 lg:py-0 py-10 lg:justify-center lg:items-center">
                    <h1 className="lg:text-5xl font-medium text-2xl pl-3 border-l-4 border-red-500 lg:hidden flex">
                        Kenapa harus LPK <br />Hidamari Kenshu Senta?
                    </h1>
                    <h1 className="text-5xl font-medium lg:flex hidden">
                        Kenapa harus LPK Hidamari Kenshu Senta?
                    </h1>
                    <div className="flex flex-wrap flex-col lg:flex-row gap-3">
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <PiCertificateFill size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                LPK Berlisensi SO dan Ter-akreditasi
                            </h1>
                            <p>
                                Di LPK Hidamari Kenshu Senta, sudah ter-akreditasi dan Berlisensi SO.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <MdGppGood size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Terjamin dan Terpercaya
                            </h1>
                            <p>
                                Semua para peserta yang terdaftar sudah dijamin bisa berangkat ke Jepang.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <SiCoveralls size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Fasilitas Lengkap
                            </h1>
                            <p>
                                Fasilitas yang kami sediakan sangat lengkap mulai dari tempat tinggal (Mess) sampai dengan Dana Pinjaman.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <FaPeopleLine size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Lingkungan Belajar Kondusif
                            </h1>
                            <p>
                                Kami menyediakan lingkungan belajar yang kondusif agar para peserta dapat mengikuti program dengan nyaman dan aman.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}