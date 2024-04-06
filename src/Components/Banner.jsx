
import { FaArrowRightLong } from "react-icons/fa6";
import { TfiMedall } from "react-icons/tfi";
import { GiFallingStar } from "react-icons/gi";
import { TbLicense } from "react-icons/tb";
import Image from "next/image";

export const Banner = () => {
    return (
        <>
            <div className="hidden lg:flex animate__animated animate__fadeInDown animate_slow">
                <section className="lg:mx-24 mt-5 lg:pt-[1lvh] flex flex-col justify-center pt-12 mx-4 min-h-screen">
                    <div className="flex">
                        <div className="lg:p-12 p-5 border-t border-b border-gray-700 lg:w-[65%]">
                            <h1 className="lg:text-6xl text-2xl font-medium leading-[1] uppercase subpixel-antialiased">
                                Ayo Kerja dan Magang di <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">Jepang</span> dan raih impianmu!

                            </h1>
                            <div className="lg:px-3 lg:py-3 border-gray-700 lg:border rounded-full flex items-center mt-5 justify-between">
                                <p className="capitalize pl-5 lg:block hidden">
                                    Cek paket dan program kami sekarang!
                                </p>
                                <a href=""
                                    className="flex lg:text-xl items-center gap-3 py-4 px-5 bg-red-700 rounded-full text-white w-fit hover:scale-90 duration-300 hover:bg-red-900"
                                >
                                    Start
                                    <FaArrowRightLong />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-[35%] border border-gray-700 lg:block hidden">
                            <Image
                                width={500}
                                height={500}
                                className="w-full h-full"
                                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col">
                        <div className="flex lg:w-[65%]">
                            <div className="border-r flex-grow border-b border-l border-gray-700 p-4 lg:p-12 bg-gray-900 text-white w-[70lvw] lg:w-full">
                                <div className="flex justify-between items-center">
                                    <TbLicense size={45} />
                                    <p className="capitalize text-xl font-medium">
                                        Berlisensi SO
                                    </p>
                                </div>
                                <p className="mt-5 font-light">
                                    Dengan Lisensi SO yang kami miliki, Kamu dapat percayakan kualitas program pelatihan kamu ke LPK Hidamari Kenshu Senta!
                                </p>
                            </div>
                            <div className="border-r flex-grow border-b border-l border-gray-700 p-4 lg:p-12 bg-red-400 text-white w-[70lvw] lg:w-full">
                                <div className="flex justify-between items-center">
                                    <TfiMedall size={45} />
                                    <p className="capitalize text-xl font-medium">
                                        Terakreditasi
                                    </p>
                                </div>
                                <p className="mt-5 font-light">
                                    Kami bangga menjadi Lembaga yang terakreditasi, menandakan komitmen kami dalam menyediakan pendidikan berkualitas tinggi yang memenuhi standar yang ketat.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-[35%] border-b flex-grow h-auto border-b-gray-700 lg:border-b-0">
                            <div className="items-baseline flex justify-between">
                                <div className="lg:p-12 p-3 text-red-500">
                                    <GiFallingStar size={55} />
                                </div>
                                <p className="capitalize lg:w-[50%] lg:text-3xl text-right">
                                    Langkah Awal Menuju Masa Depan Yang Sukses!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}