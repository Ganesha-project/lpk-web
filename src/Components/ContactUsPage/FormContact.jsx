import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io"
import { MdCall } from "react-icons/md"
import { MAIL } from "../../../MAIL"

export const FormContact = () => {
    return (
        <>
            <section className="lg:p-24 px-5">
                <div className="lg:border-t lg:border-b flex flex-col lg:flex-row pt-16 lg:pt-0">
                    <div className="flex flex-col gap-3 lg:w-[50%] lg:border-r lg:p-10">
                        <h1 className="text-2xl lg:text-5xl font-bold">
                            Contact us
                        </h1>
                        <p className="text-gray-500">
                            Grand Wisata, Jalan Celebration Boulevard Blok AA 15 - Nomor 29, Desa/Kelurahan Lambangsari, Kec. Tambun Selatan, Kab. Bekasi, Provinsi Jawa Barat, 17510.
                        </p>
                        <Link
                            href={''}
                            className="hover:bg-red-500 hover:text-white duration-300 flex gap-2 items-center border text-red-500 border-red-500 py-2 px-3 lg:w-[25lvw] ">
                            <MdCall size={20} />
                            02189090212
                        </Link>
                        <Link
                            href={''}
                            className="hover:bg-white hover:text-red-500 duration-300 flex gap-2 items-center border border-red-500 bg-red-500 text-white py-2 px-3 lg:w-[25lvw] ">
                            <IoMdMail size={20} />
                            hidamarikenshusenta@gmail.com
                        </Link>
                        <div className="flex gap-3">
                            <Link
                                href={''}
                                className="flex gap-2 items-center rounded-full hover:bg-red-600 duration-300 bg-red-500 text-white p-3 w-fit ">
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                href={''}
                                className="flex gap-2 items-center rounded-full hover:bg-red-600 duration-300 bg-red-500 text-white p-3 w-fit ">
                                <FaFacebook size={20} />
                            </Link>
                            <Link
                                href={''}
                                className="flex gap-2 items-center rounded-full hover:bg-red-600 duration-300 bg-red-500 text-white p-3 w-fit ">
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-10 lg:mt-0 lg:p-10 lg:w-[50%]">
                        <form
                            action={`https://formsubmit.co/${MAIL}`}
                            method="POST"
                            className="flex flex-col gap-5 ">
                            <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                                Email
                                <input name="email" type="text" className="grow" placeholder="" />
                            </label>
                            <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                                Phone
                                <input name="phone" type="text" className="grow" placeholder="" />
                            </label>
                            <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                                Name
                                <input name="name" type="text" className="grow" placeholder="" />
                            </label>
                            <textarea name="pesan" className="textarea rounded-none input-bordered border-red-500 placeholder-slate-800" placeholder="Pesan"></textarea>
                            <button className="btn bg-red-500 text-white rounded-none hover:bg-red-600">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}