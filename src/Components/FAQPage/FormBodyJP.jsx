import { IoLogoWhatsapp } from "react-icons/io"
import { FormJP } from "./FormJP"

export const FormBodyJP = () => {
    return (
        <>
            <h1 className="lg:text-5xl text-3xl text-center">
            お問い合わせ
            </h1>
            <div className="flex flex-col gap-5 mt-10">
                <FormJP />
            </div>
        </>
    )
}