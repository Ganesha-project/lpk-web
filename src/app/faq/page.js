import { readFile } from 'fs/promises'
import { ContentFaq } from "@/Components/FAQPage/ContentFaq";
import { Izin } from '@/Components/FAQPage/Izin';
import { BgGrid } from '@/Components/FAQPage/BgGrid';
import { QuestionForm } from '@/Components/FAQPage/QuestionForm';
import { AnimateScroll } from '@/Components/AnimateScroll';

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
