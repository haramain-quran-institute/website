import type { GalleryMedia } from "../types";
import MediaRenderer from "../components/MediaRenderer";

export default function LuxuryShowcase({
  media,
  onOpen,
}: {
  media: GalleryMedia[];
  onOpen: (index: number) => void;
}) {
  if (media.length < 4) return null;

  return (
    <div className="grid size-full grid-cols-9 gap-4 md:gap-6">
      <div className="relative col-span-4 row-span-2 overflow-hidden rounded-lg md:col-span-3">
        <MediaRenderer item={media[0]} index={0} onOpen={onOpen} />
      </div>

      <div className="relative col-span-5 overflow-hidden rounded-lg md:col-span-6">
        <MediaRenderer item={media[1]} index={1} onOpen={onOpen} />
      </div>

      <div className="relative col-span-5 overflow-hidden rounded-lg md:col-span-3">
        <MediaRenderer item={media[2]} index={2} onOpen={onOpen} />
      </div>

      <div className="relative col-span-4 overflow-hidden rounded-lg md:col-span-3">
        <MediaRenderer item={media[3]} index={3} onOpen={onOpen} />
      </div>
    </div>
  );
}
