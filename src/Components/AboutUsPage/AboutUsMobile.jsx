import Image from "next/image"
import { FaQuoteRight } from "react-icons/fa6";


export const AboutUsMobile = () => {
    return (
        <>
            <div id="explore" />
            <section className=" min-h-screen inline-block lg:hidden">
                <div className="lg:p-24 p-5 flex flex-col gap-5">
                    <h1 className="text-3xl font-medium lg:text-5xl text-gray-800">
                        Tentang{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-bl from-red-300 to-red-800">
                            LPK Hidamari Kenshu Senta
                        </span>
                    </h1>
                    <div className="flex flex-col gap-3">
                        <Image
                            width={500}
                            height={500}
                            className="w-full h-[30lvh] object-cover"
                            src="https://images.unsplash.com/photo-1461727885569-b2ddec0c4328?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="bg-red-200 -mx-5 p-5">
                            <div className="font-medium text-justify">
                                <p>Kami adalah Lembaga Pelatihan Kerja sebagai Penghubung antara Perusahaan Jepang dan Pemuda Indonesia yang ingin Bekerja dan Belajar di Jepang. Kami <strong>berdedikasi</strong> untuk mengantarkan Pemuda Indonesia menuju <strong>kesuksesan</strong> melalui program <strong>Pelatihan Bahasa Jepang</strong> dan <strong>Keterampilan Kerja</strong> untuk persiapan Pemagangan Teknis (Ginou jisshuu), Pekerja Berketrampilan Khusus (Tokutei Ginou), maupun Kuliah di Jepang (Ryuugaku). Dengan <strong>pengalaman lebih dari 10 tahun</strong> Tinggal dan Bekerja di Jepang, kami memahami betul <strong>esensi</strong> dan <strong>kebutuhan</strong> akan kemahiran bahasa dalam menggapai <strong>peluang</strong> di negeri <strong>Sakura</strong> tersebut.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-justify self-end font-medium text-gray-800 flex flex-col gap-5">
                        <p>Keahlian kami tidak hanya tercermin dalam pengalaman panjang kami di Jepang, tetapi juga dibuktikan melalui sertifikasi nasional Jepang, seperti sertifikasi Bahasa Jepang dan bidang terkait lainnya. Kami percaya bahwa kemahiran Bahasa Jepang adalah kunci untuk membuka pintu peluang di berbagai bidang, baik di dalam negeri maupun internasional.</p>
                        <p>Kami mengemban amanah dan tanggung jawab untuk membantu generasi muda Indonesia mewujudkan impian mereka. Kami ingin menjadi mitra Anda dalam perjalanan menuju kesuksesan. Dengan berbagai program pelatihan dan kursus yang kami tawarkan, kami siap untuk membantu mengasah kemampuan Bahasa Jepang dan juga Keahlian Kerja Pemuda Indonesia sehingga siap untuk menghadapi tantangan global di masa depan.</p>
                        <p>Mari kita bersama-sama wujudkan impian kita, dan bersiaplah untuk mengukir prestasi bersama kami di LPK Hidamari Kenshu Senta!</p>
                    </div>
                    <FaQuoteRight className="self-end text-red-500 -mt-2" size={40} />
                </div>
            </section>
        </>
    )
}