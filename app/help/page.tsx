"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const helpTopics = [
  {
    icon: "🚀",
    title: "Getting Started",
    description: "New to Eura Cricket Quiz? Learn the basics.",
    articles: [
      { title: "How to create an account", href: "/faq#register" },
      { title: "How to take your first quiz", href: "/quiz" },
      { title: "Understanding the scoring system", href: "/faq#scoring" },
      { title: "How the leaderboard works", href: "/leaderboard" },
    ],
  },
  {
    icon: "🏏",
    title: "Quiz & Gameplay",
    description: "Everything about the quiz experience.",
    articles: [
      { title: "How many questions are in a quiz?", href: "/faq" },
      { title: "Is there a time limit?", href: "/faq" },
      { title: "Can I retake a quiz?", href: "/faq" },
      { title: "How are scores calculated?", href: "/faq" },
    ],
  },
  {
    icon: "👤",
    title: "Account Management",
    description: "Manage your profile and account settings.",
    articles: [
      { title: "How to update your display name", href: "/dashboard" },
      { title: "How to change your password", href: "/dashboard" },
      { title: "How to view your quiz history", href: "/dashboard" },
      { title: "Forgot your password?", href: "/forgot-password" },
    ],
  },
  {
    icon: "🔒",
    title: "Privacy & Security",
    description: "Your data and account security.",
    articles: [
      { title: "Where is my data stored?", href: "/privacy" },
      { title: "How to delete your account data", href: "/privacy#rights" },
      { title: "Cookie and storage policy", href: "/cookies" },
      { title: "Our privacy policy", href: "/privacy" },
    ],
  },
];

const commonIssues = [
  {
    problem: "I can&apos;t log in to my account",
    solution:
      "Make sure you are using the same browser where you registered. Your account data is stored locally in your browser. If you cleared your browser data, your account may have been deleted. Try registering again.",
  },
  {
    problem: "My quiz score is not showing on the leaderboard",
    solution:
      "The leaderboard only shows players who have completed at least one quiz. Make sure you are logged in when you take the quiz. Refresh the leaderboard page after completing a quiz.",
  },
  {
    problem: "The CAPTCHA slider is not working",
    solution:
      "Try dragging the slider slowly and steadily all the way to the right. If it still does not work, try refreshing the page. Make sure JavaScript is enabled in your browser.",
  },
  {
    problem: "My quiz history is missing",
    solution:
      "Quiz history is stored in your browser&apos;s localStorage. If you cleared your browser data or are using a different browser or device, your history will not be available. Data is not synced across devices.",
  },
  {
    problem: "The website is not loading properly",
    solution:
      "Try clearing your browser cache and refreshing the page. Make sure you have a stable internet connection. Try using a different browser if the issue persists.",
  },
];

export default function HelpCenterPage() {
  const [openIssue, setOpenIssue] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🛟</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Help Center</h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Find answers to common questions and learn how to get the most out of Eura Cricket Quiz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: "📖", label: "FAQ", href: "/faq" },
              { icon: "📬", label: "Contact Us", href: "/contact" },
              { icon: "🚩", label: "Report Issue", href: "/report" },
              { icon: "📜", label: "Terms", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Help Topics */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Topic</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {helpTopics.map((topic) => (
              <div
                key={topic.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{topic.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{topic.title}</h3>
                    <p className="text-xs text-gray-500">{topic.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {topic.articles.map((article) => (
                    <li key={article.title}>
                      <Link
                        href={article.href}
                        className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-1"
                      >
                        <span className="text-gray-300">→</span> {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Common Issues */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Issues</h2>
          <div className="space-y-3 mb-10">
            {commonIssues.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIssue(openIssue === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4"
                    dangerouslySetInnerHTML={{ __html: item.problem }}
                  />
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold transition-transform ${
                      openIssue === idx ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openIssue === idx && (
                  <div className="px-5 pb-4">
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.solution }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still need help */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-bold mb-2">Still need help?</h3>
            <p className="text-indigo-100 mb-5">
              Our support team is available Monday to Saturday, 9AM–6PM IST.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/report"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Report an Issue
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
