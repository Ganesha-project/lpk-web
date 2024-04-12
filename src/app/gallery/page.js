'use client'
import { Image } from "@/Components/GalleryPage/Image";
import { BannerR } from "@/Components/Reusable/BannerR";


export default function Gallery() {
  let imageBackground = "https://images.unsplash.com/photo-1617870314635-fc819547ec11?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let title = "Gallery Kami"
  let descriptions = "Dokumentasi dari berbagai program dan fasilitas kami"
  return (
    <>
      <BannerR imageBackground={imageBackground} title={title} descriptions={descriptions} button={'hidden'} />
      <Image />
    </>
  );
}
