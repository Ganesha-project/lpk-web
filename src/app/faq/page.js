import { readFile } from 'fs/promises'
import { ContentFaq } from "@/Components/FAQPage/ContentFaq";

export default async function Faq() {
  let rawData = await readFile('public/faq.json', 'utf-8')
  let data = JSON.parse(rawData)
  return (
    <>
      <ContentFaq data={data} />
    </>
  );
}
