import { RegisterForm } from "../ProgramPage/RegisterForm"

export const BodyRegistrasi = () => {
    return (
        <>
            <section className="lg:px-24 px-5 pt-24">
                <p className="text-xl !capitalize">
                    PENDAFTARAN PROGRAM PELATIHAN KERJA KE JEPANG LPK HIDAMARI KENSHU SENTA
                </p>
                <RegisterForm />
            </section>
        </>
    )
}