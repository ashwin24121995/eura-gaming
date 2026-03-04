"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const issueTypes = [
  { value: "bug", label: "🐛 Bug / Technical Issue" },
  { value: "quiz", label: "❓ Incorrect Quiz Question" },
  { value: "account", label: "👤 Account Problem" },
  { value: "leaderboard", label: "🏆 Leaderboard Issue" },
  { value: "content", label: "📝 Inappropriate Content" },
  { value: "performance", label: "⚡ Performance / Loading Issue" },
  { value: "other", label: "📌 Other" },
];

export default function ReportIssuePage() {
  const [form, setForm] = useState({
    issueType: "",
    title: "",
    description: "",
    email: "",
    browser: "",
    steps: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.issueType) newErrors.issueType = "Please select an issue type.";
    if (!form.title.trim()) newErrors.title = "Please provide a brief title.";
    if (!form.description.trim() || form.description.length < 20)
      newErrors.description = "Please describe the issue in at least 20 characters.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="text-4xl mb-3">🚩</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Report an Issue</h1>
            <p className="text-gray-600">
              Found a bug or problem? Let us know and we&apos;ll fix it as soon as possible.
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-4 text-sm text-indigo-700">
            <strong>Before reporting:</strong> Check our{" "}
            <Link href="/faq" className="underline hover:text-indigo-900">
              FAQ
            </Link>{" "}
            and{" "}
            <Link href="/help" className="underline hover:text-indigo-900">
              Help Center
            </Link>{" "}
            — your issue may already be answered there.
          </div>

          {/* Review Process */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
            <h2 className="text-base font-bold text-gray-900 mb-3">What Happens After You Report?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  step: "1",
                  icon: "📥",
                  title: "Report Received",
                  desc: "Your report is logged and assigned to our moderation team within 24 hours.",
                },
                {
                  step: "2",
                  icon: "🔍",
                  title: "Review & Investigation",
                  desc: "We investigate the issue. Bug reports are resolved within 3–5 business days. Content/account reports within 2 business days.",
                },
                {
                  step: "3",
                  icon: "✅",
                  title: "Action & Follow-up",
                  desc: "Action is taken (fix deployed, content removed, or account moderated). If you provided your email, we will notify you of the outcome.",
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <strong>Appeals:</strong> If you disagree with a moderation outcome, you may appeal by emailing{" "}
              <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                support@euragaming.com
              </a>{" "}
              with subject line <em>&quot;Appeal: [Your Report Reference]&quot;</em>. Appeals are reviewed within 5 business days and our final decision is binding.
            </div>
          </div>

          {!submitted ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Issue Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issue Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.issueType}
                    onChange={(e) => setForm({ ...form, issueType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  >
                    <option value="">Select issue type...</option>
                    {issueTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  {errors.issueType && (
                    <p className="text-red-500 text-xs mt-1">{errors.issueType}</p>
                  )}
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brief Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Quiz timer not working correctly"
                    maxLength={100}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Describe the Issue <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Please describe what happened, what you expected to happen, and any error messages you saw..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Steps to Reproduce */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Steps to Reproduce{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={form.steps}
                    onChange={(e) => setForm({ ...form, steps: e.target.value })}
                    placeholder="1. Go to quiz page&#10;2. Click start&#10;3. ..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-none"
                  />
                </div>

                {/* Browser */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Browser / Device{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.browser}
                    onChange={(e) => setForm({ ...form, browser: e.target.value })}
                    placeholder="e.g. Chrome 120 on Windows 11 / Safari on iPhone 14"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email{" "}
                    <span className="text-gray-400 font-normal">(optional — for follow-up)</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-60 transition-all"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  {loading ? "Submitting..." : "Submit Report →"}
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Report Submitted!</h2>
              <p className="text-gray-600 mb-2">
                Thank you for helping us improve Eura Cricket Quiz.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Our team will review your report and take action. If you provided your email,
                we&apos;ll follow up with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ issueType: "", title: "", description: "", email: "", browser: "", steps: "" });
                  }}
                  className="px-6 py-3 text-indigo-600 font-semibold border-2 border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors"
                >
                  Submit Another Report
                </button>
                <Link
                  href="/"
                  className="px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          )}

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
