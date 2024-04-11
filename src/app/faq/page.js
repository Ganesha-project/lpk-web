import { readFile } from 'fs/promises'
import { ContentFaq } from "@/Components/FAQPage/ContentFaq";
import { Izin } from '@/Components/FAQPage/Izin';
import { BgGrid } from '@/Components/FAQPage/BgGrid';
import { QuestionForm } from '@/Components/FAQPage/QuestionForm';

export default async function Faq() {
  let rawData = await readFile('public/faq.json', 'utf-8')
  let data = JSON.parse(rawData)

  let rawDataIzin = await readFile('public/izin.json', 'utf-8')
  let dataIzin = JSON.parse(rawDataIzin)

  return (
    <>
      <BgGrid>
        <ContentFaq data={data} />
        <Izin data={dataIzin} />
        <QuestionForm />
      </BgGrid>
    </>
  );
}
