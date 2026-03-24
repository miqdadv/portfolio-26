import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "appwrite",
    "cplusplus",
    "css3",
    "expo",
    "express",
    "firebase",
    "gcp",
    "git",
    "github",
    "html5",
    "js",
    "nextjs",
    "nodejs",
    "react",
    "redux",
    "shadcn",
    "supabase",
    "tailwind",
    "typescript",
    "vitejs",
    "vscode",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
