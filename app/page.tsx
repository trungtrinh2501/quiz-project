"use client";

import { useState } from "react";
import { questions, PersonalityType } from "./data/quizData";
import QuizQuestion from "./components/QuizQuestion";
import Results from "./components/Results";

type Screen = "welcome" | "quiz" | "results";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);

  function handleStart() {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  }

  function handleAnswer(personality: string) {
    const newAnswers = [...answers, personality as PersonalityType];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen("results");
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
        <div className="card welcome-card">
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
    return (
      <div className="quiz-container">
        <QuizQuestion
          question={questions[currentQuestion]}
          questionIndex={currentQuestion}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <Results answers={answers} onRetake={handleRetake} />
    </div>
  );
}
