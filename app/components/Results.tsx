"use client";

import { useState } from "react";
import { PersonalityType, personalities } from "../data/quizData";

interface ResultsProps {
  answers: PersonalityType[];
  onRetake: () => void;
}

interface PersonalityResult {
  name: PersonalityType;
  coffee: string;
  tagline: string;
  percentage: number;
}

export default function Results({ answers, onRetake }: ResultsProps) {
  const [copied, setCopied] = useState(false);
  const counts: Record<string, number> = {};
  for (const answer of answers) {
    counts[answer] = (counts[answer] || 0) + 1;
  }

  const results: PersonalityResult[] = personalities
    .map((p) => ({
      ...p,
      percentage: Math.round(((counts[p.name] || 0) / answers.length) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  const primary = results[0];

  const shareText = `I'm a ${primary.name}! ☕ "${primary.tagline}" — My signature drink: ${primary.coffee}. What's your coffee personality?`;
  const shareUrl = typeof window !== "undefined" ? window.location.origin : "";

  async function handleNativeShare() {
    try {
      await navigator.share({ title: "My Coffee Personality", text: shareText, url: shareUrl });
    } catch {
      // User cancelled or share failed silently
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleShareX() {
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="card results-card">
      <div className="badge">Your Results</div>

      <h1>You&apos;re a {primary.name}!</h1>
      <p className="result-tagline">&ldquo;{primary.tagline}&rdquo;</p>

      <div className="primary-result">
        <div className="primary-coffee">
          Your signature drink: <strong>{primary.coffee}</strong>
        </div>
        <div className="primary-percentage">{primary.percentage}%</div>
      </div>

      <div className="all-results">
        <h2>Full Breakdown</h2>
        {results.map((result) => (
          <div
            key={result.name}
            className={`result-row ${result.name === primary.name ? "primary" : ""}`}
          >
            <div className="result-header">
              <span className="result-name">{result.name}</span>
              <span className="result-pct">{result.percentage}%</span>
            </div>
            <div className="result-bar-track">
              <div
                className="result-bar-fill"
                style={{ width: `${result.percentage}%` }}
              />
            </div>
            <div className="result-details">
              <span className="result-coffee">{result.coffee}</span>
              <span className="result-tagline-small">
                &ldquo;{result.tagline}&rdquo;
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="share-section">
        <h2>Share Your Results</h2>
        <div className="share-buttons">
          {typeof navigator !== "undefined" && "share" in navigator && (
            <button className="share-button native" onClick={handleNativeShare}>
              Share
            </button>
          )}
          <button className="share-button copy" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy Link"}
          </button>
          <button className="share-button x" onClick={handleShareX}>
            Post on X
          </button>
        </div>
      </div>

      <button className="retake-button" onClick={onRetake}>
        Retake Quiz
      </button>
    </div>
  );
}
