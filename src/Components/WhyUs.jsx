import { MdGppGood } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { SiCoveralls } from "react-icons/si";
import { FaPeopleLine } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
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
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3">
                        <div className="p-5 lg:w-[25lvw] bg-red-300 border border-gray-800 flex flex-col gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <PiCertificateFill size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                LPK Bahasa Jepang yang Profesional dan Terpercaya
                            </h1>
                            <p>
                                Kami menjamin siswa-siswi lulusan LPK kami memiliki kualitas Bahasa Jepang dan ketrampilan kerja yang baik.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[25lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <MdGppGood size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Instruktur Berpengalaman dan Berkualifikasi Tinggi
                            </h1>
                            <p>
                                Instruktur kami tidak hanya berpengalaman tetapi juga berkualifikasi tinggi dalam mengajar Bahasa Jepang dan keterampilan kerja, memastikan bahwa setiap siswa mendapat bimbingan yang optimal.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[25lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <SiCoveralls size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Lingkungan Belajar dan Asrama yang Kondusif
                            </h1>
                            <p>
                                Kami menyediakan lingkungan belajar dan asrama yang kondusif agar para peserta dapat mengikuti program dengan nyaman dan aman.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[25lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <FaPeopleLine size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Persiapan Karier yang Mendalam dalam Setiap Materi Pembelajaran
                            </h1>
                            <p>
                                Kami tidak sekadar menyampaikan pelajaran Bahasa Jepang. Di sini, kami membentuk siswa untuk siap terjun langsung ke dunia kerja Jepang. Mulai dari sikap, etika hingga budaya kerja Jepang, setiap aspek pembelajaran kami dirancang untuk mempersiapkan siswa menghadapi tantangan karier di Jepang dengan percaya diri dan kompetensi yang tinggi.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[25lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <FaBuildingUser size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Dukungan Penuh dalam Proses Penempatan
                            </h1>
                            <p>
                                Kami memahami bahwa proses untuk bekerja di Jepang sangatlah rumit. Oleh karena itu, kami menyediakan dukungan komprehensif mulai dari persiapan dokumen, proses wawancara hingga keberangkatan. Tim kami siap membantu setiap langkah dalam perjalanan menuju karier di Jepang.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[25lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-700 w-fit rounded-full">
                                <MdConnectWithoutContact size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                Jaringan Luas dalam Industri
                            </h1>
                            <p>
                                Dengan jaringan yang luas dalam industri Jepang, kami membantu siswa kami menemukan peluang kerja yang sesuai dengan minat dan keterampilan mereka. Kami berkomitmen untuk membantu siswa mencapai potensi maksimal mereka di pasar kerja Jepang yang kompetitif.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}