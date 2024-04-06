import { AnimateScroll } from "@/Components/AnimateScroll";
import { Banner } from "@/Components/Banner";
import { BannerMobile } from "@/Components/BannerMobile";
import { JadwalPelatihan } from "@/Components/JadwalPelatihn";
import { Keunggulan } from "@/Components/Keunggulan";
import { Program } from "@/Components/Program";
import { Review } from "@/Components/Review";
import { WhyUs } from "@/Components/WhyUs";

export default function Home() {
  return (
    <>
      <Banner />
      <BannerMobile />
      <AnimateScroll animation={'animate__fadeInUp'}>
        <JadwalPelatihan />
      </AnimateScroll>
      <AnimateScroll animation={'animate__fadeInUp'}>
        <Program />
      </AnimateScroll>
      <AnimateScroll animation={'animate__fadeInUp'}>
        <WhyUs />
      </AnimateScroll>
      <AnimateScroll animation={'animate__fadeInUp'}>
        <Keunggulan />
      </AnimateScroll>
      <AnimateScroll animation={'animate__fadeInUp'}>
        <Review />
      </AnimateScroll>
    </>
  );
}
