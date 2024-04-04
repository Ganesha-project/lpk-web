import { MdGppGood } from "react-icons/md";
export const WhyUs = () => {
    return (
        <>
            <section className="py-16 gridBg flex justify-center">
                <div className="mx-5 lg:mx-24 flex flex-col gap-5 lg:py-0 py-10 lg:justify-center lg:items-center">
                    <h1 className="lg:text-5xl font-medium text-2xl pl-3 border-l-4 border-red-500 lg:hidden flex">
                        Kenapa harus LPK <br />Hidamari Kenshu Senta?
                    </h1>
                    <h1 className="text-5xl font-medium lg:flex hidden">
                        Kenapa harus LPK Hidamari Kenshu Senta?
                    </h1>
                    <div className="flex flex-wrap flex-col lg:flex-row gap-3">
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col gap-3">
                            <div className="p-3 bg-white text-red-400 w-fit rounded-full">
                                <MdGppGood size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                LPK Berlisensi SO dan Ter-akreditasi
                            </h1>
                            <p>
                                Di LPK Hidamari Kenshu Senta, sudah ter-akreditasi dan Berlisensi SO.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-400 w-fit rounded-full">
                                <MdGppGood size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                LPK Berlisensi SO dan Ter-akreditasi
                            </h1>
                            <p>
                                Di LPK Hidamari Kenshu Senta, sudah ter-akreditasi dan Berlisensi SO.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-400 w-fit rounded-full">
                                <MdGppGood size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                LPK Berlisensi SO dan Ter-akreditasi
                            </h1>
                            <p>
                                Di LPK Hidamari Kenshu Senta, sudah ter-akreditasi dan Berlisensi SO.
                            </p>
                        </div>
                        <div className="p-5 lg:w-[20lvw] bg-red-300 border border-gray-800 flex flex-col  gap-3">
                            <div className="p-3 bg-white text-red-400 w-fit rounded-full">
                                <MdGppGood size={30} />
                            </div>
                            <h1 className="text-xl font-medium">
                                LPK Berlisensi SO dan Ter-akreditasi
                            </h1>
                            <p>
                                Di LPK Hidamari Kenshu Senta, sudah ter-akreditasi dan Berlisensi SO.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}