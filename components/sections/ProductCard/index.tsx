import TextContainer from "./Text";
import GalleryContainer from "./ImageGallery";
import { StaticImageData } from "next/image";

interface DescriptionItem {
  heading?: string;
  text?: string;
  list?: { type: "ul" | "ol"; items: string[] };
}

interface ImageTextComponentProps {
  title: string;
  description: DescriptionItem[];
  buttonText: string;
  images: {
    imgSrc: StaticImageData;
    altText: string;
  }[];
  ratio: number;
  imagePosition: "before" | "after";
  section_id?: string;
}

function ImageTextComponent({
  title,
  description,
  buttonText,
  images,
  ratio,
  imagePosition = "before",
  section_id = "",
}: ImageTextComponentProps) {
  return (
    <section className="my-24 md:my-28 lmd:my-36 lg:my-40" id={section_id}>
      <div className="container grid grid-cols-1 gap-4 smd:grid-cols-2 smd:gap-8 md:gap-10 lmd:gap-14 lg:gap-20">
        {imagePosition === "before" && <GalleryContainer images={images} ratio={ratio} />}
        <TextContainer title={title} description={description} buttonText={buttonText} />
        {imagePosition === "after" && <GalleryContainer images={images} ratio={ratio} />}
      </div>
    </section>
  );
}

export default ImageTextComponent;
