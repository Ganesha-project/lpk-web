import Image from "next/image"

const program = [
    {
        type: "Bekerja Sambil Kuliah",
        desc: "Mau bekerja sambil kuliah di Jepang?\nProgram ini cocok banget buat kamu!",
        imgUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "bekerja-sambil-kuliah"
    },
    {
        type: "Magang di Jepang",
        desc: "Program Magang buat kamu yang baru pertama kali ingin bekerja di Jepang!",
        imgUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "magang-di-jepang"
    },
    {
        type: "Program Caregiver (Perawat)",
        desc: "Kamu bekerja di bidang Medis/Keperawatan dan ingin bekerja di Jepang?\nProgram Caregiver cocok banget buat kamu!",
        imgUrl: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "program-caregiver"
    },
    {
        type: "Program Engineering",
        desc: "Kamu mau bekerja di Jepang sebagai Teknisi/Engineering?\nPake program ini aja!",
        imgUrl: "https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "program-engineering"
    }
];

export const Program = () => {
    return (
        <>
            <section className="py-20">
                <div className="flex flex-col  lg:mx-24 mx-5 gap-5">
                    <h1 className="lg:text-6xl text-2xl pl-3 border-l-4 border-red-500 font-medium">
                        Program Kami
                    </h1>
                    <div className="flex carousel lg:flex-wrap gap-3 lg:justify-center">
                        {program.map((el, index) => (
                            <div
                                className="lg:w-[24%] w-[70%] flex flex-col carousel-item"
                                key={index}
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={el.imgUrl}
                                    className="object-cover w-full h-[40lvh] border border-gray-800"
                                    alt=""
                                />
                                <div className="flex-grow p-3 bg-red-200 mt-3 border border-gray-800 flex flex-col justify-center items-center">
                                    <h1 className="text-xl text-center font-medium">
                                        {el.type}
                                    </h1>
                                    <p className="mt-3 text-center flex-grow">
                                        {el.desc}
                                    </p>
                                    <a
                                        className="px-4 py-2 bg-red-500 text-white rounded-full mt-5 w-fit duration-300 ease-in-out hover:scale-125 hover:bg-red-400"
                                        href=""
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}