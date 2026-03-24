// import React from "react";
// import HeroText from "../components/HeroText";
// import HeroImage from "../components/HeroImage";

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center c-space">
//       <div
//         className="flex w-full max-w-7xl items-center justify-between gap-12
//                       flex-col md:flex-row"
//       >
//         {/* Left */}
//         <HeroText />

//         {/* Right */}
//         <HeroImage />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";
import PixelBlast from "../components/PixelBlast";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Pixel Blast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          patternDensity={1.35}
          patternScale={2.5}
          color="#7A57DB"
          enableRipples
          rippleIntensityScale={2}
          rippleThickness={0.18}
          rippleSpeed={0.6}
          pixelSizeJitter={0.35}
          edgeFade={0.1}
          speed={0.9}
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center c-space">
        <div
          className="flex w-full max-w-7xl items-center justify-between gap-12
                     flex-col md:flex-row"
        >
          <HeroText />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
