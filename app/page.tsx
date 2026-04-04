"use client";

import { useState } from "react";
import { questions, PersonalityType } from "./data/quizData";
import QuizQuestion from "./components/QuizQuestion";
import Brewing from "./components/Brewing";
import Results from "./components/Results";

type Screen = "welcome" | "quiz" | "brewing" | "results";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"forward" | "back">("forward");

  function handleStart() {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setSlideDirection("forward");
  }

  function handleAnswer(personality: string) {
    const newAnswers = [...answers, personality as PersonalityType];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setSlideDirection("forward");
      setAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setAnimating(false);
      }, 300);
    } else {
      setScreen("brewing");
      setTimeout(() => {
        setScreen("results");
      }, 2500);
    }
  }

  function handleBack() {
    if (currentQuestion > 0) {
      setSlideDirection("back");
      setAnimating(true);
      setTimeout(() => {
        setAnswers(answers.slice(0, -1));
        setCurrentQuestion(currentQuestion - 1);
        setAnimating(false);
      }, 300);
    }
  }

  function handleRetake() {
    setScreen("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
  }

  if (screen === "welcome") {
    return (
      <div className="quiz-container">
        <div className="card welcome-card fade-in">
          <div className="badge">Basecamp Coffee</div>
          <h1>What&apos;s Your Coffee Personality?</h1>
          <p>
            Answer 5 quick questions about your lifestyle and we&apos;ll match
            you with your perfect Basecamp brew. It only takes a minute!
          </p>
          <button className="start-button" onClick={handleStart}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (screen === "quiz") {
    const animClass = slideDirection === "forward"
      ? `slide-in ${animating ? "slide-out" : ""}`
      : `slide-in-back ${animating ? "slide-out-back" : ""}`;

    return (
      <div className="quiz-container">
        <div key={currentQuestion} className={animClass}>
          <QuizQuestion
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            onBack={currentQuestion > 0 ? handleBack : undefined}
          />
        </div>
      </div>
    );
  }

  if (screen === "brewing") {
    return (
      <div className="quiz-container">
        <Brewing />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="fade-in">
        <Results answers={answers} onRetake={handleRetake} />
      </div>
    </div>
  );
}
