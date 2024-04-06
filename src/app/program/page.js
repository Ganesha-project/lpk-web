import { ProgramList } from "@/Components/ProgramPage/ProgramList";
import { BannerR } from "@/Components/Reusable/BannerR";
import { WhyUs } from "@/Components/WhyUs";
import { readFile } from 'fs/promises'

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
            <WhyUs />
        </>
    );
}
