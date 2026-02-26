"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCurrentUser, updateUserStats, QuizResult } from "@/lib/auth";
import { cricketQuestions, Question } from "@/lib/questions";
import Navigation from "@/components/Navigation";

type QuizState = "ready" | "playing" | "completed";

const TOTAL_TIME = 15 * 60; // 15 minutes in seconds

export default function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>("ready");
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [questions] = useState<Question[]>(cricketQuestions);
  const router = useRouter();

  const finishQuiz = useCallback(
    (finalAnswers: number[], finalScore: number) => {
      const user = getCurrentUser();
      const timeTaken = Math.round((Date.now() - startTime) / 1000);

      const result: QuizResult = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        score: finalScore,
        totalQuestions: 30,
        timeTaken,
        answers: finalAnswers,
      };

      if (user) {
        updateUserStats(user.id, result);
      }

      setQuizState("completed");
    },
    [startTime]
  );

  // Timer
  useEffect(() => {
    if (quizState !== "playing") return;
    if (timeLeft <= 0) {
      finishQuiz(answers, score);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [quizState, timeLeft, answers, score, finishQuiz]);

  const startQuiz = () => {
    const user = getCurrentUser();
    if (!user) {
      router.push("/login");
      return;
    }
    setQuizState("playing");
    setCurrentQ(0);
    setAnswers([]);
    setScore(0);
    setTimeLeft(TOTAL_TIME);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setStartTime(Date.now());
  };

  const handleAnswer = (optionIdx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIdx);
    setShowExplanation(true);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === questions[currentQ].correct;
    const newAnswers = [...answers, selectedAnswer ?? -1];
    const newScore = score + (isCorrect ? 1 : 0);

    setAnswers(newAnswers);
    setScore(newScore);

    if (currentQ + 1 >= questions.length) {
      finishQuiz(newAnswers, newScore);
    } else {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const getTimerColor = () => {
    if (timeLeft > 300) return "text-green-600";
    if (timeLeft > 60) return "text-yellow-600";
    return "text-red-600";
  };

  // ─── Ready Screen ─────────────────────────────────────────────────────────
  if (quizState === "ready") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">🏏</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cricket Quiz</h1>
            <p className="text-gray-500 mb-6">Test your cricket knowledge!</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: "❓", label: "30 Questions" },
                { icon: "⏱️", label: "15 Minutes" },
                { icon: "🏆", label: "1pt / Answer" },
              ].map((item) => (
                <div key={item.label} className="bg-indigo-50 rounded-xl p-3">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs font-medium text-indigo-700">{item.label}</div>
                </div>
              ))}
            </div>

            <ul className="text-left space-y-2 text-sm text-gray-600 mb-8">
              {[
                "Multiple choice questions — pick the best answer",
                "Each correct answer earns 1 point",
                "You have 15 minutes to complete all 30 questions",
                "Explanations are shown after each answer",
                "Your score will be added to the global leaderboard",
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">•</span> {rule}
                </li>
              ))}
            </ul>

            <button
              onClick={startQuiz}
              className="w-full py-4 text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
            >
              Start Quiz →
            </button>

            <Link href="/dashboard" className="block mt-3 text-sm text-gray-400 hover:text-gray-600">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Completed Screen ─────────────────────────────────────────────────────
  if (quizState === "completed") {
    const percentage = Math.round((score / 30) * 100);
    const grade =
      percentage >= 90
        ? { label: "Cricket Expert! 🏆", color: "text-yellow-600", bg: "bg-yellow-50" }
        : percentage >= 70
        ? { label: "Great Knowledge! 🎯", color: "text-green-600", bg: "bg-green-50" }
        : percentage >= 50
        ? { label: "Good Effort! 📈", color: "text-blue-600", bg: "bg-blue-50" }
        : { label: "Keep Practicing! 💪", color: "text-orange-600", bg: "bg-orange-50" };

    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-12 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Score Card */}
            <div
              className="rounded-2xl p-8 text-white text-center mb-6"
              style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
            >
              <div className="text-6xl mb-2">🏏</div>
              <h1 className="text-3xl font-bold mb-1">Quiz Complete!</h1>
              <div className="text-7xl font-black my-4">
                {score}<span className="text-3xl text-indigo-200">/30</span>
              </div>
              <div className={`inline-block px-4 py-2 rounded-full ${grade.bg} ${grade.color} font-bold text-lg mb-2`}>
                {grade.label}
              </div>
              <p className="text-indigo-200">{percentage}% correct</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={startQuiz}
                className="flex-1 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
              >
                🔄 Retake Quiz
              </button>
              <Link
                href="/leaderboard"
                className="flex-1 py-3 text-center text-yellow-700 font-semibold rounded-xl bg-yellow-100 hover:bg-yellow-200 transition-colors"
              >
                🏆 View Leaderboard
              </Link>
              <Link
                href="/dashboard"
                className="flex-1 py-3 text-center text-gray-600 font-semibold rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                📊 Dashboard
              </Link>
            </div>

            {/* Answers Review */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">Answers Review</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {questions.map((q, idx) => {
                  const userAnswer = answers[idx];
                  const isCorrect = userAnswer === q.correct;
                  return (
                    <div key={q.id} className="p-4">
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                            isCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {isCorrect ? "✓" : "✗"}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 text-sm mb-2">
                            Q{idx + 1}. {q.question}
                          </p>
                          {!isCorrect && (
                            <p className="text-xs text-red-500 mb-1">
                              Your answer: {userAnswer >= 0 ? q.options[userAnswer] : "Not answered"}
                            </p>
                          )}
                          <p className="text-xs text-green-600 font-medium mb-1">
                            Correct: {q.options[q.correct]}
                          </p>
                          <p className="text-xs text-gray-500">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Playing Screen ───────────────────────────────────────────────────────
  const question = questions[currentQ];
  const progress = ((currentQ + 1) / 30) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-4 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
            <div className="text-sm font-medium text-gray-600">
              Question <span className="text-indigo-600 font-bold">{currentQ + 1}</span>/30
            </div>
            <div className={`text-lg font-bold ${getTimerColor()}`}>
              ⏱ {formatTime(timeLeft)}
            </div>
            <div className="text-sm font-medium text-gray-600">
              Score: <span className="text-indigo-600 font-bold">{score}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                {question.category}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                let style =
                  "w-full text-left px-4 py-3.5 rounded-xl border-2 font-medium transition-all text-sm ";

                if (selectedAnswer === null) {
                  style += "border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer";
                } else if (idx === question.correct) {
                  style += "border-green-400 bg-green-50 text-green-700";
                } else if (idx === selectedAnswer && idx !== question.correct) {
                  style += "border-red-400 bg-red-50 text-red-700";
                } else {
                  style += "border-gray-100 text-gray-400 cursor-not-allowed";
                }

                return (
                  <button
                    key={idx}
                    className={style}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="font-bold mr-2 text-gray-400">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    {option}
                    {selectedAnswer !== null && idx === question.correct && (
                      <span className="float-right text-green-500">✓</span>
                    )}
                    {selectedAnswer !== null && idx === selectedAnswer && idx !== question.correct && (
                      <span className="float-right text-red-500">✗</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-4">
              <p className="text-sm font-semibold text-indigo-700 mb-1">💡 Did you know?</p>
              <p className="text-sm text-indigo-600">{question.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {selectedAnswer !== null && (
            <button
              onClick={handleNext}
              className="w-full py-4 text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
            >
              {currentQ + 1 >= 30 ? "Finish Quiz 🏁" : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
