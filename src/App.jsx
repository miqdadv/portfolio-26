import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Achievements from "./sections/Achievements";
import Hobbies from "./sections/Hobbies";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Toaster } from "react-hot-toast";
import { MultiStepLoader } from "./components/MultiStepLoader";

const loadingStates = [
  { text: "Initializing Portfolio..." },
  { text: "Loading Components..." },
  { text: "Almost there..." },
  { text: "Welcome to Miqdad's Portfolio 🚀" },
];

const STEP_DURATION = 2000;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const totalTime = loadingStates.length * STEP_DURATION;

    const timer = setTimeout(() => {
      setLoading(false);
    }, totalTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={STEP_DURATION}
        loop={false}
      />

      {!loading && (
        <>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 2000,
              style: {
                background: "#fff",
                color: "black",
                border: "1px solid black",
                fontWeight: "500",
              },
            }}
          />

          <Navbar />

          <div className="container mx-auto max-w-7xl">
            <section id="home">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="project">
              <Projects />
            </section>

            <section id="journey">
              <Experiences />
            </section>

            <section id="achievements">
              <Achievements />
            </section>

            <section id="hobbies">
              <Hobbies />
            </section>

            <section id="contact">
              <Contact />
            </section>

            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;