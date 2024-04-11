import { BsFillQuestionCircleFill } from "react-icons/bs";
export const ContentFaq = ({ data }) => {
    return (
        <>
            <section className="lg:p-24 p-5 flex items-center justify-center flex-col pt-24">
                <h1 className="lg:text-5xl text-3xl text-center mb-5">
                    Frequently Asked Questions
                </h1>
                <div>
                    {data.map((el, index) => (
                        <div
                            key={index}
                            className={`collapse collapse-arrow rounded-none border-b border-gray-800`}>
                            <input type="checkbox" name="my-accordion-2" className="w-full" />
                            <div className="collapse-title lg:text-xl font-medium flex items-center gap-3">
                                <BsFillQuestionCircleFill size={25} className="min-w-10" />
                                {el.question}
                            </div>
                            <div className="collapse-content">
                                <p>
                                    {el.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}