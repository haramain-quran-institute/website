import type { GalleryMedia } from "../types";
import MediaRenderer from "../components/MediaRenderer";

export default function QuadHarmony({
  media,
  onOpen,
}: {
  media: GalleryMedia[];
  onOpen: (index: number) => void;
}) {
  if (media.length < 4) return null;

  return (
    <div className="grid size-full grid-cols-12 grid-rows-12 gap-4 md:gap-6">
      <div className="relative col-span-6 row-span-5 overflow-hidden rounded-lg">
        <MediaRenderer item={media[0]} index={0} onOpen={onOpen} />
      </div>

      <div className="relative col-span-6 row-span-7 overflow-hidden rounded-lg">
        <MediaRenderer item={media[1]} index={1} onOpen={onOpen} />
      </div>

      <div className="relative col-span-6 row-span-7 overflow-hidden rounded-lg">
        <MediaRenderer item={media[2]} index={2} onOpen={onOpen} />
      </div>

      <div className="relative col-span-6 row-span-5 overflow-hidden rounded-lg">
        <MediaRenderer item={media[3]} index={3} onOpen={onOpen} />
      </div>
    </div>
  );
}
