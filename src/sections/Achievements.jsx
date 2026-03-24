import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import ReflectiveCard from "../components/ReflectiveCard.jsx";
import { achievementsData } from "../constants/index.js";
import CircularText from "../components/CircularText.jsx";

const Achievements = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="c-space section-spacing relative">
      <h2 className="text-heading mb-12">Achievements</h2>

      <div
        ref={containerRef}
        className="
          relative
          w-full
          h-[500px]
          sm:h-[600px]
          md:h-[650px]
          overflow-hidden
          bg-[#030412]
        "
      >
        {/* Circular Background Text */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <CircularText
            text="CODE COMPETE IMPROVE REPEAT "
            spinDuration={40}
            onHover={null}
            className=" opacity-30
  scale-[1.2]
  sm:scale-[1.6]
  md:scale-[2.2]"
          />
        </div>
        {/* 🧩 Draggable Cards */}
        <div className="absolute inset-0 z-20">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              drag
              // dragConstraints={containerRef}
              dragElastic={0.18}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute cursor-grab active:cursor-grabbing"
              style={
                isMobile
                  ? {
                      top: "12%",
                      left: `${index * 9}%`,
                    }
                  : {
                      top: "10%",
                      left: `${10 + index * 12}%`,
                      // rotate: `${(index % 2 === 0 ? -1 : 1) * (index * 3)}deg`,
                    }
              }
            >
              <ReflectiveCard
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                footer={item.footer}
                blurStrength={12}
                glassDistortion={30}
                metalness={1}
                roughness={0.75}
                displacementStrength={20}
                grayscale={0.15}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
