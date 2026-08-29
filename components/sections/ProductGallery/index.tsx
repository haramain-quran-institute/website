import GalleryContainer from "./Gallery";
import { StaticImageData } from "next/image";

interface ImageTextComponentProps {
  images: {
    imgSrc: StaticImageData;
    altText: string;
  }[];
  ratio?: number;
  section_id?: string;
}

function ImageTextComponent({ images, ratio, section_id = "" }: ImageTextComponentProps) {
  return (
    <section className="my-24 md:my-28 lmd:my-36 lg:my-40" id={section_id}>
      <div className="container">
        <GalleryContainer images={images} ratio={ratio} />
      </div>
    </section>
  );
}

export default ImageTextComponent;
