import { FaArrowRight } from "react-icons/fa6";

const schedules = [
    { day: "Senin", time: "08:00 - 17:00 WIB" },
    { day: "Selasa", time: "08:00 - 17:00 WIB" },
    { day: "Rabu", time: "08:00 - 17:00 WIB" },
    { day: "Kamis", time: "08:00 - 17:00 WIB" },
    { day: "Jumat", time: "08:00 - 17:00 WIB" },
    { day: "Sabtu", time: "08:00 - 14:00 WIB" },
]
const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-pink-200", "bg-sky-200"];
const textColor = ["text-red-600", "text-blue-600", "text-green-600", "text-yellow-600", "text-pink-600", "text-sky-600"];

export const JadwalPelatihan = () => {
    return (
        <>
            <section className="mt-20 gridBg lg:min-h-screen py-16 lg:p-0 flex flex-col justify-center">
                <div className="lg:p-24 px-5 ">
                    <div className="flex flex-col justify-center gap-10">
                        <h1 className="lg:text-6xl text-3xl text-center">
                            Jadwal Pelatihan
                        </h1>
                        <div className="flex lg:flex-wrap carousel p-5 lg:justify-center gap-10">
                            {schedules.map((schedule, index) => (
                                <div key={index} className={`py-5 px-7 border flex flex-col gap-5 border-gray-700 min-w-[50lvw] lg:min-w-[25lvw] ${colors[index % colors.length]} duration-300 hover:scale-110 ease-in-out`}>
                                    <p className={`px-3 py-1 rounded-full bg-white font-bold lg:text-xl w-fit ${textColor[index % textColor.length]}`}>
                                        {schedule.day}
                                    </p>
                                    <p className="text-lg self-end font-medium">
                                        {schedule.time}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm self-end flex gap-1 items-center lg:hidden">
                            swipe
                            <FaArrowRight/>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}