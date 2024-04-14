'use client'
import Image from "next/image"
import { IoLogoWhatsapp } from "react-icons/io";
import { FormID } from "./FormID";
import { useState } from "react";

export const QuestionForm = () => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
    }
    return (
        <>
            <section className="lg:mx-24 mx-5 py-10 pb-24 -mb-24">
                <div className="flex gap-5 items-center justify-center mb-10">
                    <button
                        onClick={() => updateToggle(1)}
                        className={`${toggle === 1 ? "bg-red-300" : "bg-white"} flex items-center gap-2 justify-center text-xl font-bold py-2 px-4 duration-300 ease-in-out hover:scale-95 border border-gray-800 w-[15lvw]`}
                    >
                        <Image
                            width={'50'}
                            height={'50'}
                            className=""
                            src={'/indonesia.png'}
                            alt=""
                        />
                        Indonesia
                    </button>
                    <button
                        onClick={() => updateToggle(2)}
                        className={`${toggle === 2 ? "bg-red-300" : "bg-white"} flex items-center gap-2 justify-center text-xl font-bold py-2 px-4 duration-300 ease-in-out hover:scale-95 border border-gray-800 w-[15lvw]`}
                    >
                        <Image
                            width={'50'}
                            height={'50'}
                            className=""
                            src={'/japan.png'}
                            alt=""
                        />
                        Japan
                    </button>
                </div>
                <h1 className="lg:text-5xl text-3xl text-center">
                    Memiliki pertanyaan lain? isi form dibawah ini!
                </h1>
                <p className="text-center">
                    Agent kami akan membalas pertanyaan yang kamu kirim.
                </p>
                <div className="flex flex-col gap-5 mt-10">
                    <FormID />
                    <div className="bg-green-300 hover:bg-green-400 duration-300 flex-grow p-5 flex justify-center items-center flex-row gap-2 font-medium">
                        <p className="text-xl capitalize text-center">
                            Atau hubungi kami melalui WhatsApp
                        </p>
                        <div className="text-gray-800">
                            <IoLogoWhatsapp size={25} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}