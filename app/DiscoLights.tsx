"use client";

import { useState } from "react";

const SPARKLES = 240; // spread over a big turning disc, so roughly a quarter are on screen
const COLORS = ["#ffffff", "#ffffff", "#ffe9a8", "#ffb3e6", "#b3ecff", "#d9b3ff"];

// Only rendered after the visitor presses Start, so random values are safe here.
function makeSparkles() {
  return Array.from({ length: SPARKLES }, (_, i) => {
    const star = i % 4 === 0; // every 4th one is a 4-point star, the rest are glints
    return {
      star,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        "--s": `${star ? 10 + Math.random() * 12 : 3 + Math.random() * 5}px`,
        "--c": COLORS[Math.floor(Math.random() * COLORS.length)],
        "--tw": `${1 + Math.random() * 2.5}s`,
        "--d": `${-Math.random() * 3}s`,
      } as React.CSSProperties,
    };
  });
}

export default function DiscoLights() {
  const [sparkles] = useState(makeSparkles);
  return (
    <div className="disco" aria-hidden="true">
      {/* Stage spotlights sweeping from the bottom corners and top */}
      <div className="spotlight sl-1" />
      <div className="spotlight sl-2" />
      <div className="spotlight sl-3" />
      <div className="spotlight sl-4" />

      {/* Mirror-ball reflections slowly circling the room */}
      <div className="sparkle-field">
        {sparkles.map((s, i) => (
          <span key={i} className={s.star ? "sparkle star" : "sparkle"} style={s.style} />
        ))}
      </div>

      <div className="ball">🪩</div>
    </div>
  );
}
