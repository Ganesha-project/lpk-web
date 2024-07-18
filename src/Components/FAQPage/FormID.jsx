import { MAIL } from "../../../MAIL"

export const FormID = () => {
    return (
        <>
            <form
                action={`https://formsubmit.co/${MAIL}`}
                className="flex flex-col gap-5"
                method="POST"
            >
                <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                    Email
                    <input type="email" name="email" className="grow" placeholder="" required />
                </label>
                <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                    Phone
                    <input type="number" name="phone" className="grow" placeholder="" required />
                </label>
                <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                    Name
                    <input type="text" name="name" className="grow" placeholder="" required />
                </label>
                <textarea type="text" name="message" required className="textarea shadow-2xl rounded-none border-none placeholder-slate-800" placeholder="Pesan"></textarea>
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_subject" value="Data Baru!"></input>
                <input type="hidden" name="_autoresponse" value="Terimakasih sudah mengisi form, agent kami akan segera menghubungimu :)"></input>
                {/* <input type="hidden" name="_next" value="http://localhost:3000/"></input> */}
                {/* <input type="hidden" name="_captcha" value="false"></input> */}
                <button
                    type="submit"
                    className="btn bg-red-500 text-white rounded-none hover:bg-red-600">
                    Send
                </button>
            </form>
        </>
    )
}