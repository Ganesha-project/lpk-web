export const FormJob = () => {
    return (
        <>
            <section className="min-h-screen lg:px-24 mx-5 pt-32">
                <div className="flex flex-col gap-5">
                    <h1 className="text-center text-5xl">
                        求人広告を無料で掲載したい企業様へ
                    </h1>
                    <h1 className="text-center text-2xl">
                        採用報酬型
                    </h1>

                    <div className="mt-10 flex flex-col items-center w-full">
                        <h1 className="text-center text-3xl mb-5 bg-white shadow-2xl px-3 py-1 w-fit">
                            お話ましょう！
                        </h1>
                        <form
                            action={`https://formsubmit.co/b93dca27f4e83a4300f3cf5c81bde495`}
                            className="flex flex-col gap-5 w-full"
                            method="POST"
                        >
                            <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                                担当者
                                <input type="text" name="担当者" className="grow" placeholder="" required />
                            </label>
                            <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                                会社名
                                <input type="email" name="会社名" className="grow" placeholder="" required />
                            </label>
                            <label className="input shadow-2xl rounded-none border-none flex items-center gap-2">
                                メール*
                                <input type="number" name="メール*" className="grow" placeholder="" required />
                            </label>
                            <p className="-mb-3">
                                求人内容
                            </p>
                            <textarea type="text" name="求人内容" required className="textarea shadow-2xl rounded-none border-none placeholder-slate-800" placeholder=""></textarea>
                            <input type="hidden" name="_template" value="box" />
                            {/* <input type="hidden" name="_next" value="http://localhost:3000/"></input> */}
                            <input type="hidden" name="_subject" value="Data Baru!"></input>
                            <input type="hidden" name="_autoresponse" value="Terimakasih sudah mengisi form, agent kami akan segera menghubungimu :)"></input>
                            {/* <input type="hidden" name="_captcha" value="false"></input> */}
                            <button
                                type="submit"
                                className="btn bg-red-500 text-white rounded-none hover:bg-red-600">
                                送る
                            </button>
                        </form>
                    </div>
                </div>

            </section>
        </>
    )
}