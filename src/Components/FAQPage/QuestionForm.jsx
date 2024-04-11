import Image from "next/image"
import { IoLogoWhatsapp } from "react-icons/io";

export const QuestionForm = () => {
    return (
        <>
            <section className="lg:mx-24 mx-5 py-10">
                <h1 className="lg:text-5xl text-3xl text-center mb-5">
                    Memiliki pertanyaan lain? isi form dibawah ini!
                </h1>
                <p className="text-center">
                    Agent kami akan membalas pertanyaan yang kamu kirim.
                </p>
                <div className="flex flex-col gap-5 mt-10">
                    <form
                        action=""
                        className="flex flex-col gap-5 ">
                        <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="" />
                        </label>
                        <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                            Phone
                            <input type="text" className="grow" placeholder="" />
                        </label>
                        <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                            Name
                            <input type="text" className="grow" placeholder="" />
                        </label>
                        <textarea id="" className="textarea shadow-2xl rounded-none border-none placeholder-slate-800" placeholder="Pesan"></textarea>
                        <button className="btn bg-red-500 text-white rounded-none hover:bg-red-600">
                            Send
                        </button>
                    </form>
                    <div className="bg-green-300 hover:bg-green-400 duration-300 flex-grow p-5 flex justify-center items-center flex-row gap-2 font-medium">
                        <p className="text-xl capitalize text-center">
                            Atau hubungi kami melalui WhatsApp
                        </p>
                        <div className="text-gray-800">
                            <IoLogoWhatsapp size={25}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}