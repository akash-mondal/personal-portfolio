"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
      className="transform hover:scale-110 transition-transform duration-300 animate-zombie"
      onMouseEnter={playRandomGrowl}
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
        className="transform hover:scale-110 transition-transform duration-300 animate-zombie"
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

interface ControlsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ControlsModal: React.FC<ControlsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-white">Controls</h2>
        <div className="text-white space-y-2">
          <p>Walk Forward: W</p>
          <p>Walk Backward: S</p>
          <p>Walk Left: A</p>
          <p>Walk Right: D</p>
          <p>Jump: SPACE</p>
          <p>Sprint: LSHIFT</p>
          <p>Change Stance: LALT</p>
          <p>Weapon Next: 1</p>
          <p>Weapon Previous: 1</p>
          <p>Interact: E</p>
          <p>Reload: R</p>
          <p>Melee: V</p>
          <p>Grenade: G</p>
          <p>Secondary Grenade: 4</p>
        </div>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(false);

  const toggleGameVisibility = () => {
    setIsGameVisible(!isGameVisible);
  };

  const toggleControlsVisibility = () => {
    setIsControlsVisible(!isControlsVisible);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes zombieFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-zombie {
          animation: zombieFloat 3s ease-in-out infinite;
        }
      `}</style>
      <footer className="mb-10 px-4 text-center text-gray-500">
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          onClick={toggleGameVisibility}
        >
          Don&apos;t Click... or Bite 🧟
        </button>
      </footer>
      {isGameVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-red-950 p-4 rounded-lg shadow-lg flex items-center">
            <ZombieImage src="/zombie1.png" alt="Zombie 1" playSound={true} />
            <div className="relative mx-4">
              <iframe
                src="https://nzp.gay"
                width="1280"
                height="720"
                className="rounded-lg"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                  onClick={toggleControlsVisibility}
                >
                  Controls
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                  onClick={toggleGameVisibility}
                >
                  &times;
                </button>
              </div>
            </div>
            <ScratchingZombie src="/zombie2.png" alt="Zombie 2" />
          </div>
        </div>
      )}
      <ControlsModal isOpen={isControlsVisible} onClose={toggleControlsVisibility} />
    </>
  );
};

export default Footer;
