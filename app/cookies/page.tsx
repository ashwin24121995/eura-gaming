import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Eura Gaming",
  description: "Read the Cookie Policy for Eura Gaming Cricket Quiz Platform.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm text-indigo-600 font-medium mb-1">Legal</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
            <p className="text-gray-500 text-sm">Last updated: February 27, 2026</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a
                website. They are widely used to make websites work more efficiently and to provide
                information to website owners. This policy explains how Eura Gaming uses browser
                storage technologies on our Platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Browser Storage</h2>
              <p className="mb-4">
                Eura Gaming does not use traditional HTTP cookies. Instead, we use two browser
                storage mechanisms:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">localStorage</h3>
                  <p className="text-sm mb-3">
                    Persistent storage that remains until explicitly cleared by you.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-200">
                        <th className="pb-2 font-medium">Key</th>
                        <th className="pb-2 font-medium">Purpose</th>
                        <th className="pb-2 font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-2 font-mono text-xs text-indigo-600">eura_users</td>
                        <td className="py-2">Stores registered user accounts and quiz data</td>
                        <td className="py-2">Until browser data is cleared</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">sessionStorage</h3>
                  <p className="text-sm mb-3">
                    Temporary storage that is cleared when you close your browser tab.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-200">
                        <th className="pb-2 font-medium">Key</th>
                        <th className="pb-2 font-medium">Purpose</th>
                        <th className="pb-2 font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-2 font-mono text-xs text-indigo-600">eura_session</td>
                        <td className="py-2">Maintains your login session</td>
                        <td className="py-2">Until browser tab is closed</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono text-xs text-indigo-600">captcha_verified</td>
                        <td className="py-2">Records that CAPTCHA was completed</td>
                        <td className="py-2">Until browser tab is closed</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono text-xs text-indigo-600">welcome_shown</td>
                        <td className="py-2">Prevents welcome modal from showing repeatedly</td>
                        <td className="py-2">Until browser tab is closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Essential Storage Only</h2>
              <p>
                All browser storage used by Eura Gaming is <strong>strictly essential</strong> for
                the Platform to function. We do not use any tracking, analytics, advertising, or
                third-party cookies. You cannot opt out of essential storage without affecting the
                functionality of the Platform (e.g., you would not be able to stay logged in).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Cookies</h2>
              <p>
                Eura Gaming does not use any third-party cookies or tracking technologies. The
                Platform is hosted on Vercel, which may set its own technical cookies as part of
                its infrastructure. Please refer to{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Vercel&apos;s Privacy Policy
                </a>{" "}
                for information about any cookies set by their hosting infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. How to Manage Storage</h2>
              <p className="mb-3">
                You can clear all browser storage data at any time. Note that doing so will
                permanently delete your account and quiz history. To clear storage:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Clear browsing data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Clear Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify users of
                significant changes by updating the &quot;Last updated&quot; date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about our use of browser storage, please contact us at{" "}
                <a href="mailto:privacy@euragaming.com" className="text-indigo-600 hover:underline">
                  privacy@euragaming.com
                </a>{" "}
                or visit our{" "}
                <Link href="/contact" className="text-indigo-600 hover:underline">
                  Contact page
                </Link>.
              </p>
            </section>
          </div>

          {/* Related Links */}
          <div className="flex gap-4 mt-6 text-sm">
            <Link href="/terms" className="text-indigo-600 hover:underline">Terms of Service</Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-indigo-600 hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
