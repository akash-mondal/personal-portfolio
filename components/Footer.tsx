"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "@/context/theme-context";

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

interface ZombieImageProps {
  src: string;
  alt: string;
  playSound?: boolean;
}

const ZombieImage: React.FC<ZombieImageProps> = ({ src, alt, playSound = false }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (playSound) {
      audioRef.current = new Audio();
    }
  }, [playSound]);

  const playRandomGrowl = () => {
    if (playSound && audioRef.current) {
      const audioFiles = ['grawl1.mp3', 'grawl2.mp3', 'grawl3.mp3', 'grawl4.mp3', 'grawl5.mp3'];
      const randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
      audioRef.current.src = `/${randomFile}`;
      audioRef.current.play();
    }
  };

  return (
    <div
      className="transition-transform duration-300 transform hover:scale-110"
      onClick={playRandomGrowl}
    >
      <Image src={src} alt={alt} width={150} height={150} />
    </div>
  );
};

interface ScratchingZombieProps {
  src: string;
  alt: string;
}

const ScratchingZombie: React.FC<ScratchingZombieProps> = ({ src, alt }) => {
  const [showScratch, setShowScratch] = useState(false);
  const [scratchPosition, setScratchPosition] = useState({ top: 0, left: 0 });
  const audioRef = useRef<HTMLAudioElement>(new Audio('/scratch.mp3'));

  const handleMouseEnter = () => {
    setShowScratch(true);
    setScratchPosition({
      top: Math.random() * (window.innerHeight - 500),
      left: Math.random() * (window.innerWidth - 500),
    });
    audioRef.current.play();
    setTimeout(() => setShowScratch(false), 1000);
  };

  return (
    <>
      <div
        className="transition-transform duration-300 transform hover:scale-110"
        onMouseEnter={handleMouseEnter}
      >
        <Image src={src} alt={alt} width={150} height={150} />
      </div>
      {showScratch && (
        <div
          className="fixed transition-opacity duration-500 ease-in-out"
          style={{
            top: scratchPosition.top,
            left: scratchPosition.left,
            opacity: showScratch ? 1 : 0,
            zIndex: 100,
          }}
        >
          <Image
            src={Math.random() > 0.5 ? "/scratch1.png" : "/scratch2.png"}
            alt="Scratch"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      )}
    </>
  );
};

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [showScratch, setShowScratch] = useState(false);
  const [scratchPosition, setScratchPosition] = useState({ top: 0, left: 0 });
  const isMobile = useIsMobile();
  const audioRef = useRef<HTMLAudioElement>(new Audio('/scratch.mp3'));

  const toggleGameVisibility = () => {
    setIsGameVisible(!isGameVisible);
  };

  const handleCloseButtonHover = () => {
    setShowScratch(true);
    setScratchPosition({
      top: Math.random() * (window.innerHeight - 500),
      left: Math.random() * (window.innerWidth - 500),
    });
    audioRef.current.play();
    setTimeout(() => setShowScratch(false), 1000);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.7); }
          50% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.7); }
          100% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.7); }
        }
        .glassy-red {
          backdrop-filter: blur(15px);
          background: rgba(255, 0, 0, 0.3);
          border-radius: 10px;
          border: 1px solid rgba(255, 0, 0, 0.5);
        }
        .glass-blur {
          backdrop-filter: blur(10px);
          background: ${theme === 'light' ? 'rgba(200, 200, 200, 0.5)' : 'rgba(255, 255, 255, 0.1)'};
          border-radius: 10px;
          border: 1px solid ${theme === 'light' ? 'rgba(200, 200, 200, 0.7)' : 'rgba(255, 255, 255, 0.3)'};
        }
        .controls-table {
          max-height: 700px;
          overflow-y: auto;
        }
        .controls-table::-webkit-scrollbar {
          width: 6px;
        }
        .controls-table::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .mirror-glass {
          backdrop-filter: blur(30px);
          background: ${theme === 'light' ? 'rgba(200, 200, 200, 0.5)' : 'rgba(255, 255, 255, 0.1)'};
          border-radius: 15px;
          border: 1px solid ${theme === 'light' ? 'rgba(200, 200, 200, 0.7)' : 'rgba(255, 255, 255, 0.3)'};
          box-shadow: inset 0 0 15px ${theme === 'light' ? 'rgba(200, 200, 200, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
        }
      `}</style>
      <footer className="mb-10 px-4 text-center text-gray-500">
        {!isMobile && (
          <button
            className={`py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50 glowing-red glassy-red ${
              theme === "light" ? "text-black" : "text-white"
            }`}
            onClick={toggleGameVisibility}
          >
            Don&apos;t Click... or Bite 🧟
          </button>
        )}
      </footer>
      {isGameVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 glass-blur">
          <div className="relative mirror-glass p-4 rounded-lg shadow-lg flex items-center">
            <ZombieImage src="/zombie1.png" alt="Zombie 1" playSound={true} />
            <div className="relative mx-4 flex">
              <iframe
                src="https://nzp.gay"
                width="1280"
                height="720"
                className="rounded-lg mirror-glass"
              />
              <div className={`controls-table ml-4 p-4 rounded-lg shadow-lg ${theme === 'light' ? 'text-black' : 'text-white'} mirror-glass`}>
                <h2 className="text-2xl font-bold mb-4">Controls</h2>
                <table className="w-full text-left">
                  <tbody>
                    <tr><td>Walk Forward:</td><td>W</td></tr>
                    <tr><td>Walk Backward:</td><td>S</td></tr>
                    <tr><td>Walk Left:</td><td>A</td></tr>
                    <tr><td>Walk Right:</td><td>D</td></tr>
                    <tr><td>Jump:</td><td>SPACE</td></tr>
                    <tr><td>Sprint:</td><td>LSHIFT</td></tr>
                    <tr><td>Change Stance:</td><td>LALT</td></tr>
                    <tr><td>Weapon Next:</td><td>1</td></tr>
                    <tr><td>Weapon Previous:</td><td>1</td></tr>
                    <tr><td>Interact:</td><td>E</td></tr>
                    <tr><td>Reload:</td><td>R</td></tr>
                    <tr><td>Melee:</td><td>V</td></tr>
                    <tr><td>Grenade:</td><td>G</td></tr>
                    <tr><td>Secondary Grenade:</td><td>4</td></tr>
                  </tbody>
                </table>
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                  onClick={toggleGameVisibility}
                  onMouseEnter={handleCloseButtonHover}
                >
                  Close Game
                </button>
              </div>
            </div>
          </div>
          {showScratch && (
            <div
              className="fixed transition-opacity duration-500 ease-in-out"
              style={{
                top: scratchPosition.top,
                left: scratchPosition.left,
                opacity: showScratch ? 1 : 0,
                zIndex: 100,
              }}
            >
              <Image
                src={Math.random() > 0.5 ? "/scratch1.png" : "/scratch2.png"}
                alt="Scratch"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Footer;
