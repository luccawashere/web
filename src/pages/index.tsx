import React, { useState } from 'react';

interface PlayButtonProps {
  onClick: () => void;
  className?: string;
}

function PlayButton({ onClick, className }: PlayButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-play"
      onClick={onClick}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function PauseButton({ onClick }: PlayButtonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-pause`}
      onClick={onClick}
    >
      <rect width="4" height="16" x="6" y="4" />
      <rect width="4" height="16" x="14" y="4" />
    </svg>
  );
}

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio") as HTMLAudioElement | null;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="rainbow-text mb-12 text-5xl font-oldEnglish">LUCCA</h1>
      <div>
        <audio id="audio" src="/cocaine.mp3" preload="auto"></audio>
        <div>
          {isPlaying ? (
            <PauseButton onClick={togglePlay} />
          ) : (
            <PlayButton onClick={togglePlay} />
          )}
        </div>
      </div>
    </div>
  );
}
