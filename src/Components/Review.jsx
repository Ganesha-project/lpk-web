import { FaQuoteRight } from "react-icons/fa6";

const reviews = [
    {
        name: "Fatahillah Muhammad",
        review: "Terimakasih LPK Hidamari Kenshu Senta sangat membantu sekali bagi saya untuk bisa mewujudkan mimpi saya bekerja di Jepang."
    },
    {
        name: "Andriyawan Setyawan",
        review: "LPK Hidamari Kenshu Senta sangat membantu saya dalam belajar berbahasa Jepang sampai dengan diterima bekerja di Jepang, sukses selalu LPK Hidamari Kenshu Senta!"
    },
    {
        name: "Shinta Handayani",
        review: "Selama belajar di LPK Hidamari Kenshu Senta, saya sangat merasa nyaman karena lingkungan belajarnya sangat bersahabat dan membuat saya mudah dalam mencerna ilmu yang diberikan!"
    }
];

export const Review = () => {
    return (
        <>
            <section className="py-16 mx-5 lg:mx-24">
                <div>
                    <h1 className="lg:text-4xl text-2xl pl-3 border-l-4 border-red-500 font-medium">
                        Apa kata mereka tentang <br />LPK Hidamari Kenshu Senta?
                    </h1>
                    <div className="mt-5 flex gap-5 lg:justify-between carousel">
                        {reviews.map((el, index) => (
                            <div key={index} className="p-5 border gridBg border-gray-800 min-w-96 lg:w-[35%]">
                                <FaQuoteRight className="text-red-500 mb-5" size={50} />
                                <h1 className="text-2xl font-medium">
                                    {el.name}
                                </h1>
                                <p>
                                    {el.review}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}