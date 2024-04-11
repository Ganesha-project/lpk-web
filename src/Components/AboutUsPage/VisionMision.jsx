export const VisionMision = () => {
    return (
        <>
            <section className="lg:mx-24 m-5">
                <div className="flex flex-row justify-between gap-10">
                    <div className="w-[30%]">
                        <h1 className="text-7xl font-medium leading-relaxed tracking-wide">
                            Vision
                        </h1>
                        <p className="w-[]">
                            Menjadi pusat unggulan dalam pembekalan keterampilan dan pengetahuan bagi individu yang ingin sukses dalam berkarir di Jepang, serta menjadi mitra yang terpercaya bagi Perusahaan-perusahaan di Jepang dalam mencari talenta yang berkualitas unggul.
                        </p>
                    </div>
                    <img
                        className="w-[30%] h-[80lvh] object-cover rounded-t-full rounded-b-xl"
                        src="https://images.unsplash.com/photo-1582116326882-c9ad2e93e1d9?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                    <div className="self-end w-[30%]">
                        <h1 className="text-7xl font-medium leading-relaxed tracking-wide">
                            Mision
                        </h1>
                        <p>
                            Menyediakan program pelatihan berkualitas tinggi, memberikan dukungan personal, dan membangun kemitraan strategis untuk memastikan kesuksesan karir peserta di Jepang
                        </p>
                        <div className="collapse collapse-plus -mt-4 group">
                            <input type="checkbox" name="my-accordion-3" className="w-full" />
                            <div className="-mx-4 collapse-title text-xl font-medium group-hover:text-red-400 duration-300">
                                More
                            </div>
                            <div className="collapse-content">
                                <div className="overflow-auto h-[45lvh]">
                                    <div class="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <p>
                                                1
                                            </p>
                                            <p>Memberikan program pelatihan yang berkualitas tinggi dan relevan dengan tuntutan industri di Jepang untuk meningkatkan kesiapan kerja para peserta.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>
                                                2
                                            </p>
                                            <p>Mendukung para peserta pelatihan dalam mengembangkan keterampilan teknis dan kompetensi yang diperlukan dalam lingkungan kerja Jepang yang beragam.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>
                                                3
                                            </p>
                                            <p>Menyediakan bimbingan dan dukungan personal kepada setiap peserta untuk membantu mereka meraih kesuksesan dalam karir mereka.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>
                                                4
                                            </p>
                                            <p>Menjalin kemitraan strategis dengan perusahaan-perusahaan di Jepang untuk mem-fasilitasi penempatan kerja bagi para lulusan pelatihan kami.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>
                                                5
                                            </p>
                                            <p>Terus melakukan evaluasi dan perbaikan terhadap program pelatihan kami demi memastikan kesesuaian dengan perkembangan industri dan kebutuhan peserta.</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>
                                                6
                                            </p>
                                            <p>Menciptakan lingkungan belajar yang inklusif, inspiratif, dan mendukung pertumbuhan pribadi serta profesional peserta pelatihan.</p>
                                        </div>                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}