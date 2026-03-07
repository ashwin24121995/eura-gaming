import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏏</span>
              <span className="text-white font-bold text-lg">Eura Gaming</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              India&apos;s premier cricket quiz platform. Test your knowledge, compete globally,
              and celebrate the beautiful game of cricket.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 text-xs text-gray-400 mb-4">
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>
                  <strong className="text-gray-300">Eura Gaming Pvt. Ltd.</strong><br />
                  M3M Corner Walk, R-15, Ground Floor,<br />
                  Sector 74, Gurugram, Haryana &ndash; 122102, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+918588846667" className="hover:text-white transition-colors">
                  +91-8588846667
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:support@euragaming.com" className="hover:text-white transition-colors">
                  support@euragaming.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>🕐</span>
                <span>Mon–Sat, 10:00 AM – 6:00 PM IST</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/euracricketquiz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Eura Gaming on Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">Take a Quiz</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/advertising" className="hover:text-white transition-colors">Advertising Disclosure</Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility Policy</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-white transition-colors">Report an Issue</Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2 text-sm">Follow Us</h4>
              <a
                href="https://instagram.com/euracricketquiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @euracricketquiz
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500 space-y-1">
          <p>
            Cricket knowledge platform for entertainment purposes only. Not affiliated with any
            official cricket board or governing body.
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Eura Gaming Pvt. Ltd. All rights reserved. &nbsp;|&nbsp;
            <a href="tel:+918588846667" className="hover:text-gray-300 transition-colors">+91-8588846667</a>
            &nbsp;|&nbsp;
            <a href="mailto:support@euragaming.com" className="hover:text-gray-300 transition-colors">support@euragaming.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
