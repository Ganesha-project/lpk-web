export const FormJP = () => {
    return (
        <>
            <form
                action={`https://formsubmit.co/${process.env.EMAIL}`}
                method="POST"
                className="flex flex-col gap-5"
            >
                <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                    名前•
                    <input type="text" name="名前*" className="grow" placeholder="" required />
                </label>
                <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                    メール•
                    <input type="email" name="メール*" className="grow" placeholder="" required />
                </label>
                <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                    件名
                    <input type="number" name="件名" className="grow" placeholder="" required />
                </label>
                <textarea type="text" name="メッセージ" required className="textarea shadow-2xl rounded-none border-none placeholder-slate-800" placeholder="メッセージ"></textarea>
                <input type="hidden" name="_template" value="box" />
                {/* <input type="hidden" name="_next" value="http://localhost:3000/"></input> */}
                <input type="hidden" name="_subject" value="Data Baru!"></input>
                <input type="hidden" name="_autoresponse" value="Terimakasih sudah mengisi form, agent kami akan segera menghubungimu :)"></input>
                {/* <input type="hidden" name="_captcha" value="false"></input> */}
                <button
                    type="submit"
                    className="btn bg-red-500 text-white rounded-none hover:bg-red-600">
                    送信
                </button>
            </form>
        </>
    )
}