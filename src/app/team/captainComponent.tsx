import React from "react";
import Image from "next/image";
import { colors } from "@/config/colors";

interface CaptainCardProps {
  captainName: string;
  team: string;
  photoPath: string;
  aspectRatio?: number; // width/height ratio (default: 3/4 for portrait)
}

const CaptainCard: React.FC<CaptainCardProps> = ({
  captainName,
  team,
  photoPath,
  aspectRatio = 3/4
}) => {
  
  return (
    <div className="group w-full h-full mx-auto cursor-default">
      {/* Stable hover container */}
      <div 
        className="relative w-full mx-auto overflow-hidden rounded-xl transition-shadow duration-300 ease-in-out group-hover:shadow-lg"
        style={{ 
          aspectRatio: aspectRatio,
          boxShadow: `0px 4px 0px rgba(45, 195, 241, 1)`
        }}
      >
        {/* Captain Photo */}
        <div className="relative w-full h-full">
          <Image
            src={`/leaders/${photoPath}`}
            alt={captainName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
          
          {/* Always visible overlay block */}
          <div 
            className="absolute bottom-2 left-4 right-4 p-1 rounded-lg"
            style={{ backgroundColor: colors.primary }}
          >
            {/* Captain Name */}
            <h4 
              className="text-sm md:text-base font-bold text-center"
              style={{ color: colors.slugYellow }}
            >
              {captainName}
            </h4>

            {/* Team */}
            <h5 
              className="text-xs md:text-sm font-semibold text-center"
              style={{ color: colors.textColor }}
            >
              {team}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainCard;
