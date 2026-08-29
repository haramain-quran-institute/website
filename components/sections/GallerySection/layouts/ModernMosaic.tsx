import type { GalleryMedia } from "../types";
import MediaRenderer from "../components/MediaRenderer";

export default function ModernMosaic({
  media,
  onOpen,
}: {
  media: GalleryMedia[];
  onOpen: (index: number) => void;
}) {
  if (media.length < 5) return null;

  return (
    <div className="grid h-full w-full grid-cols-6 grid-rows-2 gap-4 md:gap-5">
      {/* Top Left */}
      <div className="relative col-span-2 row-span-1 min-h-0 overflow-hidden rounded-lg">
        <MediaRenderer item={media[0]} index={0} onOpen={onOpen} />
      </div>

      {/* Top Center */}
      <div className="relative col-span-2 row-span-1 min-h-0 overflow-hidden rounded-lg">
        <MediaRenderer item={media[1]} index={1} onOpen={onOpen} />
      </div>

      {/* Top Right */}
      <div className="relative col-span-2 row-span-1 min-h-0 overflow-hidden rounded-lg">
        <MediaRenderer item={media[2]} index={2} onOpen={onOpen} />
      </div>

      {/* Bottom Left */}
      <div className="relative col-span-3 row-span-1 min-h-0 overflow-hidden rounded-lg">
        <MediaRenderer item={media[3]} index={3} onOpen={onOpen} />
      </div>

      {/* Bottom Right */}
      <div className="relative col-span-3 row-span-1 min-h-0 overflow-hidden rounded-lg">
        <MediaRenderer item={media[4]} index={4} onOpen={onOpen} />
      </div>
    </div>
  );
}