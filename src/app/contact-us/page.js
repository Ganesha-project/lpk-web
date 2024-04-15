import { AnimateScroll } from "@/Components/AnimateScroll";
import { FormContact } from "@/Components/ContactUsPage/FormContact";
import { Location } from "@/Components/ContactUsPage/Location";

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
