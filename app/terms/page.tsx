import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Eura Gaming",
  description: "Read the Terms of Service for Eura Gaming Cricket Quiz Platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm text-indigo-600 font-medium mb-1">Legal</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-500 text-sm">Last updated: February 27, 2026</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Eura Gaming Cricket Quiz Platform (&quot;the Platform&quot;,
                &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Platform.
                These Terms apply to all visitors, users, and others who access or use the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
              <p className="mb-3">
                Eura Gaming is a free-to-play interactive cricket quiz platform designed for cricket
                enthusiasts. The Platform provides:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>30-question multiple-choice cricket quizzes</li>
                <li>A global leaderboard system based on quiz performance</li>
                <li>User accounts to track quiz history and statistics</li>
                <li>Educational cricket content and trivia</li>
              </ul>
              <p className="mt-3">
                The Platform is intended for entertainment and educational purposes only. It is not
                associated with any official cricket board, tournament, or governing body.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
              <p className="mb-3">
                To access certain features, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorised use of your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Be at least 13 years of age to create an account</li>
              </ul>
              <p className="mt-3">
                We reserve the right to terminate accounts that violate these Terms or engage in
                fraudulent, abusive, or inappropriate behaviour.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Acceptable Use</h2>
              <p className="mb-3">You agree not to use the Platform to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Cheat, manipulate, or exploit the quiz or leaderboard system</li>
                <li>Use automated bots, scripts, or tools to interact with the Platform</li>
                <li>Attempt to gain unauthorised access to any part of the Platform</li>
                <li>Upload or transmit any malicious code or harmful content</li>
                <li>Harass, threaten, or harm other users</li>
                <li>Violate any applicable local, national, or international law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
              <p>
                All content on the Platform, including but not limited to quiz questions, text,
                graphics, logos, and software, is the property of Eura Gaming or its content
                suppliers and is protected by applicable intellectual property laws. You may not
                reproduce, distribute, or create derivative works from any content without our
                express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Disclaimers</h2>
              <p className="mb-3">
                The Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any
                warranties of any kind, either express or implied. We do not warrant that:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>The Platform will be uninterrupted or error-free</li>
                <li>Quiz content is 100% accurate or up-to-date at all times</li>
                <li>Any defects will be corrected immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Eura Gaming shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your
                use of or inability to use the Platform, even if we have been advised of the
                possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of
                significant changes by updating the &quot;Last updated&quot; date at the top of this page.
                Your continued use of the Platform after any changes constitutes your acceptance of
                the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India.
                Any disputes arising under these Terms shall be subject to the exclusive jurisdiction
                of the courts located in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@euragaming.com" className="text-indigo-600 hover:underline">
                  legal@euragaming.com
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
            <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>
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
