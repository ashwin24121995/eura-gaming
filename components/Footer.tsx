import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏏</span>
              <span className="text-white font-bold text-lg">Eura Gaming</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              India&apos;s premier cricket quiz platform. Test your knowledge, compete globally,
              and celebrate the beautiful game of cricket.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-2">
              <strong className="text-gray-400">Eura Gaming Pvt. Ltd.</strong><br />
              M3M Corner Walk, R-15, Ground Floor,<br />
              Sector 74, Gurugram, Haryana &ndash; 122102, India
            </p>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Eura Gaming Pvt. Ltd. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">
                  Take a Quiz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-white transition-colors">
                  Report an Issue
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@euragaming.com"
                  className="hover:text-white transition-colors"
                >
                  support@euragaming.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500 space-y-1">
          <p>
            Cricket knowledge platform for entertainment purposes only. Not affiliated with any
            official cricket board or governing body.
          </p>
          <p>
            <a href="mailto:support@euragaming.com" className="hover:text-gray-300 transition-colors">
              support@euragaming.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
