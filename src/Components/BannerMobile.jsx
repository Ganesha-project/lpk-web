import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"
import { TbLicense } from "react-icons/tb"
import { TfiMedall } from "react-icons/tfi"

export const BannerMobile = () => {
    return (
        <>
            <section className="flex lg:hidden animate__animated animate__fadeInDown animate_slow">
                <div className="min-h-screen flex flex-col">
                    <div className="h-auto flex-grow lg:border border-gray-700 relative">
                        <Image
                            width={500}
                            height={500}
                            className="w-full h-full brightness-75 lg:brightness-100"
                            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="absolute inset-5 text-white flex flex-col justify-end self-end">

                            <h1 className="font-medium text-3xl">
                                LPK Hidamari
                            </h1>
                            <p>
                                Magang ke <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 font-bold">Jepang</span> dan Rajut Masa Depan Terbaikmu!
                            </p>
                            <a href="#explore"
                                className="flex lg:text-xl my-3 items-center gap-3 py-2 px-4 bg-[#ffffff5f] backdrop-blur-lg rounded-full text-white w-fit hover:scale-90 duration-300 hover:bg-red-500"
                            >
                                Start
                                <FaArrowRightLong />
                            </a>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[50%] flex-grow h-full border-r border-b border-l border-gray-700 p-4 lg:p-12 bg-gray-900 text-white lg:w-full">
                            <div className="flex justify-between items-center">
                                <TbLicense size={30} />
                                <p className="capitalize text-lg font-medium">
                                    Terpercaya
                                </p>
                            </div>
                            <p className="mt-5 text-xs font-light">
                                Dengan berbagai macam program dan para pengajar yang terbaik kamu dapat percayakan kualitas program pelatihan kamu ke LPK Hidamari Kenshu Senta!                            </p>
                        </div>
                        <div className="w-[50%] flex-grow h-full border-r border-b border-l border-gray-700 p-4 lg:p-12 bg-red-400 text-white lg:w-full">
                            <div className="flex justify-between items-center">
                                <TfiMedall size={30} />
                                <p className="capitalize text-lg font-medium">
                                    Berpengalaman
                                </p>
                            </div>
                            <p className="mt-5 text-xs font-light">
                                Pengajar di LPK Hidamari Kenshu Senta sangat berpengalaman dan memiliki kemampuan serta ilmu yang mempermudah memenuhi standar kerja di Jepang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}