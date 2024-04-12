"use client";
import { ImageGallery } from "react-image-grid-gallery";


export const Image = () => {
    const data = [
        {
            alt: 'LPK_HIDAMARI_KENSHU_SENTA_ASSET',
            width: 320,
            height: 212,
            caption: "Japanese Image Theme",
            src: 'https://images.unsplash.com/photo-1563288629-92c1b1ab05fe?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'LPK_HIDAMARI_KENSHU_SENTA_ASSET',
            width: 320,
            height: 212,
            caption: "Japanese Image Theme",
            src: 'https://images.unsplash.com/photo-1592499494890-da4507c0c7d8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'LPK_HIDAMARI_KENSHU_SENTA_ASSET',
            width: 320,
            height: 212,
            caption: "Japanese Image Theme",
            src: 'https://plus.unsplash.com/premium_photo-1691258211455-04a64e4edcfe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'LPK_HIDAMARI_KENSHU_SENTA_ASSET',
            width: 320,
            height: 212,
            caption: "Japanese Image Theme",
            src: 'https://images.unsplash.com/photo-1551106369-98124034b1de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'LPK_HIDAMARI_KENSHU_SENTA_ASSET',
            width: 320,
            height: 212,
            caption: "Japanese Image Theme",
            src: 'https://images.unsplash.com/photo-1619906942421-a85546b6937d?q=80&w=2923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'LPK_HIDAMARI_KENSHU_SENTA_ASSET',
            width: 320,
            height: 212,
            caption: "Japanese Image Theme",
            src: 'https://images.unsplash.com/photo-1628850627071-42b3fb16533d?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            alt: 'LPK_HIDAMARI_KENSHU_SENTA_ASSET',
            width: 320,
            height: 212,
            caption: "Japanese Image Theme",
            src: 'https://images.unsplash.com/photo-1578718974519-294139a2d50b?q=80&w=2461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]

    return (
        <>
            <section className="lg:mx-24 mx-5 mt-20">
                <ImageGallery
                    imagesInfoArray={data}
                    columnWidth={450}
                    gapSize={24}
                />
            </section>
        </>
    )
}