import { readFile } from 'fs/promises'
import { ContentFaq } from "@/Components/FAQPage/ContentFaq";
import { Izin } from '@/Components/FAQPage/Izin';
import { BgGrid } from '@/Components/FAQPage/BgGrid';
import { QuestionForm } from '@/Components/FAQPage/QuestionForm';
import { AnimateScroll } from '@/Components/AnimateScroll';

export const metadata = {
  title: 'FAQ - LPK Hidamari Kenshu Senta',
  description: 'Temukan jawaban atas pertanyaan yang sering diajukan tentang program pelatihan LPK Hidamari Kenshu Senta, izin kerja, proses pendaftaran, dan persyaratan untuk bekerja di Jepang.',
  keywords: 'FAQ LPK Hidamari Kenshu Senta, pertanyaan umum, pelatihan kerja Jepang, izin kerja Jepang, pendaftaran kerja Jepang, persyaratan kerja Jepang, program kerja',
  hashtags: '#FAQ #LPKHidamari #PelatihanKerjaJepang #IzinKerja #PendaftaranKerja #KerjadiJepang #ProgramKerja',
  canonical: 'https://yourwebsite.com/faq',
  ogTitle: 'FAQ - LPK Hidamari Kenshu Senta',
  ogDescription: 'Dapatkan jawaban lengkap atas pertanyaan mengenai program pelatihan kerja di Jepang dari LPK Hidamari Kenshu Senta. Mulai dari izin hingga persyaratan kerja.',
  twitterTitle: 'FAQ - LPK Hidamari Kenshu Senta',
  twitterDescription: 'Lihat pertanyaan yang sering diajukan seputar program pelatihan dan izin kerja di Jepang oleh LPK Hidamari Kenshu Senta.',
};

export default async function Faq() {
  let rawData = await readFile('public/faq.json', 'utf-8')
  let data = JSON.parse(rawData)

  let rawDataIzin = await readFile('public/izin.json', 'utf-8')
  let dataIzin = JSON.parse(rawDataIzin)

  return (
    <>
      <BgGrid>
        <AnimateScroll animation={'animate__fadeInUp'}>
          <ContentFaq data={data} />
        </AnimateScroll>
        <AnimateScroll animation={'animate__fadeInUp'}>
          <Izin data={dataIzin} />
        </AnimateScroll>
        <AnimateScroll animation={'animate__fadeInUp'}>
          <QuestionForm />
        </AnimateScroll>
      </BgGrid>
    </>
  );
}
