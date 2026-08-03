'use client'
import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/config/colors";

interface SubteamCardProps {
  subteamName: string;
  photoPaths: string[];
  blurb: string;
  leadName: string;
  leadPhotoPath: string;
  aspectRatio?: number; // width/height ratio (default: 16/9)
}

const SubteamCard: React.FC<SubteamCardProps> = ({
  subteamName,
  photoPaths,
  blurb,
  leadName,
  leadPhotoPath,
  aspectRatio = 1
}) => {
  // Use first photo as cover
  const coverPhoto = photoPaths[0];
  
  // State for mobile click-to-flip
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleCardClick = () => {
    // Only handle click on mobile/tablet (below lg breakpoint)
    if (window.innerWidth < 1024) {
      setIsFlipped(!isFlipped);
    }
  };

  // Function to determine text size based on content length
  const getAdaptiveTextSize = (text: string) => {
    const length = text.length;
    if (length <= 450) return 'text-xs md:text-lg';
    if (length <= 550) return 'text-xs md:text-md';
    if (length <= 600) return 'text-xs md:text-sm';
    return 'text-[10px] md:text-xs';
  };
  
  return (
    <div className="group h-full mx-auto lg:cursor-default cursor-pointer" onClick={handleCardClick}>
      {/* Stable hover container - does not get resized */}
      <div 
        className="relative w-full mx-auto overflow-hidden rounded-xl aspect-[4/5] lg:aspect-[16/9]"
        style={{ 
          aspectRatio: aspectRatio,
          boxShadow: `0px 4px 0px rgba(45, 195, 241, 1)`
        }}
      >
        {/* Front Side - Team Photo with Title */}
        <div 
          className={`absolute inset-0 w-full h-full transition-transform duration-200 ease-in-out shadow-lg
            lg:group-hover:translate-y-[-100%] 
            ${isFlipped ? 'translate-y-[-100%]' : 'translate-y-0'}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={`/photos/${coverPhoto}`}
              alt={`${subteamName} team`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0"></div>
            
            {/* Subteam Title with Shadow */}
            <div className="absolute top-10 left-0 right-0 p-6">
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center"
                style={{
                  textShadow: `3px 3px 0px ${colors.primary}, -1px -1px 8px ${colors.primary}`
                }}
              >
                {subteamName}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Side - Lead Info */}
        <div 
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out shadow-lg rounded-xl
            lg:translate-y-[100%] lg:group-hover:translate-y-0
            ${isFlipped ? 'translate-y-0' : 'translate-y-[100%]'}`}
          style={{ 
            backgroundColor: colors.background.card
          }}
        >
          <div className="flex h-full">
            {/* Left 1/3 - Lead Photo with overlay */}
            <div className="relative w-1/3 h-full">
              <Image
                src={`/leaders/${leadPhotoPath}`}
                alt={leadName}
                fill
                className="object-cover rounded-l-xl"
                sizes="33vw"
              />
              
              {/* Floating overlay block */}
              <div 
                className="absolute bottom-0 p-1 left-1 md:bottom-4 left-3 right-3 md:p-3 rounded-lg"
                style={{ backgroundColor: colors.primary }}
              >
                {/* Lead Name */}
                <h4 
                  className="text-xs sm:text-base font-bold text-center"
                  style={{ color: colors.slugYellow }}
                >
                  {leadName}
                </h4>

                {/* Subteam Title */}
                <h5 
                  className="text-xs font-semibold text-center"
                  style={{ color: colors.textColor }}
                >
                  {subteamName} Lead
                </h5>
              </div>
            </div>

            {/* Right 2/3 - Text Content */}
            <div className="w-2/3 h-full p-5 md:p-5 flex items-center font-semibold relative overflow-hidden">
              {/* Yellow decorative stripes */}
              <div className="absolute top-0 right-[-80]">
                <div 
                  className={`w-100 h-7 ml-5 mt-30 transform rotate-45 origin-top-right transition-transform duration-500 ease-out delay-350
                    lg:translate-x-[-200px] lg:translate-y-[-200px] lg:group-hover:translate-x-0 lg:group-hover:translate-y-0
                    ${isFlipped ? 'translate-x-0 translate-y-0' : 'translate-x-[-200px] translate-y-[-200px]'}`}
                  style={{ 
                    backgroundColor: colors.slugYellow,
                    transformOrigin: 'top right'
                  }}
                ></div>
                <div 
                  className={`w-100 h-4 transform rotate-45 origin-top-right transition-transform duration-700 ease-out delay-350
                    lg:translate-x-[300px] lg:translate-y-[300px] lg:group-hover:translate-x-0 lg:group-hover:translate-y-0
                    ${isFlipped ? 'translate-x-0 translate-y-0' : 'translate-x-[300px] translate-y-[300px]'}`}
                  style={{ 
                    backgroundColor: colors.electricBlue,
                    transformOrigin: 'top right'
                  }}
                ></div>
              </div>
              {/*Brenner's solution who was an idiot and didn't commit so someone smarter fixed it instead:  */}
              {/* <h1 className={`${getAdaptiveTextSize(blurb)} mt-10 leading-tight`}> */}
              <h1 className="relative z-10 text-[10px] sm:text-xs md:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm leading-tight break-words overflow-hidden">
                {blurb}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubteamCard;
