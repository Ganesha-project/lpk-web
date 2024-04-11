export const Izin = ({ data }) => {
    return (
        <>
            <section className="lg:mx-24 m-5 -mb-10 pb-24">
                <div className="">
                    <h1 className="lg:text-5xl text-3xl text-center mb-5">
                        Status Izin Tinggal Utama untuk Pekerja Asing
                    </h1>
                    <p className="text-center">
                        Pekerja Asing diperbolehkan bekerja di Jepang sesuai dengan status tinggal mereka sebagaimana diatur dalam Undang-Undang Pengendalian Imigrasi dan Pengakuan Pengungsi yang disebut "Undang-Undang Imigrasi". Ketika akan memperkerjakan Warga Negara Asing, kita perlu memastikan status tinggal yang memungkinkan untuk mereka bekerja di Jepang.
                    </p>
                    <div className="overflow-x-auto mt-5">
                        <table className="table table-lg border border-gray-800">
                            {/* head */}
                            <thead className="text-base text-gray-800 uppercase bg-red-200">
                                <tr>
                                    <th className="border border-gray-800">Status Izin Tinggal</th>
                                    <th className="border border-gray-800">Pemagangan Teknis</th>
                                    <th className="border border-gray-800">Pekerja Berketrampilan Khusus (Tokutei Ginou)</th>
                                    <th className="border border-gray-800">Pekerja Asing Terampil</th>
                                </tr>
                            </thead>
                            <tbody className="bg-red-100 text-center">
                                {data.map((el, index) => <tr key={index}>{el.row2?.map(item => <td className={item === "Pembentukan Sistem" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row3?.map(item => <td className={item === "Tujuan Sistem" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row4?.map(item => <td className={item === "Ringkasan" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row5?.map(item => <td className={item === "Negara Pengirim" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row6?.map(item => <td className={item === "Masa Kerja" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row7?.map(item => <td className={item === "Gaji" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row8?.map(item => <td className={item === "Biaya Penerimaan" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row9?.map(item => <td className={item === "Tingkat Kemampuan Bahasa Jepang" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                                {data.map((el, index) => <tr key={index}>{el.row10?.map(item => <td className={item === "Pindah Pekerjaan" ? 'bg-red-200 uppercase font-bold text-center border border-gray-800' : 'bg-red-100 border border-gray-800'}>{item}</td>)}</tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
