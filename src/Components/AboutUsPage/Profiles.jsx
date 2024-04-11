import Image from "next/image"
import { AnimateScroll } from "../AnimateScroll"

export const Profiles = () => {
    return (
        <>
            <AnimateScroll animation={'animate__fadeInUp'}>
                <section className="lg:m-24 m-5">
                    <p className="border-l-4 pl-3 border-red-600 text-3xl mb-5">
                        Director Biodata
                    </p>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="min-w-[35lvw] h-[50lvh] lg:h-[35lvw] relative">
                            <Image
                                width={500}
                                height={500}
                                className="min-w-[35lvw] h-[50lvh] lg:h-[35lvw] object-cover "
                                src={'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                alt=""
                            />
                            <div className="absolute inset-5 flex flex-col justify-end">
                                <div className="bg-[#00000043] backdrop-blur-md p-5">
                                    <h1 className="lg:text-5xl text-3xl text-white font-medium">
                                        Evie Irawati
                                    </h1>
                                    <p className="text-gray-100">
                                        Direktur Utama
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-justify flex flex-col gap-2 leading-relaxed tracking-wide">
                            <p>Saya warga negara Indonesia yang lahir di Yogyakarta pada bulan Agustus 1989, meraih gelar dari Akademi Keperawatan Notokusumo (sekarang dikenal sebagai STIKES NOTOKUSUMO) Yogyakarta, jurusan keperawatan, pada tahun 2010. Setelah menyelesaikan studi, saya mendapat beasiswa untuk mempelajari Bahasa Jepang, yang membawa saya lulus sebagai kandidat EPA angkatan ke-4. Pengalaman pertama saya di Jepang dimulai pada tahun 2011, diikuti dengan pembelajaran Bahasa Jepang di AOTS selama 6 bulan sebelum saya memulai pekerjaan di Tokuhoukai Jimyouin Kaga, Ishikawaken pada bulan Januari 2012.</p>
                            <p>Pada tahun kedua saya di Jepang, saya berhasil meraih kelulusan ujian Bahasa Jepang JLPT N2, dan pada tahun 2015, saya juga berhasil meraih kelulusan ujian Nasional (Kokka Shiken) untuk profesi caregiver.</p>
                            <p>Pada tahun 2021, saya kembali ke Indonesia untuk menempuh pendidikan di salah satu Universitas swasta di Jakarta dengan mengambil jurusan Bahasa dan&nbsp;<br /> Kebudayaan Jepang, sekaligus bergabung dengan sebuah perusahaan Jepang sebagai Profesional Care Advisor. Di sini, saya aktif membagikan pengetahuan yang saya peroleh di Jepang mengenai perawatan pasien, terutama lansia, kepada perawat-perawat di rumah sakit dan panti jompo di Indonesia.</p>
                            <div className="bg-[#3b3013] w-full h-full">
                            </div>

                        </div>
                    </div>
                    <p className="lg:mt-4 text-justify leading-relaxed tracking-wide bg-[#ece8de] p-5">
                        Kami menyadari bahwa Jepang saat ini mengalami kekurangan tenaga kerja khususnya dalam bidang perawatan dan caregiver, akibat menurunnya angka kelahiran dan meningkatnya jumlah penduduk lansia sehingga jumlah penduduk usia produktif menjadi menurun. Di sisi lain, Indonesia memiliki banyak jumlah penduduk usia produktif. Oleh karena itu, kami melihat peluang besar bahwa Indonesia dapat memenuhi kebutuhan akan tenaga kerja tersebut. Guna berkontribusi pada perkembangan Jepang dan Indonesia, serta memenuhi kebutuhan akan tenaga kerja, kami mendirikan LPK Hidamari Kenshu Senta untuk melatih generasi muda Indonesia agar dapat bekerja dengan baik di perusahaan-perusahaan Jepang, baik untuk magang, Tokutei Ginou (SSW), maupun bidang Engineering.
                    </p>
                </section>
            </AnimateScroll>

            <AnimateScroll animation={'animate__fadeInUp'}>
                <section className="lg:m-24 m-5">
                    <p className="border-l-4 pl-3 border-red-600 text-3xl mb-5">
                        Instructor Biodata
                    </p>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="min-w-[35lvw] h-[50lvh] lg:h-[35lvw] relative">
                            <Image
                                width={500}
                                height={500}
                                className="min-w-[35lvw] h-[50lvh] lg:h-[35lvw] object-cover "
                                src={'https://images.unsplash.com/photo-1579783901467-31b604eac7a8?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                alt=""
                            />
                            <div className="absolute inset-5 flex flex-col justify-end">
                                <div className="bg-[#00000043] backdrop-blur-md p-5">
                                    <h1 className="lg:text-5xl text-3xl text-white font-medium">
                                        Febriyandi
                                    </h1>
                                    <p className="text-gray-100">
                                        Instructor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-justify flex flex-col gap-2 leading-relaxed tracking-wide">
                            <p>Saya Warga Negara Indonesia, lahir pada bulan Februari tahun 1990. Pendidikan menengah saya telah saya tempuh di SMK Perguruan Cikini, dengan jurusan Mekanik Otomotif, dan lulus pada tahun 2007. Pengalaman pertama saya dalam dunia kerja dimulai saat saya bergabung dengan PT. Yamaha Music Manufacturing Asia sebagai Operator Produksi pada tahun 2008. Pada bulan April tahun 2011, saya berkesempatan untuk menjadi Peserta Magang (Jisshuusei) dari IM Japan di Prefektur Mie, Jepang, selama 3 tahun. Setelah itu, pada tahun 2014, saya kembali ke Indonesia dan melanjutkan karier di PT. Aichi Forging Indonesia sebagai Staff Quality Control. Kemudian, pada tahun 2015, saya kembali ke Jepang dan menghabiskan 6 tahun sebagai pekerja mandiri di Prefektur Ishikawa.</p>
                            <p>Pada tahun 2021, saya berhasil lulus ujian bahasa Jepang JLPT N1. Langkah berikutnya, saya memutuskan untuk kembali ke Indonesia guna mengejar pendidikan lebih lanjut di bidang Bahasa dan Kebudayaan Jepang di salah satu universitas swasta di Jakarta, sambil mengajar bahasa Jepang di LPK. Tahun 2023 membawa saya ke P3MI di Jakarta, di mana saya mulai menjabat sebagai Regional Manager.<br />&nbsp;</p>
                            <div className="bg-[#3d341d] w-full h-full">
                            </div>

                        </div>
                    </div>
                    <p className="lg:mt-4 text-justify leading-relaxed tracking-wide bg-[#ece8de] p-5">
                        Fokus utama saya saat ini adalah membantu pemuda Indonesia yang berminat bekerja dan membangun karier di Jepang. Saya juga berkomitmen untuk mendukung upaya pemerintah dalam mengurangi angka pengangguran di Indonesia melalui penyediaan pelatihan Bahasa Jepang dan keterampilan yang diperlukan untuk sukses bekerja di Jepang. Dengan pengalaman dan pengetahuan yang luas tentang budaya dan bahasa Jepang, saya siap menjadi jembatan antara Indonesia dan Jepang, membuka peluang bagi generasi muda Indonesia untuk meraih impian mereka di Negeri Sakura. Mari bersama-sama membangun masa depan yang lebih cerah bagi Indonesia dan mempererat hubungan antara dua bangsa melalui kerja keras, dedikasi, dan pembelajaran yang berkelanjutan.
                    </p>
                </section>
            </AnimateScroll>
        </>
    )
}