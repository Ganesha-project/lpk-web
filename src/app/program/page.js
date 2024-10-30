import { AnimateScroll } from "@/Components/AnimateScroll";
import { JadwalPelatihan } from "@/Components/JadwalPelatihn";
import { ProgramList } from "@/Components/ProgramPage/ProgramList";
import { BannerR } from "@/Components/Reusable/BannerR";
import { WhyUs } from "@/Components/WhyUs";
import { readFile } from 'fs/promises'

export const metadata = {
    title: 'Program Pelatihan - LPK Hidamari Kenshu Senta',
    description: 'Jelajahi berbagai program pelatihan yang ditawarkan oleh LPK Hidamari Kenshu Senta untuk membantu Anda mencapai kesuksesan karir di Jepang, termasuk Program Caregiver, SSW, Magang, Engineering, dan Bekerja Sambil Kuliah.',
    keywords: 'program pelatihan, LPK Hidamari Kenshu Senta, kerja di Jepang, Program Caregiver, Program SSW, magang di Jepang, Program Engineering, bekerja sambil kuliah',
    hashtags: '#LPKHidamari #ProgramPelatihan #KerjaDiJepang #Caregiver #SSW #Magang #Engineering #BekerjaSambilKuliah',
    canonical: 'https://yourwebsite.com/program',
    ogTitle: 'Program Pelatihan - LPK Hidamari Kenshu Senta',
    ogDescription: 'Dapatkan informasi lengkap tentang program pelatihan yang kami tawarkan di LPK Hidamari Kenshu Senta untuk meraih karir impian Anda di Jepang.',
    twitterTitle: 'Program Pelatihan - LPK Hidamari Kenshu Senta',
    twitterDescription: 'Temukan program pelatihan yang sesuai dengan minat dan tujuan karir Anda di Jepang di LPK Hidamari Kenshu Senta.',
};

export default async function Program() {
    let rawData = await readFile('public/program.json', 'utf-8')
    let data = JSON.parse(rawData)
    let imageBackground = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let title = "Program Kami"
    let descriptions = "Selamat datang di Halaman Program dari LPK Hidamari Kenshu Senta, tempat Anda dapat mengeksplorasi berbagai program pelatihan yang kami tawarkan untuk membantu Kamu dalam mencapai kesuksesan karir-mu di Jepang!"
    return (
        <>
            <BannerR imageBackground={imageBackground} title={title} descriptions={descriptions} />
            <ProgramList data={data} />
            <AnimateScroll animation={'animate__fadeInUp'}>
                <JadwalPelatihan/>
            </AnimateScroll>
            <AnimateScroll animation={'animate__fadeInUp'}>
                <WhyUs />
            </AnimateScroll>
        </>
    );
}
