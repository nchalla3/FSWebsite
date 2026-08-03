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

function shuffleArray(array: any[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


export default async function PhotosPage() {
  // Read the /public/photos directory at build time (server-side only)
  const photosDir = path.join(process.cwd(), "public", "photos");
  let files: string[] = [];
  try {
    files = fs.readdirSync(photosDir)
      .filter(f =>
        /^[^.].*\.(jpe?g|png|webp|gif)$/i.test(f)
      );
  } catch (_) {
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

  // // Sort by dateTaken, newest first
  // photoData.sort((a, b) => b.dateTaken.getTime() - a.dateTaken.getTime());
  shuffleArray(photoData);

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
          {photoData.map((photo, idx) => (
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
          {photoData.length === 0 && (
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
