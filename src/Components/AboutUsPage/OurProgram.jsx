import Image from "next/image"
import Link from "next/link"
import { FaQuoteRight } from "react-icons/fa6"

export const OurProgram = ({ data }) => {
    return (
        <>
            <section className="gridBg">
                <div className="lg:p-24 p-5 flex items-center justify-center flex-col">
                    <p className="lg:text-5xl text-3xl font-medium mb-10 underline">
                        Our Programs
                    </p>
                    <div className="flex lg:flex-wrap lg:flex-row lg:justify-center lg:items-center gap-5 flex-col">
                        {data.map((el) => (
                            <div key={el.id} className="lg:w-[40lvw] lg:h-[20lvw]">
                                <div className="relative group">
                                    <Image
                                        width={500}
                                        height={500}
                                        className="lg:w-[40lvw] lg:h-[20lvw] object-cover border border-gray-800"
                                        src={el.imageUrl}
                                        alt="" />
                                    <div className="absolute inset-2 lg:inset-5 flex flex-col justify-end">
                                        <p className="bg-[#00000043] backdrop-blur-md lg:p-5 p-3 text-white lg:text-xl group-hover:opacity-0 duration-300 group-hover:scale-0">
                                            {el.title}
                                        </p>
                                    </div>
                                    <div className="absolute inset-2 lg:inset-5 flex flex-col justify-end">
                                        <Link
                                            href={'/program'}
                                            className="bg-red-500 w-fit hover:bg-red-600 font-bold backdrop-blur-md px-3 py-2 text-white text-xl opacity-0 duration-300 group-hover:opacity-100 scale-0 group-hover:scale-100">
                                            More Info
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="lg:w-[40lvw] bg-slate-900 text-white lg:flex lg:flex-col gap-5 p-5 hidden border border-gray-800">
                            <FaQuoteRight size={25} className="text-white" />
                            <p className="text-xl drop-shadow-md">
                                Temukan peluang tak terbatas untuk meraih impianmu di Jepang dengan beragam program unggulan LPK. Mulai dari perawatan lansia hingga karier teknologi, setiap langkahmu menuju sukses dimulai di sini.
                            </p>
                            <Link
                                className="px-4 py-2 w-fit font-bold bg-red-500 text-white border border-gray-900 text-center duration-300 ease-in-out hover:scale-95 hover:bg-red-900"
                                href={'/program'}
                            >
                                Cek Semua Program
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}