import React, { useRef } from "react";
import codingPov from "../assets/images/coding-pov.png";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { Particles } from "../components/Particles";


const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={codingPov}
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Miqdad</p>
            <p className="subtext">
              <p className="subtext">
                I’m a full-stack developer focused on building scalable mobile
                and web applications
              </p>
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "35%", left: "25%" }}
              text="GSAP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "35%", left: "45%" }}
              text="Clean Code"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Frontend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Backend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "5%" }}
              text="Web Dev"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "10deg", top: "25%", left: "5%" }}
              text="Creative"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "35deg", bottom: "65%", left: "70%" }}
              text="App Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="UI/UX"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "75%", left: "65%" }}
              image={"/assets/logos/firebase.png"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image={"/assets/logos/react.png"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "5%", left: "20%" }}
             image={"/assets/logos/cplusplus.png"}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in Udaipur, Rajasthan and open to remote opportunities
              worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="relative h-full overflow-hidden grid-special-color grid-4">
          {/* Particles background */}
          <Particles quantity={100} color="#ffffff" size={0.4} />

          {/* Foreground */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">Let's Build Something Great</p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              My tech stack includes React, Next.js, React Native, JavaScript,
              TypeScript, Firebase, Redux Toolkit, and modern backend
              technologies to build scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
