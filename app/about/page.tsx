import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us | Eura Gaming",
  description: "Learn about Eura Gaming — India's premier cricket quiz platform.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">🏏</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Eura Gaming</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              India&apos;s premier cricket quiz platform, built for fans who live and breathe cricket.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Eura Gaming was founded with a single mission: to provide Indian cricket enthusiasts with
              an engaging, competitive platform to test their cricket knowledge through interactive quizzes
              and global leaderboards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe cricket is more than a sport — it is a passion, a culture, and a way of life for
              millions across India. Our platform celebrates that passion by creating a space where fans
              can challenge themselves, learn new facts, and compete with fellow enthusiasts worldwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { val: "30", label: "Questions per Quiz" },
              { val: "13-65", label: "Age Range Served" },
              { val: "Free", label: "Always Free to Play" },
              { val: "Global", label: "Leaderboard Reach" },
            ].map((stat) => (
              <div key={stat.label} className="bg-indigo-50 rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">{stat.val}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Target Audience */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Primary Audience</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">🏏 Cricket fans across India</li>
                  <li className="flex items-center gap-2">📱 Mobile and desktop users</li>
                  <li className="flex items-center gap-2">🎂 Ages 13 to 65 years</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Secondary Audience</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">🎓 Students and young fans</li>
                  <li className="flex items-center gap-2">💼 Working professionals</li>
                  <li className="flex items-center gap-2">🎮 Casual gamers and trivia lovers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform History */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform History</h2>
            <div className="space-y-4">
              {[
                { year: "2024", event: "Eura Gaming concept developed, targeting the Indian cricket fan community." },
                { year: "2025", event: "Platform launched with 30-question quiz format and global leaderboard system." },
                { year: "2026", event: "Expanded user base with improved quiz content and performance analytics." },
              ].map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold">
                    {item.year}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
            <p className="text-indigo-100 mb-6">
              Have questions, feedback, or partnership inquiries? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:support@euragaming.com"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                support@euragaming.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
