"use client";

import { useState } from "react";

type MCQ = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const mockQuestion: MCQ = {
  id: 1,
  question: "What is the main purpose of React's Virtual DOM?",
  options: [
    "To directly manipulate the browser DOM",
    "To improve performance by minimizing DOM updates",
    "To replace HTML",
    "To manage backend state",
  ],
  correctAnswer: 1,
  explanation:
    "The Virtual DOM helps React efficiently update only the parts of the DOM that change, improving performance.",
};

export default function MCQPage() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">MCQ Practice</h1>

        <p className="text-gray-600 mb-6">
          Test your knowledge with timed multiple-choice questions and get
          instant feedback.
        </p>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Question</h2>

          <p className="mb-6">{mockQuestion.question}</p>

          <div className="space-y-3">
            {mockQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === mockQuestion.correctAnswer;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedOption(index)}
                  disabled={showResult}
                  className={`w-full text-left p-3 border rounded transition
                  ${isSelected ? "border-blue-600 bg-blue-50" : ""}
                  ${
                    showResult && isCorrect
                      ? "border-green-600 bg-green-50"
                      : ""
                  }
                  ${
                    showResult && isSelected && !isCorrect
                      ? "border-red-600 bg-red-50"
                      : ""
                  }
                `}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {!showResult && (
            <button
              onClick={() => setShowResult(true)}
              disabled={selectedOption === null}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Submit Answer
            </button>
          )}

          {showResult && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <p className="font-medium mb-2">
                {selectedOption === mockQuestion.correctAnswer
                  ? "✅ Correct!"
                  : "❌ Incorrect"}
              </p>
              <p className="text-sm">{mockQuestion.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
