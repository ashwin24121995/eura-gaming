"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


type AppState = "captcha" | "welcome" | "home";

// ─── CAPTCHA Component ───────────────────────────────────────────────────────
function CaptchaScreen({ onVerified }: { onVerified: () => void }) {
  const [sliderPos, setSliderPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [failed, setFailed] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const TRACK_WIDTH = 300;
  const THUMB_SIZE = 40;
  const MAX_POS = TRACK_WIDTH - THUMB_SIZE - 8;
  const SUCCESS_THRESHOLD = MAX_POS * 0.85;

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setFailed(false);
    startXRef.current = e.clientX - sliderPos;
  }, [sliderPos]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setFailed(false);
    startXRef.current = e.touches[0].clientX - sliderPos;
  }, [sliderPos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newPos = Math.max(0, Math.min(MAX_POS, e.clientX - startXRef.current));
      setSliderPos(newPos);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const newPos = Math.max(0, Math.min(MAX_POS, e.touches[0].clientX - startXRef.current));
      setSliderPos(newPos);
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      if (sliderPos >= SUCCESS_THRESHOLD) {
        setIsVerified(true);
        setSliderPos(MAX_POS);
        setTimeout(onVerified, 800);
      } else {
        setFailed(true);
        setSliderPos(0);
        setTimeout(() => setFailed(false), 1500);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, sliderPos, MAX_POS, SUCCESS_THRESHOLD, onVerified]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center">
        <div className="text-5xl mb-4">🏏</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Eura Cricket Quiz</h1>
        <p className="text-gray-500 text-sm mb-6">Security Verification</p>

        <div className="bg-gray-50 rounded-xl p-5 mb-4">
          <p className="text-gray-700 font-medium mb-4 text-sm">
            {isVerified
              ? "✅ Verified! Welcome to Eura Cricket Quiz"
              : failed
              ? "❌ Please try again — drag all the way to the right"
              : "Drag the slider to the right to verify you are human"}
          </p>

          {/* Slider Track */}
          <div
            ref={trackRef}
            className={`relative h-12 rounded-full overflow-hidden cursor-pointer select-none ${
              isVerified ? "bg-green-100" : failed ? "bg-red-100" : "bg-gray-200"
            }`}
            style={{ width: `${TRACK_WIDTH}px`, margin: "0 auto" }}
          >
            {/* Fill */}
            <div
              className={`absolute left-0 top-0 h-full rounded-full transition-colors ${
                isVerified ? "bg-green-400" : failed ? "bg-red-300" : "bg-indigo-500"
              }`}
              style={{ width: `${sliderPos + THUMB_SIZE / 2}px` }}
            />

            {/* Thumb */}
            <div
              className={`absolute top-1 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-grab active:cursor-grabbing z-10 transition-colors ${
                isVerified ? "bg-green-500" : ""
              }`}
              style={{ left: `${sliderPos + 4}px` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {isVerified ? (
                <span className="text-white font-bold text-lg">✓</span>
              ) : (
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>

            {/* Label */}
            {!isVerified && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-gray-400 text-xs font-medium pl-14">
                  Slide to verify →
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-400">
          This verification helps protect our community from bots.
        </p>
      </div>
    </div>
  );
}

// ─── Welcome Modal ────────────────────────────────────────────────────────────
function WelcomeModal({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-[fadeIn_0.4s_ease]">
        <div className="text-6xl mb-4">🏏</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Eura Cricket Quiz
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Test your cricket knowledge, compete with players worldwide, and grow your
          understanding of the beautiful game.
        </p>
        <button
          onClick={onEnter}
          className="w-full py-3 px-6 text-white font-semibold rounded-xl text-lg transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-95"
          style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
        >
          Enter The Website →
        </button>
        <p className="text-xs text-gray-400 mt-4">
          Free to play · No hidden costs · Pure cricket knowledge
        </p>
      </div>
    </div>
  );
}

// ─── Homepage Content ─────────────────────────────────────────────────────────
function HomepageContent() {
  const features = [
    {
      icon: "🎯",
      title: "Cricket Knowledge Quiz",
      desc: "Test yourself with 30 carefully curated cricket questions covering history, records, and more.",
    },
    {
      icon: "🏆",
      title: "Compete on Leaderboards",
      desc: "Score points for every correct answer and climb the global rankings to prove your expertise.",
    },
    {
      icon: "👥",
      title: "Community of Cricket Fans",
      desc: "Join thousands of cricket enthusiasts from across India and around the world.",
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      desc: "Learn fascinating cricket facts with detailed explanations after every answer.",
    },
  ];

  const steps = [
    { num: "1", title: "Register", desc: "Create your free account in seconds" },
    { num: "2", title: "Play Quiz", desc: "Answer 30 cricket questions" },
    { num: "3", title: "Score Points", desc: "1 point for each correct answer" },
    { num: "4", title: "Climb Leaderboard", desc: "Rank globally among cricket fans" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏏 India&apos;s Cricket Quiz Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Test Your Cricket{" "}
            <span className="text-yellow-500">Knowledge</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Challenge yourself with 30 cricket questions, compete on global leaderboards,
            and prove you are India&apos;s ultimate cricket expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl text-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
            >
              Get Started Now →
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-indigo-600 font-semibold rounded-xl text-lg border-2 border-indigo-200 hover:bg-indigo-50 transition-all"
            >
              Already a Member? Login
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            {[
              { val: "30", label: "Questions per Quiz" },
              { val: "1pt", label: "Per Correct Answer" },
              { val: "∞", label: "Quiz Attempts" },
              { val: "Live", label: "Global Rankings" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-indigo-600">{stat.val}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Eura */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eura Cricket Quiz?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to test, improve, and showcase your cricket knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Get started in four simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30 Questions Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  30 Carefully Curated Cricket Questions
                </h2>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Each quiz covers a wide range of cricket topics to truly test your knowledge.
                </p>
                <ul className="space-y-2 text-indigo-100">
                  {[
                    "Cricket history and iconic records",
                    "Player statistics and achievements",
                    "Tournament and World Cup information",
                    "Rules, regulations, and terminology",
                    "Memorable cricket moments",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-8xl font-black text-white/20 mb-2">30</div>
                <div className="text-2xl font-bold mb-4">Questions per Quiz</div>
                <Link
                  href="/register"
                  className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
                >
                  Take Your First Quiz →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Progress + Leaderboard */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Track Progress */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Track Your Progress</h3>
            <p className="text-gray-600 mb-6">
              Monitor your improvement over time with detailed analytics and quiz history.
            </p>
            <ul className="space-y-3">
              {["Quiz History", "Score Tracking", "Performance Analytics"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Leaderboard */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Leaderboards</h3>
            <p className="text-gray-600 mb-6">
              Compete with cricket fans worldwide and see where you stand on the global stage.
            </p>
            <ul className="space-y-3">
              {["Real-time Rankings", "Player Statistics", "Achievement Badges"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-6 h-6 bg-yellow-200 text-yellow-700 rounded-full flex items-center justify-center text-xs font-bold">★</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/leaderboard"
              className="inline-block mt-6 px-6 py-2.5 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition-colors"
            >
              Join the Competition →
            </Link>
          </div>
        </div>
      </section>

      {/* Compete & Climb */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compete &amp; Climb</h2>
          <p className="text-gray-600 text-lg mb-8">
            Every correct answer counts. Build your score and rise through the rankings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "🎯", text: "1 point per correct answer" },
              { icon: "🔄", text: "Unlimited quiz attempts" },
              { icon: "📈", text: "Real-time ranking updates" },
              { icon: "🤝", text: "Challenge friends and rivals" },
            ].map((item) => (
              <div key={item.text} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl text-lg transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
          >
            Join the Competition →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Test Your Cricket Knowledge?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Join thousands of cricket fans and start your quiz journey today. No registration fees,
            no hidden costs, just pure cricket knowledge testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Get Started Now →
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Already a Member?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [appState, setAppState] = useState<AppState>("captcha");

  useEffect(() => {
    // Check if already verified this session
    const verified = sessionStorage.getItem("captcha_verified");
    if (verified === "true") {
      const welcomed = sessionStorage.getItem("welcome_shown");
      setAppState(welcomed === "true" ? "home" : "welcome");
    }
  }, []);

  const handleCaptchaVerified = () => {
    sessionStorage.setItem("captcha_verified", "true");
    setAppState("welcome");
  };

  const handleEnterWebsite = () => {
    sessionStorage.setItem("welcome_shown", "true");
    setAppState("home");
  };

  return (
    <>
      {appState === "captcha" && <CaptchaScreen onVerified={handleCaptchaVerified} />}
      {appState === "welcome" && <WelcomeModal onEnter={handleEnterWebsite} />}
      {appState === "home" && <HomepageContent />}
    </>
  );
}
