"use client";

import Image from "next/image";
import { Question } from "../data/quizData";

interface QuizQuestionProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (personality: string) => void;
}

export default function QuizQuestion({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div className="card">
      <div className="badge">Coffee Personality Quiz</div>

      <div className="progress">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={`dot ${i <= questionIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="label">
        Question {questionIndex + 1} of {totalQuestions}
      </div>

      <div className="question-image-wrapper">
        <Image
          src={question.image}
          alt={`Question ${questionIndex + 1} mood`}
          width={460}
          height={260}
          className="question-image"
        />
      </div>

      <h1>{question.question}</h1>
      <p>Pick the one that sounds most like you.</p>

      <div className="options">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            className="option"
            onClick={() => onAnswer(answer.personality)}
          >
            <span className="option-icon">{answer.icon}</span>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
