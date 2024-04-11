import Image from "next/image"
import Link from "next/link"

export const BannerR = ({ imageBackground, title, descriptions }) => {
    return (
        <>
            <section className="relative animate__animated animate__fadeInDown animate_slow">
                <Image
                    width={1000}
                    height={1000}
                    className="w-screen lg:h-screen h-[80lvh] object-cover brightness-50"
                    src={imageBackground}
                    alt="" />
                <div className="absolute inset-0 lg:mx-10 mx-5 flex flex-col justify-center text-white gap-3">
                    <h1 className="lg:text-7xl text-3xl font-bold">
                        {title}
                    </h1>
                    <p className="lg:w-[50%] text-sm lg:text-base">
                        {descriptions}
                    </p>
                    <div className="h-2 bg-red-600 lg:w-[50%]"></div>
                    <Link
                        className="w-fit bg-red-600 hover:bg-red-800 hover:scale-95 duration-300 font-medium text-white py-2 px-4 rounded-full"
                        href="#explore"
                    >
                        Jelajahi
                    </Link>
                </div>
            </section>
        </>
    )
}