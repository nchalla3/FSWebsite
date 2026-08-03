"use client";

import React, { useEffect, useRef } from "react";
import { colors } from "@/config/colors";

interface ShimmerTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayMs?: number;
}

const ShimmerTitle: React.FC<ShimmerTitleProps> = ({ 
  children, 
  delayMs = 100,
}) => {
  const shimmerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current && shimmerRef.current) {
      hasAnimated.current = true;
      // Small delay to ensure the element is mounted
      setTimeout(() => {
        if (shimmerRef.current) {
          shimmerRef.current.style.animation =
            `diagonalShimmer 7s cubic-bezier(.05,.59,.44,.94) 0s infinite running`;
        }
      }, delayMs);
    }
  }, []);

  return (
    <>
      <span ref={shimmerRef} className="shimmer-text">{children}</span>
      
      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(
            45deg,
            white 0%,
            white 20%,
            ${colors.slugYellow} 20%,
            ${colors.slugYellow} 40%,
            ${colors.electricBlue} 40%,
            ${colors.electricBlue} 50%,
            ${colors.slugYellow} 50%,
            ${colors.slugYellow} 60%, 
            white 60%,
            white 100%
          );
          background-size: 400% 400%;
          background-position: -50% 0;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes diagonalShimmer {
          0% {
            background-position: -50% 0;
          }
          60% {
            background-position: 110% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
        
        /* Fallback for browsers that don't support background-clip: text */
        @supports not (-webkit-background-clip: text) {
          .shimmer-text {
            color: white;
            background: none;
            animation: none;
            -webkit-text-fill-color: white;
          }
        }
      `}</style>
    </>
  );
};

export default ShimmerTitle;
