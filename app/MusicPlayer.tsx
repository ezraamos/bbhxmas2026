"use client";

import { useRef, useState } from "react";
import DiscoLights from "./DiscoLights";

const SRC = "/music/shots.mp3";

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  // The Start button is the user interaction browsers require before playing sound.
  const start = () => {
    audio.current?.play().catch(() => {});
    setEntered(true);
  };

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  };

  return (
    <>
      <audio
        ref={audio}
        src={SRC}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setMissing(true)}
      />

      {!entered && (
        <div className="splash" role="dialog" aria-label="Welcome">
          <div className="splash-inner">
            <div className="splash-icon">🔊</div>
            <h2>Turn your volume up</h2>
            <p className="muted">Boys&apos; Night Out · Cebu City · Dec 18–20</p>
            <button className="btn btn-primary splash-btn" onClick={start} autoFocus>
              🍻 Start
            </button>
          </div>
        </div>
      )}

      {/* Disco lights over the page while the music is playing */}
      {playing && <DiscoLights />}

      {entered && !missing && (
        <button
          className={`music-btn${playing ? " on" : ""}`}
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? "🔊 SHOTS!" : "🔇 Play music"}
        </button>
      )}
    </>
  );
}
