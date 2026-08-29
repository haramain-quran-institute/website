import type { GalleryMedia } from "../types";
import MediaRenderer from "../components/MediaRenderer";

export default function EditorialGrid({
  media,
  onOpen,
}: {
  media: GalleryMedia[];
  onOpen: (index: number) => void;
}) {
  if (media.length < 4) return null;

  return (
    <div className="grid size-full grid-cols-12 gap-4">
      <div className="col-span-3 flex flex-col gap-4">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <MediaRenderer item={media[0]} index={0} onOpen={onOpen} />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <MediaRenderer item={media[1]} index={1} onOpen={onOpen} />
        </div>
      </div>

      <div className="relative col-span-6 overflow-hidden rounded-lg">
        <MediaRenderer item={media[2]} index={2} onOpen={onOpen} />
      </div>

      <div className="relative col-span-3 overflow-hidden rounded-lg">
        <MediaRenderer item={media[3]} index={3} onOpen={onOpen} />
      </div>
    </div>
  );
}
