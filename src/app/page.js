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
      <JadwalPelatihan />
      <Program />
      <WhyUs />
      <Keunggulan />
      <Review />
    </>
  );
}
