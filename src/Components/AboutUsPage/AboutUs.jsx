import Image from "next/image"
import { FaQuoteRight } from "react-icons/fa6";


export const AboutUs = () => {
    return (
        <>
            <section className="min-h-screen hidden lg:inline-block">
                <div className="lg:p-24 p-5 flex flex-col gap-5">
                    <h1 className="text-xl lg:text-5xl text-gray-800">
                        Tentang{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-bl from-red-300 to-red-800">
                            LPK Hidamari Kenshu Senta
                        </span>
                    </h1>
                    <div className="">
                        <img
                            width={500}
                            height={500}
                            className="w-full h-[50lvh] object-cover"
                            src="https://images.unsplash.com/photo-1461727885569-b2ddec0c4328?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="p-5 -mt-24 m-2 w-[80%] lg:ml-10 bg-red-200 bg-opacity-100 backdrop-blur-sm absolute lg:w-[30lvw]">
                            <div className="font-medium text-justify">
                                <p>Kami adalah lembaga yang <strong>berdedikasi</strong> untuk memberikan pelatihan kerja <strong>berkualitas tinggi</strong> bagi para calon pekerja yang ingin membangun karir mereka di <strong>Jepang</strong>. Sebagai lembaga yang <strong>berpengalaman</strong> dan <strong>terpercaya</strong>, kami telah membantu ribuan individu untuk meraih <strong>kesuksesan</strong> dalam <strong>dunia kerja Jepang</strong>.</p>
                            </div>
                        </div>
                    </div>
                    <FaQuoteRight className="self-end text-red-500 -mt-2" size={40} />
                    <div className="w-[60%] -mt-5 text-justify self-end px-10 font-medium text-gray-800">
                        <p>
                            Di LPK Hidamari Kenshu Senta, kami memahami pentingnya <strong>integrasi budaya</strong>, <strong>keterampilan teknis</strong>, dan <strong>kesiapan profesional</strong> dalam mencapai tujuan karir di Jepang. Oleh karena itu, kami menyediakan <strong>program pelatihan yang komprehensif dan terarah</strong> yang dirancang khusus untuk mempersiapkan Anda dengan keterampilan dan pengetahuan yang diperlukan dalam berbagai bidang industry di Jepang. Kami memiliki <strong>program pelatihan yang dapat disesuaikan</strong> dengan kebutuhan Anda. Mari bergabung dengan kami dan mulailah perjalanan menuju <strong>kesuksesan karir Anda di Jepang</strong> bersama LPK Hidamari Kenshu Senta!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}