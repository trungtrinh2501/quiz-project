"use client";

import { useState, useEffect } from "react";

const messages = [
  "Grinding the beans...",
  "Heating the water...",
  "Brewing your results...",
];

export default function Brewing() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => Math.min(prev + 1, messages.length - 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card brewing-card fade-in">
      <div className="brewing-icon">&#x2615;</div>
      <h1>Hang tight...</h1>
      <p className="brewing-message">{messages[messageIndex]}</p>
      <div className="brewing-bar-track">
        <div className="brewing-bar-fill" />
      </div>
    </div>
  );
}
