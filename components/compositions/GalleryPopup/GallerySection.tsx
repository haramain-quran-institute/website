import type { GallerySectionProps } from "./types/gallery";
import {
  TallSplitLayout,
  ReverseTallSplitLayout,
  CascadeLayout,
  ReverseCascadeLayout,
  SpotlightLayout,
  UnoLayout,
  DuoLayout,
  TrioLayout,
  QuadLayout,
} from "./Layouts";

const GallerySection: React.FC<GallerySectionProps> = ({ section, imageCounter }) => {
  const renderLayout = () => {
    switch (section.layout) {
      case "tall-split":
        return (
          <TallSplitLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />
        );
      case "reverse-tall-split":
        return (
          <ReverseTallSplitLayout
            images={section.imgSrc}
            altText={section.altText}
            ratio={section.ratio}
            startIndex={imageCounter}
          />
        );
      case "cascade":
        return (
          <CascadeLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />
        );
      case "reverse-cascade":
        return (
          <CascadeLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />
        );
      case "spotlight":
        return (
          <SpotlightLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />
        );
      case "uno":
        return <UnoLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />;
      case "duo":
        return <DuoLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />;
      case "trio":
        return <TrioLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />;
      case "quad":
        return <QuadLayout images={section.imgSrc} altText={section.altText} ratio={section.ratio} startIndex={imageCounter} />;
      default:
        return <div className="text-body_sm text-EbonyShadow-80">Layout type "{section.layout}" not implemented yet</div>;
    }
  };
  return (
    <div className="group w-full opacity-0 animate-fade-in py-5">
      {section.title && (
        <h3 className="text-heading_xs text-EbonyShadow opacity-0 animate-fade-slide-down mb-3">{section.title}</h3>
      )}
      {renderLayout()}
    </div>
  );
};

export default GallerySection;
