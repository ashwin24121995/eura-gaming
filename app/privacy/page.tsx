import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Eura Gaming",
  description: "Read the Privacy Policy for Eura Gaming Cricket Quiz Platform.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm text-indigo-600 font-medium mb-1">Legal</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">Last updated: February 27, 2026</p>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6 text-sm text-indigo-700">
            <strong>Summary:</strong> Eura Gaming stores all user data locally in your browser
            (localStorage). We do not operate any external servers, collect personal data on our
            servers, or share your information with third parties.
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                Eura Gaming (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we handle information when you use the Eura Gaming
                Cricket Quiz Platform (&quot;the Platform&quot;). Please read this policy carefully to
                understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-3">
                When you register and use the Platform, the following information is collected and
                stored <strong>locally in your browser</strong> using localStorage:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Your display name</li>
                <li>Your email address</li>
                <li>Your encrypted password</li>
                <li>Quiz history and scores</li>
                <li>Account creation date</li>
              </ul>
              <p className="mt-3">
                <strong>This data never leaves your device.</strong> We do not transmit, store, or
                process your personal information on any external server.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">The information stored locally is used solely to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Authenticate you when you log in</li>
                <li>Display your quiz history and performance statistics</li>
                <li>Show your ranking on the local leaderboard</li>
                <li>Personalise your experience on the Platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Storage and Security</h2>
              <p className="mb-3">
                All user data is stored in your browser&apos;s localStorage. This means:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Data is stored only on your device and browser</li>
                <li>Clearing your browser data will permanently delete your account</li>
                <li>Data is not synced across devices or browsers</li>
                <li>We cannot recover lost data as we have no server-side storage</li>
              </ul>
              <p className="mt-3">
                We recommend using a strong, unique password for your account. While we store
                passwords in localStorage, you should treat your account credentials with care.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
              <p>
                The Platform uses browser sessionStorage to maintain your login session during a
                browser session. This session data is automatically cleared when you close your
                browser. We also use localStorage for persistent data storage. For full details,
                please read our{" "}
                <Link href="/cookies" className="text-indigo-600 hover:underline">
                  Cookie Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Services</h2>
              <p>
                The Platform does not integrate with any third-party analytics, advertising, or
                tracking services. We do not share your information with any third parties. The
                Platform is hosted on Vercel, whose infrastructure may collect standard server
                access logs (IP address, browser type, pages visited) as part of normal web
                hosting operations. Please refer to{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Vercel&apos;s Privacy Policy
                </a>{" "}
                for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Children&apos;s Privacy</h2>
              <p>
                The Platform is accessible to users aged 13 and above. We do not knowingly collect
                personal information from children under 13. If you are a parent or guardian and
                believe your child under 13 has created an account, please contact us so we can
                provide guidance on removing the locally stored data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
              <p className="mb-3">You have full control over your data. You can:</p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Update your profile information from the Dashboard Settings tab</li>
                <li>Delete all your data by clearing your browser&apos;s localStorage</li>
                <li>Log out at any time to clear your session</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify users of
                significant changes by updating the &quot;Last updated&quot; date at the top of this page.
                Your continued use of the Platform after any changes constitutes your acceptance
                of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us
                at{" "}
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
            <Link href="/cookies" className="text-indigo-600 hover:underline">Cookie Policy</Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-indigo-600 hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
