"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "Is Eura Cricket Quiz free to play?",
        a: "Yes! Eura Cricket Quiz is completely free to play. You can register, take quizzes, and compete on the leaderboard at no cost. We may introduce optional premium features in the future, but the core quiz experience will always remain free.",
      },
      {
        q: "How do I create an account?",
        a: "Click the 'Register' button on the homepage or navigation bar. Fill in your name, email address, and password. Your account is created instantly and you can start playing right away.",
      },
      {
        q: "Can I play without creating an account?",
        a: "You need an account to take quizzes and appear on the leaderboard. This ensures fair competition and lets you track your progress over time.",
      },
    ],
  },
  {
    category: "Quiz Rules",
    items: [
      {
        q: "How many questions are in each quiz?",
        a: "Each quiz contains exactly 30 carefully curated cricket questions covering history, player statistics, tournament information, rules, and memorable moments.",
      },
      {
        q: "How is scoring calculated?",
        a: "You earn 1 point for each correct answer. With 30 questions per quiz, the maximum score is 30 points. Your total points across all quizzes are accumulated on the leaderboard.",
      },
      {
        q: "Is there a time limit for the quiz?",
        a: "Yes, you have 15 minutes to complete all 30 questions. The timer is visible throughout the quiz. If time runs out, the quiz ends automatically with your current score.",
      },
      {
        q: "Can I retake the quiz?",
        a: "Absolutely! You can take the quiz as many times as you like. Each attempt is recorded in your quiz history, and your total points accumulate with every quiz you complete.",
      },
    ],
  },
  {
    category: "Leaderboard",
    items: [
      {
        q: "How does the leaderboard work?",
        a: "The global leaderboard ranks all players based on their total points earned across all quiz attempts. You can also sort by best single-quiz score or average score.",
      },
      {
        q: "How often is the leaderboard updated?",
        a: "The leaderboard updates in real-time after every quiz completion. Your ranking changes immediately after you finish a quiz.",
      },
      {
        q: "Can I see where I rank globally?",
        a: "Yes! When you visit the leaderboard while logged in, your entry is highlighted so you can easily see your current global rank.",
      },
    ],
  },
  {
    category: "Account & Technical",
    items: [
      {
        q: "I forgot my password. What should I do?",
        a: "Click 'Forgot Password?' on the login page, enter your registered email address, and follow the instructions. In this demo version, password reset is simulated.",
      },
      {
        q: "Can I change my display name?",
        a: "Yes! Go to your Dashboard, click the 'Settings' tab, update your display name, and click 'Save Changes'.",
      },
      {
        q: "Why do I see a CAPTCHA slider when I first visit?",
        a: "The drag-to-verify CAPTCHA slider is a security measure to prevent automated bots from accessing the platform. It appears once per browser session and takes just a second to complete.",
      },
    ],
  },
  {
    category: "Rules, Moderation & Enforcement",
    items: [
      {
        q: "Can my account be suspended or terminated?",
        a: "Yes. Under our Terms of Service, Eura Gaming Pvt. Ltd. reserves the right to suspend or terminate accounts for violations including: creating multiple accounts, using offensive or impersonating usernames, attempting to manipulate scores or rankings, engaging in abusive or fraudulent behaviour, or any conduct that harms the platform or its users. Suspensions may occur with or without prior notice.",
      },
      {
        q: "Can I appeal a suspension or moderation decision?",
        a: "Yes. If you believe your account was suspended in error, you may contact us at support@euragaming.com with your registered email address and a detailed explanation. We will review your appeal and respond within 5 business days. Our decision following a review is final.",
      },
      {
        q: "What happens if I create multiple accounts?",
        a: "Creating multiple accounts to gain competitive advantage or manipulate leaderboard rankings is strictly prohibited under our Terms of Service. All associated accounts may be suspended immediately.",
      },
      {
        q: "Are there rules about usernames?",
        a: "Yes. Usernames are displayed publicly on the leaderboard. Usernames must not be offensive, obscene, discriminatory, impersonate any person or brand, or contain personal information. We reserve the right to remove or modify any username that violates this policy without prior notice.",
      },
      {
        q: "Where can I read the full Terms of Service?",
        a: "Our complete Terms of Service, including all enforcement rights, moderation policies, and legal terms, are available at www.euragaming.com/terms.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">❓</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-lg">
              Everything you need to know about Eura Cricket Quiz.
            </p>
          </div>

          {/* FAQ Sections */}
          {faqs.map((section) => (
            <div key={section.category} className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-indigo-600 rounded-full inline-block" />
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.items.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold transition-transform ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4">
                          <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-indigo-50 rounded-2xl p-8 text-center mt-8">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-5">
              Can&apos;t find the answer you&apos;re looking for? Our support team is happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
            >
              Contact Support →
            </Link>
          </div>

          {/* Registered Office */}
          <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Registered Office</h3>
            <div className="text-sm text-gray-600 space-y-0.5">
              <p><strong>Eura Gaming Pvt. Ltd.</strong></p>
              <p>M3M Corner Walk, R-15, Ground Floor,</p>
              <p>Sector 74, Gurugram, Haryana &ndash; 122102, India</p>
              <p>
                Email:{" "}
                <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                  support@euragaming.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
