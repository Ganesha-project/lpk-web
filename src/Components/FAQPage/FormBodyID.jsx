import { IoLogoWhatsapp } from "react-icons/io"
import { FormID } from "./FormID"

export const FormBodyID = () => {
    return (
        <>
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
        </>
    )
}