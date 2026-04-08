// import { useEffect, useRef } from "react";
// import {
//   Fingerprint,
//   Trophy,
//   Code2,
//   Globe,
//   Medal,
//   TrendingUp,
// } from "lucide-react";

// const ReflectiveCard = ({
//   title,
//   subtitle,
//   description,
//   footer,
//   blurStrength = 12,
//   color = "white",
//   metalness = 1,
//   roughness = 0.4,
//   overlayColor = "rgba(255, 255, 255, 0.1)",
//   displacementStrength = 20,
//   noiseScale = 1,
//   specularConstant = 1.2,
//   grayscale = 1,
//   glassDistortion = 0,
//   className = "",
//   style = {},
// }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     let stream = null;

//     const startWebcam = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({
//           video: {
//             width: { ideal: 640 },
//             height: { ideal: 480 },
//             facingMode: "user",
//           },
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (err) {
//         console.error("Error accessing webcam:", err);
//       }
//     };

//     startWebcam();

//     return () => {
//       if (stream) {
//         stream.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
//   const saturation = 1 - Math.max(0, Math.min(1, grayscale));

//   const cssVariables = {
//     "--blur-strength": `${blurStrength}px`,
//     "--metalness": metalness,
//     "--roughness": roughness,
//     "--overlay-color": overlayColor,
//     "--text-color": color,
//     "--saturation": saturation,
//   };

//   const getTopRightIcon = () => {
//     switch (footer) {
//       case "Competitive Programming":
//         return <Code2 className="opacity-80" size={20} />;
//       case "National Level Contest":
//         return <Medal className="opacity-80" size={20} />;
//       case "National Level Examination":
//         return <Trophy className="opacity-80" size={20} />;
//       case "International Level Contest":
//         return <Globe className="opacity-80" size={20} />;
//       default:
//         return <TrendingUp className="opacity-80" size={20} />;
//     }
//   };

//   const getHeaderConfig = () => {
//     switch (footer) {
//       case "Competitive Programming":
//         return {
//           label: "COMPETITIVE",
//           icon: <Code2 size={14} className="opacity-80" />,
//         };

//       case "National Level Contest":
//         return {
//           label: "NATIONAL RANK",
//           icon: <Medal size={14} className="opacity-80" />,
//         };

//       case "National Level Examination":
//         return {
//           label: "JEE PERFORMANCE",
//           icon: <Trophy size={14} className="opacity-80" />,
//         };

//       case "International Level Contest":
//         return {
//           label: "GLOBAL RANK",
//           icon: <Globe size={14} className="opacity-80" />,
//         };

//       default:
//         return {
//           label: "PERFORMANCE",
//           icon: <TrendingUp size={14} className="opacity-80" />,
//         };
//     }
//   };

//   const header = getHeaderConfig();

//   return (
//     <div
//       className={`
//         relative
//         w-[220px] h-[340px]
//         sm:w-[260px] sm:h-[400px]
//         md:w-[300px] md:h-[460px]
//         lg:w-[320px] lg:h-[500px]
//         rounded-[20px]
//         overflow-hidden
//         bg-[#1a1a1a]
//         shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset]
//         isolate
//         ${className}
//       `}
//       style={{ ...style, ...cssVariables }}
//     >
//       <svg className="absolute w-0 h-0 pointer-events-none opacity-0">
//         <defs>
//           <filter
//             id="metallic-displacement"
//             x="-20%"
//             y="-20%"
//             width="140%"
//             height="140%"
//           >
//             <feTurbulence
//               type="turbulence"
//               baseFrequency={baseFrequency}
//               numOctaves="2"
//               result="noise"
//             />
//             <feColorMatrix
//               in="noise"
//               type="luminanceToAlpha"
//               result="noiseAlpha"
//             />
//             <feDisplacementMap
//               in="SourceGraphic"
//               in2="noise"
//               scale={displacementStrength}
//               xChannelSelector="R"
//               yChannelSelector="G"
//               result="rippled"
//             />
//             <feSpecularLighting
//               in="noiseAlpha"
//               surfaceScale={displacementStrength}
//               specularConstant={specularConstant}
//               specularExponent="20"
//               lightingColor="#ffffff"
//               result="light"
//             >
//               <fePointLight x="0" y="0" z="300" />
//             </feSpecularLighting>
//             <feComposite
//               in="light"
//               in2="rippled"
//               operator="in"
//               result="light-effect"
//             />
//             <feBlend
//               in="light-effect"
//               in2="rippled"
//               mode="screen"
//               result="metallic-result"
//             />
//             <feColorMatrix
//               in="SourceAlpha"
//               type="matrix"
//               values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
//               result="solidAlpha"
//             />
//             <feMorphology
//               in="solidAlpha"
//               operator="erode"
//               radius="45"
//               result="erodedAlpha"
//             />
//             <feGaussianBlur
//               in="erodedAlpha"
//               stdDeviation="10"
//               result="blurredMap"
//             />
//             <feComponentTransfer in="blurredMap" result="glassMap">
//               <feFuncA type="linear" slope="0.5" intercept="0" />
//             </feComponentTransfer>
//             <feDisplacementMap
//               in="metallic-result"
//               in2="glassMap"
//               scale={glassDistortion}
//               xChannelSelector="A"
//               yChannelSelector="A"
//               result="final"
//             />
//           </filter>
//         </defs>
//       </svg>

//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2] -scale-x-100 z-0 opacity-90 transition-[filter] duration-300"
//         style={{
//           filter:
//             "saturate(var(--saturation, 0)) contrast(120%) brightness(110%) blur(var(--blur-strength, 12px)) url(#metallic-displacement)",
//         }}
//       />

//       <div className="absolute inset-0 z-10 opacity-[var(--roughness,0.4)] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay" />

//       <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.3)_100%)] pointer-events-none mix-blend-overlay opacity-[var(--metalness,1)]" />

//       <div className="relative z-10 h-full flex flex-col justify-between p-8 text-[var(--text-color,white)] bg-[var(--overlay-color,rgba(255,255,255,0.05))]">
//         <div className="flex justify-between items-center border-b border-white/20 pb-4">
//           <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] px-2 py-1 bg-white/10 rounded border border-white/20">
//             <span>{header.label}</span>
//           </div>
//           {getTopRightIcon()}
//         </div>

//         <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
//           <div className="text-center flex flex-col items-center">
//             <h2 className="text-2xl font-bold tracking-[0.05em] drop-shadow-md">
//               {title}
//             </h2>

//             <p className="text-xs tracking-[0.2em] opacity-45 uppercase mt-4">
//               {subtitle}
//             </p>

//             <p className="text-[13px] mt-4 opacity-75 leading-relaxed max-w-[90%]">
//               {description}
//             </p>
//           </div>
//         </div>

//         <div className="flex justify-between items-end border-t border-white/20 pt-6">
//           <div className="flex flex-col gap-1">
//             <span className="text-[9px] tracking-[0.1em] opacity-60">
//               CATEGORY
//             </span>
//             <span className="font-mono text-sm tracking-[0.05em]">
//               {footer}
//             </span>
//           </div>
//           <div className="opacity-40">
//             <Fingerprint size={32} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReflectiveCard;

import {
  Fingerprint,
  Trophy,
  Code2,
  Globe,
  Medal,
  TrendingUp,
} from "lucide-react";

const ReflectiveCard = ({
  title,
  subtitle,
  description,
  footer,
  className = "",
  style = {},
}) => {
  const getTopRightIcon = () => {
    switch (footer) {
      case "Competitive Programming":
        return <Code2 className="opacity-80" size={20} />;
      case "National Level Contest":
        return <Medal className="opacity-80" size={20} />;
      case "National Level Examination":
        return <Trophy className="opacity-80" size={20} />;
      case "International Level Contest":
        return <Globe className="opacity-80" size={20} />;
      default:
        return <TrendingUp className="opacity-80" size={20} />;
    }
  };

  const getHeaderConfig = () => {
    switch (footer) {
      case "Competitive Programming":
        return { label: "COMPETITIVE" };
      case "National Level Contest":
        return { label: "NATIONAL RANK" };
      case "National Level Examination":
        return { label: "JEE PERFORMANCE" };
      case "International Level Contest":
        return { label: "GLOBAL RANK" };
      default:
        return { label: "PERFORMANCE" };
    }
  };

  const header = getHeaderConfig();

  return (
    <div
      className={`
        relative
        w-[220px] h-[340px]
        sm:w-[260px] sm:h-[400px]
        md:w-[300px] md:h-[460px]
        lg:w-[320px] lg:h-[500px]
        rounded-[20px]
        overflow-hidden
        isolate
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        ${className}
      `}
      style={style}
    >
      {/* ✨ Shine Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-40" />

        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_60%)] animate-[spin_25s_linear_infinite]" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27/%3E%3C/filter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27/%3E%3C/svg%3E')]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <div className="text-[10px] font-bold tracking-[0.15em] px-2 py-1 bg-white/10 rounded border border-white/10">
            {header.label}
          </div>
          {getTopRightIcon()}
        </div>

        {/* Center */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
          <h2 className="text-2xl font-bold tracking-wide">
            {title}
          </h2>

          <p className="text-xs tracking-[0.2em] opacity-50 uppercase">
            {subtitle}
          </p>

          <p className="text-sm opacity-70 leading-relaxed max-w-[90%]">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end border-t border-white/10 pt-4">
          <div>
            <span className="text-[9px] opacity-50">CATEGORY</span>
            <p className="font-mono text-sm">{footer}</p>
          </div>

          <Fingerprint size={28} className="opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
