import { AccordionKeunggulan } from "./AccordionKeunggulan"

export const Keunggulan = () => {
    return (
        <>
            <section className="py-16 mx-5 lg:mx-24 flex flex-col lg:items-center">
                <div className="flex flex-col lg:flex-row gap-5 lg:justify-center lg:items-center">
                    <div className="hidden lg:flex lg:w-[50%] border-r-4 py-40 pr-3 border-red-600 flex-grow h-full">
                        <p className="font-medium text-6xl text-right flex-grow tracking-wider leading-[1.1]">
                            Keunggulan <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400" >Kami</span>
                        </p>
                    </div>
                    <div className="flex lg:hidden lg:w-[50%] border-l-4  pl-3 border-red-600 flex-grow h-full">
                        <p className="font-medium text-4xl flex-grow tracking-wider leading-[1.1]">
                            Keunggulan <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400" >Kami</span>
                        </p>
                    </div>
                    <div className="lg:w-[50%]">
                        <AccordionKeunggulan />
                    </div>
                </div>
            </section >
        </>
    )
}