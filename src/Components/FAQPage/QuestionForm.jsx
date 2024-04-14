'use client'
import Image from "next/image"
import { IoLogoWhatsapp } from "react-icons/io";
import { FormID } from "./FormID";
import { useState } from "react";
import { FormBodyID } from "./FormBodyID";
import { FormBodyJP } from "./FormBodyJP";

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
                <div className={`${toggle === 1 ? 'flex flex-col' : "hidden"}`}>
                    <FormBodyID />
                </div>
                <div className={`${toggle === 2 ? 'flex flex-col' : "hidden"}`}>
                    <FormBodyJP />
                </div>
            </section>
        </>
    )
}