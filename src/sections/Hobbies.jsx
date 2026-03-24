import React, { useEffect, useState, useRef } from "react";
import StickerPeel from "../components/StickerPeel";
import { myHobbies } from "../constants";
import toast from "react-hot-toast";

const Hobbies = () => {
  const [isMobile, setIsMobile] = useState(false);

  const bgAudioRef = useRef(null);        // Background music
  const oneShotAudioRef = useRef(null);   // One-shot sounds
  const [isPlaying, setIsPlaying] = useState(false);

  /* -------------------- Screen Detection -------------------- */

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* -------------------- Toast UI -------------------- */

  const showPlayingToast = () => {
    toast.custom(
      () => (
        <div className="bg-black text-white px-6 py-4 rounded-xl border border-white/20 shadow-lg">
          <div className="flex items-center gap-2">
            <span>✔</span>
            <span>Playing Music 🎵</span>
          </div>
        </div>
      ),
      { id: "music-toast" }
    );
  };

  const showPausedToast = () => {
    toast.custom(
      () => (
        <div className="bg-black text-white px-6 py-4 rounded-xl border border-white/20 shadow-lg">
          <div className="flex items-center gap-2">
            <span>ℹ</span>
            <span>Music paused</span>
          </div>
        </div>
      ),
      { id: "music-toast" }
    );
  };

  /* -------------------- Background Music -------------------- */

  const toggleBackgroundMusic = (soundPath) => {
    if (!bgAudioRef.current) {
      const audio = new Audio(soundPath);
      audio.loop = true;
      audio.volume = 0.4;
      audio.play();

      bgAudioRef.current = audio;
      setIsPlaying(true);
      showPlayingToast();
      return;
    }

    if (isPlaying) {
      bgAudioRef.current.pause();
      setIsPlaying(false);
      showPausedToast();
    } else {
      bgAudioRef.current.play();
      setIsPlaying(true);
      showPlayingToast();
    }
  };

  /* -------------------- One Shot Sounds -------------------- */

  const playOneShotSound = (soundPath) => {
    if (!soundPath) return;

    // Stop previous one-shot sound
    if (oneShotAudioRef.current) {
      oneShotAudioRef.current.pause();
      oneShotAudioRef.current.currentTime = 0;
    }

    const audio = new Audio(soundPath);
    audio.volume = 0.4;
    audio.play();

    oneShotAudioRef.current = audio;
  };

  /* -------------------- Click Handler -------------------- */

  const handleStickerClick = (hobby) => {
    if (hobby.name === "Music") {
      toggleBackgroundMusic(hobby.sound);
    } else {
      playOneShotSound(hobby.sound);
    }
  };

  return (
    <section className="c-space section-spacing relative min-h-[600px] overflow-hidden">
      <h2 className="text-heading mb-12">Hobbies</h2>

      <div className="absolute inset-0 bg-[#030412] -z-10" />

      <div className="relative w-full h-[750px] sm:h-[600px] md:h-[500px]">
        {myHobbies.map((hobby) => (
          <StickerPeel
            key={hobby.id}
            imageSrc={hobby.image}
            width={isMobile ? hobby.width * 0.8 : hobby.width}
            rotate={isMobile ? hobby.rotate * 0.5 : hobby.rotate}
            initialPosition={isMobile ? hobby.mobilePosition : hobby.position}
            peelDirection={hobby.peelDirection}
            peelBackHoverPct={30}
            peelBackActivePct={40}
            shadowIntensity={0.6}
            lightingIntensity={0.01}
            onClick={() => handleStickerClick(hobby)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hobbies;