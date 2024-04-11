import { AboutUs } from "@/Components/AboutUsPage/AboutUs";
import { AboutUsMobile } from "@/Components/AboutUsPage/AboutUsMobile";
import { VisionMision } from "@/Components/AboutUsPage/VisionMision";
import { BannerR } from "@/Components/Reusable/BannerR";

export default function AboutUsPage() {
  let imageBackground = "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1712391995/LPK%20Asset/xzqydjh3v9dx5iwr99vk.webp"
  let title = "Kenali Kami"
  let descriptions = "LPK Hidamari Kenshu Senta, kami adalah lembaga terpercaya yang telah membantu ribuan individu meraih kesuksesan di pasar kerja Jepang."
  return (
    <>
      <BannerR imageBackground={imageBackground} title={title} descriptions={descriptions} />
      <AboutUs />
      <AboutUsMobile />
      <VisionMision />
    </>
  );
}
