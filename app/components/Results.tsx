"use client";

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

      <button className="retake-button" onClick={onRetake}>
        Retake Quiz
      </button>
    </div>
  );
}
