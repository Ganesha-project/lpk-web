'use client'
import Image from "next/image";
import { useState } from "react";
import { MdCall } from "react-icons/md";

export const ProgramList = ({ data }) => {
    const [toggle, setToggle] = useState({ type: "requirements" });

    function updateToggle(type) {
        setToggle({ type });
    }

    return (
        <>
            <div id="explore" />
            <section className="lg:m-24 m-5 flex flex-col gap-10">
                {data.map((el, index) => (
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
                            <a
                                className="hidden px-4 py-2 lg:flex items-center gap-2 font-bold w-fit bg-red-500 text-white border border-gray-900 text-center duration-300 ease-in-out hover:scale-95 hover:bg-red-900"
                                href=""
                            >
                                <MdCall size={20} />
                                Contact Now
                            </a>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="flex flex-col lg:w-[40%] gap-5">
                                <Image
                                    width={500}
                                    height={500}
                                    className="border border-gray-800 w-full object-cover lg:h-[15lvw]"
                                    src="https://img.freepik.com/free-photo/men-women-carrying-backpack-searching-books-library_1150-24656.jpg?w=1800"
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
                                            className={`${toggle.type === 'requirements' ? "bg-violet-600 animate-pulse" : ""} border border-gray-900 text-lg lg:text-base lg:py-4 py-2 px-2 lg:px-8 w-full font-semibold duration-300 hover:scale-95 text-white bg-red-800`}>
                                            Persyaratan Umum
                                        </button>
                                        <button
                                            onClick={() => updateToggle('administrasi')}
                                            className={`${toggle.type === 'administrasi' ? "bg-rose-600 animate-pulse" : ""} border border-gray-900 text-lg lg:text-base lg:py-4 py-2 px-2 lg:px-8 w-full font-semibold duration-300 hover:scale-95 text-white bg-red-800`}>
                                            Persyaratan Administrasi
                                        </button>
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
                                                            <th>{index + 3}.</th>
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
                        <a
                            className="flex px-4 py-2 lg:hidden items-center gap-2 font-bold justify-center bg-red-500 text-white border border-gray-900 text-center duration-300 ease-in-out hover:scale-95 hover:bg-red-900"
                            href=""
                        >
                            <MdCall size={20} />
                            Contact Now
                        </a>
                    </div>
                ))}
            </section>

        </>
    );
};

export default ProgramList;