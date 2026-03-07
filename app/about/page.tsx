import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us | Eura Gaming",
  description: "Learn about Eura Gaming — India's premier cricket quiz platform.",
};

const testimonials = [
  {
    name: "Arjun Mehta",
    city: "Mumbai, Maharashtra",
    rating: 5,
    initials: "AM",
    color: "bg-indigo-600",
    text:
      "Yaar, kya platform hai! Maine pehle din hi 28/30 score kiya aur leaderboard mein top 10 mein aa gaya. Cricket ke baare mein itna kuch seekhne ko mila. Sachin ke records se lekar Dhoni ki captaincy tak — sab kuch cover hota hai. Bilkul free hai aur koi ads nahi. Highly recommend!",
    tone: "positive",
  },
  {
    name: "Priya Sharma",
    city: "Delhi",
    rating: 5,
    initials: "PS",
    color: "bg-purple-600",
    text:
      "I was a bit skeptical at first — itne saare quiz apps hote hain jo sirf time waste karte hain. But Eura Gaming is genuinely different. The questions are well-researched, not just basic stuff. I got 22/30 on my first attempt and I'm already addicted to improving my score. My whole family now plays this on weekends!",
    tone: "positive",
  },
  {
    name: "Vikram Nair",
    city: "Bengaluru, Karnataka",
    rating: 5,
    initials: "VN",
    color: "bg-green-600",
    text:
      "As a software engineer, I appreciate how clean and fast the website is. No unnecessary clutter, no pop-ups, no fake rewards. Just pure cricket knowledge testing. The leaderboard is a great motivator — seeing your name climb up gives a real sense of achievement. Rahul sir and the team have built something genuinely useful for cricket fans.",
    tone: "positive",
  },
  {
    name: "Sunita Yadav",
    city: "Lucknow, Uttar Pradesh",
    rating: 4,
    initials: "SY",
    color: "bg-orange-500",
    text:
      "Platform theek hai, questions achhe hain. Mujhe kuch aur categories chahiye thi jaise women's cricket aur IPL ke alag questions. Abhi sab mix mein hain. Lekin overall experience acha tha, 24/30 aaya mera score. Agar aur questions add ho toh aur bhi better hoga. Dekhte hain aage kya update aata hai.",
    tone: "neutral",
  },
  {
    name: "Rohan Gupta",
    city: "Kolkata, West Bengal",
    rating: 4,
    initials: "RG",
    color: "bg-blue-500",
    text:
      "The quiz is good and the questions are fair. I would have liked a timer that shows per-question time rather than just a total countdown. Also, it would be nice to see the correct answers explained after the quiz ends — not just which ones I got wrong. These are small things but would make the experience more complete. Still, a solid platform overall.",
    tone: "neutral",
  },
];

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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-3">
              India&apos;s premier cricket quiz platform, built for fans who live and breathe cricket.
            </p>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 text-sm text-indigo-700 font-medium">
              <span>🇮🇳</span>
              <span>India-based &mdash; Headquartered in Gurugram, Haryana</span>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Eura Gaming Pvt. Ltd.</strong> is an India-based company founded with a single
              mission: to provide Indian cricket enthusiasts with an engaging, competitive platform to
              test their cricket knowledge through interactive quizzes and global leaderboards. We are
              headquartered in <strong>Gurugram, Haryana, India</strong>.
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
              { val: "13–65", label: "Age Range Served" },
              { val: "Free", label: "Always Free to Play" },
              { val: "Global", label: "Leaderboard Reach" },
            ].map((stat) => (
              <div key={stat.label} className="bg-indigo-50 rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">{stat.val}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CEO Message */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-white border-2 border-white/30">
                  RS
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Rahul Singh</p>
                  <p className="text-indigo-200 text-sm">Founder &amp; CEO, Eura Gaming Pvt. Ltd.</p>
                </div>
              </div>
              <svg className="w-8 h-8 text-indigo-300 mb-3 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-indigo-100 leading-relaxed text-base italic mb-4">
                &ldquo;Cricket is not just a sport in India — it is an emotion that unites 1.4 billion people.
                When I started Eura Gaming, my vision was simple: to give every cricket fan in India a platform
                where their passion and knowledge could be celebrated and rewarded. We built this for the student
                in Lucknow who knows every Test record by heart, for the professional in Bengaluru who watches
                every match, and for the grandfather in Chennai who remembers the 1983 World Cup like it was
                yesterday. Cricket belongs to all of us. Eura Gaming is our tribute to that shared love.&rdquo;
              </p>
              <p className="text-indigo-300 text-sm font-medium">
                — Rahul Singh, Founder &amp; CEO
              </p>
            </div>
          </div>

          {/* Who We Serve */}
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

          {/* Testimonials */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What Our Players Say</h2>
            <p className="text-gray-500 text-sm mb-6">Real feedback from cricket fans across India</p>
            <div className="grid md:grid-cols-1 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < t.rating ? "text-yellow-400" : "text-gray-200"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  {t.tone === "neutral" && (
                    <span className="self-start text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      Verified Player
                    </span>
                  )}
                  {t.tone === "positive" && (
                    <span className="self-start text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                      ✓ Verified Player
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Eura Gaming is operated by <strong>Eura Gaming Pvt. Ltd.</strong>, a company incorporated
              in India. We are headquartered in Gurugram, Haryana, and are proudly India-based, building
              for India&apos;s massive cricket-loving community.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 space-y-1">
              <p><strong>Eura Gaming Pvt. Ltd.</strong></p>
              <p>M3M Corner Walk, R-15, Ground Floor,</p>
              <p>Sector 74, Gurugram, Haryana – 122102, India</p>
              <p>
                Phone:{" "}
                <a href="tel:+918588846667" className="text-indigo-600 hover:underline">
                  +91-8588846667
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                  support@euragaming.com
                </a>
              </p>
              <p>Support Hours: Monday–Saturday, 10:00 AM – 6:00 PM IST</p>
            </div>
          </div>

          {/* CTA */}
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
