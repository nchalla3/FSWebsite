// Thanks for the help Gemini
"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";

function ChevronLeft(props: {width: number, height: number, className?: string}) {
  // prettier-ignore
  return (<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m15 18-6-6 6-6" /> </svg>);
}

function ChevronRight(props: {width: number, height: number, className?: string}) {
  // prettier-ignore
  return (<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m9 18 6-6-6-6" /> </svg>);
}

function StackedCarousel(props: { images: ReactNode[], aspectRatio?: number }) {
  const images = props.images;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  // We only render the current card and the next 2 cards behind it
  const visibleDepth = 3;

  return (
    // TODO(Jack N): Do we really want to hardcode an aspect ratio for all
    // cards? This means a lot of images are cropped vertically... but it does
    // seem to eliminate the page scrolling on click for different card sizes.
    <div className="w-full flex flex-col items-center justify-center p-4 pr-10 pb-6">
      {/* Container for the stack - height and width must be explicit to handle absolute positioning */}
      <div className={`relative w-full h-full rounded-lg`}>
        {images.map((imgComponent, idx) => {
          // Calculate the relative position in the current visible stack (0 is top, 1 is middle, 2 is bottom)
          let relativeIndex = (idx - currentIndex) % images.length;

          if (idx < currentIndex || idx >= currentIndex + visibleDepth)
            relativeIndex += images.length;

          // Offset calculation
          const offsetScaleByIndex = [0, 0.65, 0.95 /*, 1*/];
          const xOffsetPx = offsetScaleByIndex[relativeIndex] * 24;
          const yOffsetPx = relativeIndex * 6;

          // Reverse z-index so the current index is always on top
          const zIndex = visibleDepth - relativeIndex;

          // So the top card can be relative
          const isTopCard = relativeIndex === 0;

          return (
            <div
              key={idx}
              className={`
                absolute inset-0 bg-[--background]
                rounded-2xl shadow-xl overflow-hidden
                transition-all duration-300 ease-out
                ${isTopCard ? "relative w-full h-full" : "absolute inset-0"}
              `}
              style={{
                aspectRatio: props.aspectRatio,
                transform: `translate(${xOffsetPx}px, ${yOffsetPx}px)`,
                zIndex: zIndex,
                opacity: relativeIndex === 0 ? 1 : 1.0 - relativeIndex * 0.2,
                scale:
                  relativeIndex === 0 ? "1" : `${1 - relativeIndex * 0.01}`,
                pointerEvents: isTopCard ? "auto" : "none",
              }}
            >
              {imgComponent}
            </div>
          );
        })}

        {/* Navigation Controls */}
        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-between items-center pointer-events-none p-2">
          {/* Left button: Only shows if we are past the first image */}
          {images.length > 1 ? (
            <button
              onClick={prevSlide}
              className={`
                flex items-center justify-center w-12 h-12
                rounded-full bg-slate-700 drop-shadow-black drop-shadow-xs
                hover:bg-yellow-400 hover:text-black
                scale-100 active:scale-90 transition-all
                opacity-85 pointer-events-auto
                -ml-5
              `}
              aria-label="Previous slide"
            >
              <ChevronLeft
                width={36}
                height={36}
                className="pr-[2px]"
              />
            </button>
          ) : null}

          {/* Right button: Only shows if there are more images left */}
          {images.length > 1 ? (
            <button
              onClick={nextSlide}
              className={`
                flex items-center justify-center w-12 h-12
                rounded-full bg-slate-700 drop-shadow-black drop-shadow-xs
                hover:bg-yellow-400 hover:text-black
                scale-100 active:scale-90 transition-all
                opacity-85 pointer-events-auto
                -mr-7
              `}
              aria-label="Next slide"
            >
              <ChevronRight
                width={36}
                height={36}
                className="pl-[2px]"
              />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default StackedCarousel;
