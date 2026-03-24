// import { motion } from "motion/react";
// import ElectricBorder from "./ElectricBorder";
// const ProjectDetails = ({
//   title,
//   description,
//   subDescription,
//   image,
//   tags,
//   href,
//   closeModal,
// }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
//       {/* <motion.ElectricBorder
//         color="#9368f8"
//         speed={0.7}
//         chaos={0.06}
//         thickness={20}
//         borderRadius={23}
//         className="max-w-2xl w-full"
//       > */}
//         <motion.div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10" initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}>
//           <button
//             onClick={closeModal}
//             className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
//           >
//             <img src="assets/close.svg" className="w-6 h-6" />
//           </button>
//           <img src={image} alt={title} className="w-full rounded-t-2xl" />
//           <div className="p-5">
//             <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
//             <p className="mb-3 font-normal text-neutral-400">{description}</p>
//             {subDescription.map((subDesc, index) => (
//               <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
//             ))}
//             <div className="flex items-center justify-between mt-4">
//               <div className="flex gap-3">
//                 {tags.map((tag) => (
//                   <img
//                     key={tag.id}
//                     src={tag.path}
//                     alt={tag.name}
//                     className="rounded-lg size-10 hover-animation"
//                   />
//                 ))}
//               </div>
//               <a
//                 className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
//                 href={href}
//                 target="_blank"
//               >
//                 View Project{" "}
//                 <img src="assets/arrow-up.svg" className="size-4" href={href} />
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       {/* </motion.ElectricBorder> */}
//     </div>
//   );
// };

// export default ProjectDetails;


import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
// import ElectricBorder from "./ElectricBorder";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const modalRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!modalRef.current) return;

      const modalHeight = modalRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (modalHeight > viewportHeight * 0.9) {
        const newScale = Math.max(
          0.7,
          (viewportHeight * 0.9) / modalHeight
        );
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    updateScale();

    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm">
      
      {/* Optional Border Wrapper */}
      {/* <motion.ElectricBorder ... > */}

      <motion.div
        ref={modalRef}
        style={{ scale }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 origin-center"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>

          <p className="mb-3 font-normal text-neutral-400">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={index}
              className="mb-3 font-normal text-neutral-400"
            >
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            {/* Tags */}
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-6 sm:size-8 md:size-10 hover-animation"
                />
              ))}
            </div>

            {/* Link */}
            <a
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* </motion.ElectricBorder> */}
    </div>
  );
};

export default ProjectDetails;