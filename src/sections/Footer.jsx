// import { mySocials } from "../constants";

// const Footer = () => {
//   return (
//     <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
//       <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
//       <div className="flex gap-2">
//         <p>Term & Conditions</p>
//         <p>|</p>
//         <p>Privacy Policy</p>
//       </div>
//       <div className="flex gap-3">
//         {mySocials.map((social, index) => (
//           <a key={index} href={social.href} target="_blank">
//             <img src={social.icon} alt={social.name} className="w-5 h-5" />
//           </a>
//         ))}
//       </div>
//       <p>© 2026 Miqdad. All rights reserved.</p>
//     </section>
//   );
// };

// export default Footer;

// import { mySocials } from "../constants";
// import { motion } from "motion/react";

// const Footer = () => {
//   return (
//     <footer className="relative mt-24 text-neutral-400 c-space">

//       {/* Animated Glow Line */}
//       <div className="relative mb-10 h-[1px] w-full overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-md" />
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
//           animate={{ x: ["-100%", "100%"] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

//         {/* Left Section */}
//         <div className="flex flex-col gap-2 text-center md:text-left">
//           <p className="text-neutral-500 text-sm">
//             © {new Date().getFullYear()} Miqdad. Crafted with precision.
//           </p>
//           <div className="flex justify-center gap-3 md:justify-start text-xs">
//             <a className="hover:text-white transition">Terms</a>
//             <span className="opacity-40">|</span>
//             <a className="hover:text-white transition">Privacy</a>
//           </div>
//         </div>

//         {/* Social Dock Style Icons */}
//         <div className="flex gap-4">
//           {mySocials.map((social, index) => (
//             <motion.a
//               key={index}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5 }}
//               className="group relative flex h-11 w-11 items-center justify-center rounded-full
//               bg-white/5 backdrop-blur-lg border border-white/10
//               transition-all duration-300 hover:border-purple-500/50"
//             >
//               <img
//                 src={social.icon}
//                 alt={social.name}
//                 className="w-5 h-5 opacity-70 group-hover:opacity-100 transition"
//               />

//               {/* Glow */}
//               <div className="absolute inset-0 rounded-full bg-purple-500/0 group-hover:bg-purple-500/20 blur-md transition-all duration-300" />
//             </motion.a>
//           ))}
//         </div>

//       </div>

//       {/* Signature Line */}
//       <div className="mt-10 text-center text-xs text-neutral-600">
//         Built with React • Motion • Tailwind
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// "use client";
// import { mySocials } from "../constants";
// import { motion } from "motion/react";

// const Footer = () => {
//   return (
//     <footer className="relative mt-32 text-neutral-400 c-space overflow-hidden">
//       {/* Animated Divider */}
//       <div className="relative mb-12 h-[1px] w-full overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-md" />

//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
//           animate={{ x: ["-100%", "100%"] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
//         {/* Left Section */}
//         <div className="text-center md:text-left">
//           <p className="text-sm text-neutral-500">
//             © {new Date().getFullYear()} Miqdad
//           </p>

//           {/* Gradient Text */}
//           <p className="mt-1 text-lg font-semibold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient_6s_linear_infinite]">
//             Crafted with passion & precision
//           </p>

//           <div className="mt-3 flex justify-center gap-3 text-xs md:justify-start">
//             <a className="hover:text-white transition">Terms</a>
//             <span className="opacity-40">|</span>
//             <a className="hover:text-white transition">Privacy</a>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           {mySocials.map((social, index) => (
//             <motion.a
//               key={index}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -6, scale: 1.1 }}
//               transition={{ duration: 0.15, ease: "easeOut" }}
//               className="group relative flex h-12 w-12 items-center justify-center rounded-full
//       bg-white/5 backdrop-blur-xl border border-white/10
//       transition-all duration-300"
//             >
//               <img
//                 src={social.icon}
//                 alt={social.name}
//                 className="h-5 w-5 opacity-70 group-hover:opacity-100 transition"
//               />

//               {/* Dynamic Glow */}
//               <div
//                 className={`absolute inset-0 rounded-full ${social.glow} opacity-0 group-hover:opacity-100 blur-md transition-all duration-300`}
//               />
//             </motion.a>
//           ))}
//         </div>
//       </div>

//       {/* Tech Stack */}
//       <div className="mt-12 text-center text-xs text-neutral-600">
//         Built with React • Motion • Tailwind
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";
import { mySocials } from "../constants";
import { SparklesCore } from "../components/Sparkles.jsx";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="relative mt-32 text-neutral-400 c-space overflow-hidden mb-6">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={90}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />
      </div>

      {/* Static Divider Line */}
      <div className="relative mb-12 h-[1px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/60 to-transparent blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      </div>

      <div className="relative flex flex-col items-center justify-between gap-10 md:flex-row">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Miqdad
          </p>

          {/* Gradient Text */}
          <p className="mt-1 text-lg font-semibold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient_6s_linear_infinite]">
            Crafted with passion & precision
          </p>

          <div className="mt-3 flex justify-center gap-3 text-xs md:justify-start">
            <a className="hover:text-white transition">Terms</a>
            <span className="opacity-40">|</span>
            <a className="hover:text-white transition">Privacy</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full
              bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="h-5 w-5 opacity-70 group-hover:opacity-100 transition"
              />

              {/* Dynamic Glow */}
              <div
                className={`absolute inset-0 rounded-full ${social.glow} opacity-0 group-hover:opacity-100 blur-md transition-all duration-300`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;