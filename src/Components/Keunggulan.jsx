import { AccordionKeunggulan } from "./AccordionKeunggulan"

export const Keunggulan = () => {
    return (
        <>
            <section className="py-16 mx-24 flex flex-col items-center">
                <div className="flex gap-5 justify-center items-center">
                    <div className="w-[50%] border-r-4 py-40 pr-3 border-red-600 flex-grow h-full">
                        <p className="text-6xl text-right flex-grow tracking-wider leading-[1.1]">
                            Keunggulan <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400" >Kami</span>
                        </p>
                    </div>
                    <div className="w-[50%]">
                        <AccordionKeunggulan />
                    </div>
                </div>
            </section>
        </>
    )
}