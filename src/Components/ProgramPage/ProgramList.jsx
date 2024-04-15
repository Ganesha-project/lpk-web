'use client'
import Image from "next/image";
import { useState } from "react";
import { MdCall, MdStar } from "react-icons/md";
import { AnimateScroll } from "../AnimateScroll";
import { ModalRegister } from "./ModalRegister";

export const ProgramList = ({ data }) => {
    console.log('====================================');
    console.log();
    console.log('====================================');
    const [toggle, setToggle] = useState({ type: "requirements" });

    function updateToggle(type) {
        setToggle({ type });
    }

    return (
        <>
            <div id="explore" />
            <section className="lg:m-24 m-5 flex flex-col gap-24">
                {data.map((el, index) => (
                    <AnimateScroll animation={'animate__fadeInUp'}>
                        <div key={index} className="flex flex-col gap-5">
                            <div className="flex flex-col lg:flex-row gap-3 lg:justify-between lg:items-end">
                                <div className="flex items-center gap-2 border-b-8 lg:w-fit border-red-300 border-l-8 pl-4">
                                    <p className="font-bold text-5xl lg:text-9xl text-red-600">
                                        {el.id}
                                    </p>
                                    <h1 className="font-medium text-2xl lg:text-4xl text-red-900">
                                        {el.title}
                                    </h1>
                                </div>
                                <ModalRegister />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5">
                                <div className="flex flex-col lg:w-[40%] gap-5">
                                    <Image
                                        width={500}
                                        height={500}
                                        className="border object-top border-gray-800 w-full object-cover lg:h-[15lvw]"
                                        src={el.imageUrl}
                                        alt=""
                                    />
                                    <p className="p-5 border-2 border-red-200 h-fit text-justify">
                                        <span className="text-4xl text-red-900">Program</span> {el.description}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-5 lg:w-[60%]">
                                    <div className="flex flex-col gap-5 border-2 border-red-200 p-5 flex-grow">
                                        <div className="flex gap-5">
                                            <button
                                                onClick={() => updateToggle('requirements')}
                                                className={`${toggle.type === 'requirements' ? "bg-violet-600 animate-pulse" : ""} border border-gray-900 text-lg lg:text-base lg:py-4 py-2 px-2 lg:px-8 w-full font-semibold duration-300 hover:scale-95 text-white bg-red-800`}
                                            >
                                                Persyaratan
                                            </button>
                                            {data[1] && index !== 1 && // Periksa apakah data[1] ada dan index saat ini adalah 1
                                                <button
                                                    onClick={() => updateToggle('administrasi')}
                                                    className={`${toggle.type === 'administrasi' ? "bg-rose-600 animate-pulse" : ""} border border-gray-900 text-lg lg:text-base lg:py-4 py-2 px-2 lg:px-8 w-full font-semibold duration-300 hover:scale-95 text-white bg-red-800`}
                                                >
                                                    Persyaratan Administrasi
                                                </button>
                                            }

                                        </div>
                                        <div className={`${toggle.type !== 'requirements' ? "hidden scale-50" : "scale-100 inline"} overflow-y-auto flex-grow h-[41lvh]`}>
                                            <div className="p-5 border border-gray-900 bg-red-200">
                                                <table className="table table-sm">
                                                    <tbody>
                                                        {el.requirements.map((requirement, index) => (
                                                            <tr key={index}>
                                                                <td>{index + 1}.</td>
                                                                <td>{requirement}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tbody>
                                                        {el.special_requirements?.map((requirement, index) => (
                                                            <tr key={index}>
                                                                <th>{<MdStar />}</th>
                                                                <th>{requirement}</th>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className={`${toggle.type !== 'administrasi' ? "hidden scale-50" : "scale-100 inline"} overflow-y-auto flex-grow h-[41lvh]`}>
                                            <div className="p-5 border border-gray-900 bg-red-200">
                                                <table className="table table-sm">
                                                    <tbody>
                                                        {el.administrasi.map((administrasi, index) => (
                                                            <tr key={index}>
                                                                <td>{index + 1}.</td>
                                                                <td>{administrasi}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tbody>
                                                        {el.special_administrasi?.map((administrasi, index) => (
                                                            <tr key={index}>
                                                                <th>{index + 3}.</th>
                                                                <th>{administrasi}</th>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateScroll>
                ))}
            </section>

        </>
    );
};

export default ProgramList;