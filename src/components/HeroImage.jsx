import React from "react";
import TiltedCard from "./TiltedCard";
import profileImage from "../assets/images/profile_image_horse\.png";

const HeroImage = () => {
  return (
    <div className="flex justify-center md:justify-end w-full md:w-auto">
      <div
        className="
    w-[220px] h-[220px]
    sm:w-[260px] sm:h-[260px]
    md:w-[420px] md:h-[420px]
    md:translate-y-16
    mx-auto
  "
      >
        <TiltedCard
          imageSrc={profileImage}
          altText="Miqdad"
          captionText="NIT Raipur - Batch 2025"
          //   containerHeight="300px"
          //   containerWidth="300px"
          //   imageHeight="300px"
          //   imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          //     overlayContent={
          //       <div className="absolute top-4 left-4">
          //         <div
          //           className="
          //   px-4 py-2
          //   rounded-full
          //   bg-neutral-900/50
          //   backdrop-blur-lg
          //   border border-white/20
          //   text-sm
          //   font-medium
          //   tracking-tight
          //   text-white
          //   shadow-xl
          // "
          //         >FullStack Developer</div>
          //       </div>
          //     }
        />
      </div>
    </div>
  );
};

export default HeroImage;
