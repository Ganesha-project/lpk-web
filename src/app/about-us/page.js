import { AboutUs } from "@/Components/AboutUsPage/AboutUs";
import { AboutUsMobile } from "@/Components/AboutUsPage/AboutUsMobile";
import { OurProgram } from "@/Components/AboutUsPage/OurProgram";
import { Profiles } from "@/Components/AboutUsPage/Profiles";
import { VisionMision } from "@/Components/AboutUsPage/VisionMision";
import { AnimateScroll } from "@/Components/AnimateScroll";
import { BannerR } from "@/Components/Reusable/BannerR";
import { readFile } from 'fs/promises'

export default async function AboutUsPage() {
  let imageBackground = "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1712391995/LPK%20Asset/xzqydjh3v9dx5iwr99vk.webp"
  let title = "Kenali Kami"
  let descriptions = "LPK Hidamari Kenshu Senta, kami adalah lembaga terpercaya yang dapat membantu anda untuk meraih kesuksesan di pasar kerja Jepang."

  let rawData = await readFile('public/program.json', 'utf-8')
  let data = JSON.parse(rawData)
  return (
    <>
      <BannerR imageBackground={imageBackground} title={title} descriptions={descriptions} />
      <AnimateScroll animation={'animate__fadeInUp'}>
        <AboutUs />
      </AnimateScroll>
      <AnimateScroll animation={'animate__fadeInUp'}>
        <AboutUsMobile />
      </AnimateScroll>
        <Profiles />
      <AnimateScroll animation={'animate__fadeInUp'}>
        <VisionMision />
      </AnimateScroll>
      <AnimateScroll animation={'animate__fadeInUp'}>
        <OurProgram data={data} />
      </AnimateScroll>
    </>
  );
}
