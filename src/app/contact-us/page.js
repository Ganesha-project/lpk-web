import { AnimateScroll } from "@/Components/AnimateScroll";
import { FormContact } from "@/Components/ContactUsPage/FormContact";
import { Location } from "@/Components/ContactUsPage/Location";

export const metadata = {
    title: 'Kontak Kami - LPK Hidamari Kenshu Senta',
    description: 'Hubungi LPK Hidamari Kenshu Senta untuk informasi lebih lanjut tentang program pelatihan, pendaftaran, atau pertanyaan lainnya. Kami siap membantu Anda mencapai karir impian di Jepang.',
    keywords: 'kontak LPK Hidamari Kenshu Senta, hubungi kami, program pelatihan, informasi pendaftaran, pertanyaan umum, lokasi LPK Hidamari',
    hashtags: '#KontakKami #LPKHidamari #ProgramPelatihan #HubungiKami',
    canonical: 'https://yourwebsite.com/contact',
    ogTitle: 'Kontak Kami - LPK Hidamari Kenshu Senta',
    ogDescription: 'Temukan cara untuk menghubungi LPK Hidamari Kenshu Senta. Kami siap menjawab pertanyaan Anda tentang program pelatihan dan proses pendaftaran.',
    twitterTitle: 'Kontak Kami - LPK Hidamari Kenshu Senta',
    twitterDescription: 'Hubungi kami untuk pertanyaan mengenai program pelatihan di LPK Hidamari Kenshu Senta dan cara pendaftaran.',
};

export default function ContactUs() {
    return (
        <>
            <AnimateScroll animation={'animate__fadeInUp'}>
                <FormContact />
            </AnimateScroll>
            <AnimateScroll animation={'animate__fadeInUp'}>
                <Location />
            </AnimateScroll>
        </>
    );
}
