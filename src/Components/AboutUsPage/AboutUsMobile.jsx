import Image from "next/image"
import { FaQuoteRight } from "react-icons/fa6";


export const AboutUsMobile = () => {
    return (
        <>
            <section className=" min-h-screen inline-block lg:hidden">
                <div className="lg:p-24 p-5 flex flex-col gap-5">
                    <h1 className="text-xl lg:text-5xl text-gray-800">
                        Tentang LPK Hidamari Kenshu Senta
                    </h1>
                    <div className="flex flex-col gap-3">
                        <img
                            width={500}
                            height={500}
                            className="w-full h-[30lvh] object-cover"
                            src="https://images.unsplash.com/photo-1461727885569-b2ddec0c4328?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="bg-red-200 p-5">
                            <div className="font-medium text-justify">
                                <p>Kami adalah lembaga yang <strong>berdedikasi</strong> untuk memberikan pelatihan kerja <strong>berkualitas tinggi</strong> bagi para calon pekerja yang ingin membangun karir mereka di <strong>Jepang</strong>. Sebagai lembaga yang <strong>berpengalaman</strong> dan <strong>terpercaya</strong>, kami telah membantu ribuan individu untuk meraih <strong>kesuksesan</strong> dalam <strong>dunia kerja Jepang</strong>.</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-justify self-end font-medium text-gray-800">
                        Di LPK Hidamari Kenshu Senta, kami memahami pentingnya <strong>integrasi budaya</strong>, <strong>keterampilan teknis</strong>, dan <strong>kesiapan profesional</strong> dalam mencapai tujuan karir di Jepang. Oleh karena itu, kami menyediakan <strong>program pelatihan yang komprehensif dan terarah</strong> yang dirancang khusus untuk mempersiapkan Anda dengan keterampilan dan pengetahuan yang diperlukan dalam berbagai bidang industry di Jepang. Kami memiliki <strong>program pelatihan yang dapat disesuaikan</strong> dengan kebutuhan Anda. Mari bergabung dengan kami dan mulailah perjalanan menuju <strong>kesuksesan karir Anda di Jepang</strong> bersama LPK Hidamari Kenshu Senta!
                    </p>
                    <FaQuoteRight className="self-end text-red-500 -mt-2" size={40} />
                </div>
            </section>
        </>
    )
}