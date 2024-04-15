import { AnimateScroll } from "@/Components/AnimateScroll";
import { BgGrid } from "@/Components/FAQPage/BgGrid";
import { FormJob } from "@/Components/JobPage/FormJob";

export default function Job() {

    return (
        <>
            <BgGrid>
                <AnimateScroll animation={'animate__fadeInUp'}>
                    <FormJob />
                </AnimateScroll>
            </BgGrid>
        </>
    );
}
