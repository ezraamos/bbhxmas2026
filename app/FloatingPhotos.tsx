import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";

const DIR = path.join(process.cwd(), "public", "photos");
const IMAGE = /\.(jpe?g|png|webp|gif|avif)$/i;
const SECONDS_PER_PHOTO = 5; // carousel speed: higher = slower

async function listPhotos() {
  try {
    return (await fs.readdir(DIR)).filter((f) => IMAGE.test(f)).sort();
  } catch {
    return [];
  }
}

// One looping track. The list is rendered twice so the loop is seamless.
function Track({ files, className }: { files: string[]; className: string }) {
  const style = { "--dur": `${files.length * SECONDS_PER_PHOTO}s` } as React.CSSProperties;
  return (
    <div className={`track ${className}`} style={style}>
      {[...files, ...files].map((f, i) => (
        <div key={i} className="polaroid">
          <Image src={`/photos/${f}`} alt="" width={400} height={400} />
        </div>
      ))}
    </div>
  );
}

/** Desktop: two vertical carousels in the side gutters. */
export async function PhotoColumns() {
  const files = await listPhotos();
  if (files.length === 0) return null;
  const left = files.filter((_, i) => i % 2 === 0);
  const right = files.filter((_, i) => i % 2 === 1);
  return (
    <div className="photo-cols" aria-hidden="true">
      <div className="col col-left">
        <Track files={left} className="up" />
      </div>
      {right.length > 0 && (
        <div className="col col-right">
          <Track files={right} className="down" />
        </div>
      )}
    </div>
  );
}

/** Mobile: one horizontal carousel under the title. */
export async function PhotoStrip() {
  const files = await listPhotos();
  if (files.length === 0) return null;
  return (
    <div className="photo-strip" aria-hidden="true">
      <Track files={files} className="sideways" />
    </div>
  );
}
