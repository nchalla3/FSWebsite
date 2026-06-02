import Image from "next/image";
import fs from "fs";
import path from "path";
import exifr from "exifr";
import AutoScrollOnIdle from "./AutoScrollOnIdle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShimmerTitle from "@/components/ShimmerTitle";
import { colors } from "@/config/colors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formula Slug - Photos",
  description: "Formula Slug's Website - Photo Gallery",
};

export default async function PhotosPage() {
  // Read the /public/photos directory at build time (server-side only)
  const photosDir = path.join(process.cwd(), "public", "photos");
  let files: string[] = [];
  try {
    files = fs.readdirSync(photosDir)
      .filter(f =>
        /^[^.].*\.(jpe?g|png|webp|gif)$/i.test(f)
      );
  } catch (e) {
    // Directory may not exist yet
  }

  // Read EXIF date for each file (async)
  const photoData = await Promise.all(
    files.map(async filename => {
      const filePath = path.join(photosDir, filename);
      let dateTaken: Date | null = null;
      try {
        const exif = await exifr.parse(filePath, ["DateTimeOriginal"]);
        if (exif && exif.DateTimeOriginal) {
          dateTaken = exif.DateTimeOriginal;
        }
      } catch {}
      if (!dateTaken) {
        // Fallback to file mtime
        const stat = fs.statSync(filePath);
        dateTaken = stat.mtime;
      }
      return {
        src: `/photos/${filename}`,
        alt: filename.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, ''),
        dateTaken,
      };
    })
  );

  // Senior Night filenames added 2026-06-02
  const seniorNightFiles = new Set(
    fs.readdirSync(path.join(process.cwd(), "public", "photos"))
      .filter(f => {
        const added = fs.statSync(path.join(process.cwd(), "public", "photos", f)).mtime;
        return added >= new Date("2026-06-02") && /^[^.].*\.(jpe?g|png|webp|gif)$/i.test(f);
      })
  );

  const oldPhotos = photoData
    .filter(p => !seniorNightFiles.has(path.basename(p.src)))
    .sort((a, b) => b.dateTaken.getTime() - a.dateTaken.getTime());

  const newPhotos = photoData
    .filter(p => seniorNightFiles.has(path.basename(p.src)));

  // Seeded shuffle so order is stable across builds
  function seededRandom(seed: number) {
    let s = seed;
    return () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
  }
  const rng = seededRandom(20260602);

  // Randomly insert each new photo at a position within the old sequence
  const result = [...oldPhotos];
  for (const photo of newPhotos) {
    const pos = Math.floor(rng() * (result.length + 1));
    result.splice(pos, 0, photo);
  }
  const photoDataSorted = result;

  return (
    <AutoScrollOnIdle>
      <main className="min-h-screen relative" style={{ backgroundColor: colors.background.primary }}>
        <Navbar textColor={colors.textColor} />
        
        {/* Header centered between navbar and content */}
        <div className="pt-[12vh] pb-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-center px-4">
            <ShimmerTitle>Photo Gallery</ShimmerTitle>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {photoDataSorted.map((photo, idx) => (
            <div 
              key={idx} 
              className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: colors.background.secondary }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority={idx < 3}
              />
            </div>
          ))}
          {photoDataSorted.length === 0 && (
            <div 
              className="col-span-full text-center"
              style={{ color: colors.gray[400] }}
            >
              No photos found in <code>/public/photos</code>.
            </div>
          )}
        </div>
        <Footer />
      </main>
    </AutoScrollOnIdle>
  );
}
