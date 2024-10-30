import { AnimateScroll } from "@/Components/AnimateScroll";
import { Banner } from "@/Components/Banner";
import { BannerMobile } from "@/Components/BannerMobile";
import { JadwalPelatihan } from "@/Components/JadwalPelatihn";
import { Keunggulan } from "@/Components/Keunggulan";
import { Program } from "@/Components/Program";
import { Review } from "@/Components/Review";
import { WhyUs } from "@/Components/WhyUs";

export const metadata = {
  title: 'LPK Hidamari Kenshu Senta - Pelatihan & Program Kerja di Jepang',
  description: 'LPK Hidamari Kenshu Senta menyediakan berbagai program pelatihan untuk membantu Anda meraih kesempatan kerja di Jepang, termasuk Program Caregiver, SSW, Magang, Engineering, dan Bekerja Sambil Kuliah.',
  keywords: 'LPK Hidamari Kenshu Senta, pelatihan kerja Jepang, Program Caregiver, Program SSW, magang di Jepang, Program Engineering, bekerja sambil kuliah, pelatihan ke Jepang, kerja di Jepang',
  hashtags: '#LPKHidamari #PelatihanKerjaJepang #Caregiver #SSW #Magang #Engineering #KerjadiJepang #PendidikanJepang #BekerjaSambilKuliah',
  canonical: 'https://yourwebsite.com',
  ogTitle: 'LPK Hidamari Kenshu Senta - Pelatihan & Program Kerja di Jepang',
  ogDescription: 'Dapatkan peluang bekerja di Jepang dengan berbagai program pelatihan yang disediakan oleh LPK Hidamari Kenshu Senta. Pilih program yang sesuai dengan minat Anda!',
  twitterTitle: 'LPK Hidamari Kenshu Senta - Pelatihan & Program Kerja di Jepang',
  twitterDescription: 'Gabung dengan program pelatihan LPK Hidamari Kenshu Senta dan dapatkan peluang kerja di Jepang. Program tersedia untuk berbagai bidang keahlian!',
};

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
