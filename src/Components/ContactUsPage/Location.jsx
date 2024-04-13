export const Location = () => {
    return (
        <>
            <section className="lg:mx-24 mt-10 lg:mt-0 mx-5">
                <p className="border-l-4 pl-3 border-red-600 text-3xl mb-5">
                    Our Address
                </p>
                <div className="aspect-w-16 aspect-h-9 overflow-hidden w-full border border-red-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.881298171178!2d107.04531177499094!3d-6.279332793709512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69916d003080ab%3A0x644ba6aa5640b1a7!2sKantor%20Pemasaran%20Grand%20Wisata%20Bekasi!5e0!3m2!1sid!2sid!4v1712866432074!5m2!1sid!2sid"
                        width={1300}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </>
    )
}