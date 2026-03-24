// import { motion } from "motion/react";

// const Card = ({ text, style, image, containerRef }) => {
//   return image && !text ? (
//     <motion.img
//       className="absolute w-15 cursor-grab"
//       src={image}
//       style={style}
//       whileHover={{ scale: 1.05 }}
//       drag
//       dragConstraints={containerRef}
//       dragElastic={1}
//     />
//   ) : (
//     <motion.div
//       style={style}
//       whileHover={{ scale: 1.05 }}
//       drag
//       dragConstraints={containerRef}
//       dragElastic={1}
//       className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
//     >
//       {text}
//     </motion.div>
//   );
// };

// export default Card;

import { motion, useMotionValue, useTransform } from "motion/react";

const Card = ({ text, style, image, containerRef }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Peel illusion
  const rotateX = useTransform(y, [-50, 50], [14, -14]);
  const rotateY = useTransform(x, [-50, 50], [-14, 14]);

  const commonMotion = {
    x,
    y,
    rotateX,
    rotateY,
    transformStyle: "preserve-3d",
  };

  return image ? (
    <motion.img
      src={image}
      alt=""
      drag
      dragConstraints={containerRef}
      dragElastic={0.18}
      whileHover={{ scale: 1.08, rotateZ: "-2deg" }}
      whileTap={{ scale: 0.96 }}
      className="
        absolute w-14 rounded-md bg-white
        shadow-[3px_6px_0px_rgba(0,0,0,0.45)]
        cursor-grab active:cursor-grabbing
        select-none
      "
      style={{ ...style, ...commonMotion }}
    />
  ) : (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.18}
      whileHover={{ scale: 1.08, rotateZ: "-2deg" }}
      whileTap={{ scale: 0.96 }}
      className="
        absolute px-4 py-3
        text-lg text-center
        rounded-full bg-storm
        ring-1 ring-white/20
        shadow-[3px_6px_0px_rgba(0,0,0,0.45)]
        cursor-grab active:cursor-grabbing
        select-none
      "
      style={{ ...style, ...commonMotion }}
    >
      {text}

      {/* Peel highlight */}
      {/* <span className="pointer-events-none absolute top-1 left-2 h-2 w-8 rounded-full bg-white/30 blur-sm" /> */}
    </motion.div>
  );
};

export default Card;

