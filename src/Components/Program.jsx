import Image from "next/image"
import Link from "next/link";
import { FaQuoteRight } from "react-icons/fa6";

const program = [
    {
        type: "Program Caregiver (Perawat Lansia)",
        desc: "Kamu bekerja di bidang Medis/Keperawatan dan ingin bekerja di Jepang?\nProgram Caregiver cocok banget buat kamu!",
        imgUrl: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "program-caregiver"
    },
    {
        type: "Program Pekerja Berketrampilan Khusus (SSW)",
        desc: "Buat kamu yang mau bekerja di berbagai macam industri khusus di Jepang, Program ini cocok banget buat kamu!",
        imgUrl: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1713174086/LPK%20Asset/vpa39jf2olt2sfu9bl8k.webp",
        slug: "program-caregiver"
    },
    {
        type: "Magang di Jepang",
        desc: "Program Magang buat kamu yang baru pertama kali ingin bekerja di Jepang!",
        imgUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "magang-di-jepang"
    },
    {
        type: "Program Engineering",
        desc: "Kamu mau bekerja di Jepang sebagai Teknisi/Engineering?\nPake program ini aja!",
        imgUrl: "https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "program-engineering"
    },
    {
        type: "Bekerja Sambil Kuliah",
        desc: "Mau bekerja sambil kuliah di Jepang?\nProgram ini cocok banget buat kamu!",
        imgUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "bekerja-sambil-kuliah"
    }
];

export const Program = () => {
    return (
        <>
            <div id="explore" />
            <section className="py-20">
                <div className="flex flex-col lg:mx-24 mx-5 gap-5">
                    <h1 className="lg:text-6xl text-2xl pl-3 border-l-4 border-red-500 font-medium">
                        Program Kami
                    </h1>
                    <div className="flex carousel lg:flex-wrap gap-4 lg:justify-center">
                        {program.map((el, index) => (
                            <div
                                className="lg:w-[30%] w-[70%] flex flex-col carousel-item"
                                key={index}
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={el.imgUrl}
                                    className="object-cover w-full h-[40lvh] border border-gray-800"
                                    alt=""
                                />
                                <div className="flex-grow p-3 bg-red-200 mt-4 border border-gray-800 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-center font-medium">
                                        {el.type}
                                    </h1>
                                    <p className="mt-3 text-center flex-grow">
                                        {el.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="w-[30%] gridBg lg:flex lg:flex-col gap-5 p-5 hidden border border-gray-800">
                            <FaQuoteRight size={25} className="text-red-500" />
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
                    <Link
                        className="px-4 py-2 lg:hidden font-bold bg-red-500 text-white border border-gray-900 text-center duration-300 ease-in-out hover:scale-95 hover:bg-red-900"
                        href={'/program'}
                    >
                        Cek Semua Program
                    </Link>
                </div>

            </section>
        </>
    )
}