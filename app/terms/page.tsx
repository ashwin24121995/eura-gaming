import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Eura Gaming",
  description: "Read the Terms of Service for Eura Gaming Pvt. Ltd. Cricket Quiz Platform.",
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
            <p className="text-gray-500 text-sm">Last Updated: March 5, 2026</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Legal Entity &amp; Agreement</h2>
              <p className="mb-3">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you
                and <strong>Eura Gaming Pvt. Ltd.</strong> (&quot;Eura Gaming&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
                a company incorporated in India, with its registered office at:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700 mb-3">
                M3M Corner Walk, R-15, Ground Floor,<br />
                Sector 74, Gurugram, Haryana – 122102, India
              </div>
              <p className="mb-3">
                These Terms govern your access to and use of the Eura Gaming Cricket Quiz Platform
                at <strong>www.euragaming.com</strong> (the &quot;Platform&quot;).
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-800">
                <strong>Acceptance:</strong> By registering an account on the Platform, clicking
                &quot;Register&quot;, or by continuing to access or use the Platform, you confirm that you
                have read, understood, and agree to be bound by these Terms and our{" "}
                <Link href="/privacy" className="underline">Privacy Policy</Link>. If you do not
                agree, you must not use the Platform.
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Eligibility</h2>
              <p className="mb-3">
                You must be at least 13 years of age to use this Platform. By using the Platform,
                you represent and warrant that you meet this age requirement. If you are under 18,
                you represent that you have obtained parental or guardian consent to use the Platform.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
              <p className="mb-3">
                To access certain features of the Platform, you must register for an account. When
                registering, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2 mb-3">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your login credentials</li>
                <li>Notify us immediately of any unauthorised use of your account</li>
                <li>Be responsible for all activity that occurs under your account</li>
              </ul>
              <p className="mb-3">
                <strong>One Account Per User:</strong> Each user is permitted to maintain only one
                account on the Platform. Creating multiple accounts for the purpose of gaining
                competitive advantage, manipulating leaderboard rankings, or circumventing
                restrictions is strictly prohibited and may result in the suspension of all
                associated accounts.
              </p>
              <p>
                Account data is stored locally in your browser&apos;s localStorage. We do not maintain
                server-side account records. Clearing your browser data will permanently delete
                your account from your device.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Quiz Rules &amp; Leaderboard Governance</h2>
              <p className="mb-3">
                The Platform provides a cricket knowledge quiz consisting of 30 multiple-choice
                questions per session. The following rules apply:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2 mb-3">
                <li><strong>Scoring:</strong> 1 point is awarded for each correct answer. Maximum score per quiz is 30 points.</li>
                <li><strong>Attempts:</strong> There is no limit on the number of quiz attempts.</li>
                <li><strong>Leaderboard:</strong> Rankings are based on the highest score achieved by each user.</li>
                <li><strong>Tie-Breaking:</strong> In the event of equal scores, the user who achieved the score earlier (by submission timestamp) will be ranked higher.</li>
                <li><strong>Time Zone:</strong> All timestamps and ranking calculations are based on <strong>Indian Standard Time (IST, UTC+5:30)</strong>.</li>
                <li><strong>Disconnection:</strong> Eura Gaming is not responsible for quiz sessions interrupted due to internet disconnection, browser crashes, or device failure. Incomplete sessions will not be scored.</li>
                <li><strong>Downtime:</strong> We do not guarantee uninterrupted availability of the Platform. Scores or rankings affected by Platform downtime will not be adjusted or disputed.</li>
              </ul>
              <p>
                Any attempt to manipulate scores, exploit technical vulnerabilities, or engage in
                any form of cheating will result in immediate account suspension.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Username &amp; Content Policy</h2>
              <p className="mb-3">
                Usernames chosen during registration are displayed publicly on the leaderboard.
                You agree that your username will not:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2 mb-3">
                <li>Be offensive, obscene, or discriminatory</li>
                <li>Impersonate any person, brand, or entity</li>
                <li>Contain personal information such as phone numbers or email addresses</li>
                <li>Violate any applicable law or regulation</li>
              </ul>
              <p>
                We reserve the right to remove or modify any username that violates this policy
                without prior notice.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Prohibited Conduct</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Use the Platform for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the Platform</li>
                <li>Use automated tools, bots, or scripts to interact with the Platform</li>
                <li>Create multiple accounts to manipulate leaderboard rankings</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Platform</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Engage in any conduct that disrupts or interferes with the Platform</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Account Suspension &amp; Termination</h2>
              <p className="mb-3">
                We reserve the right to suspend or terminate your access to the Platform, with or
                without notice, for any of the following reasons:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2 mb-3">
                <li>Violation of these Terms</li>
                <li>Creating multiple accounts</li>
                <li>Using offensive or impersonating usernames</li>
                <li>Attempting to manipulate scores or rankings</li>
                <li>Engaging in abusive, fraudulent, or illegal behaviour</li>
                <li>Any conduct that we reasonably believe harms the Platform or its users</li>
              </ul>
              <p>
                Since account data is stored locally in your browser, suspension means we may
                restrict your ability to access Platform features. You may contact us at{" "}
                <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                  support@euragaming.com
                </a>{" "}
                to appeal a suspension decision.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Intellectual Property</h2>
              <p className="mb-3">
                All content on the Platform — including but not limited to quiz questions, text,
                graphics, logos, and design — is the property of Eura Gaming Pvt. Ltd. and is
                protected by applicable intellectual property laws.
              </p>
              <p className="mb-3">
                You may not reproduce, distribute, modify, or create derivative works from any
                content on the Platform without our prior written consent.
              </p>
              <p>
                If you believe any content on the Platform infringes your intellectual property
                rights, please contact us at{" "}
                <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                  support@euragaming.com
                </a>{" "}
                with full details of the alleged infringement.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Disclaimers &amp; Limitation of Liability</h2>
              <p className="mb-3">
                The Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
                of any kind, either express or implied. We do not warrant that the Platform will
                be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
              <p className="mb-3">
                The cricket quiz content is provided for entertainment and educational purposes
                only. Eura Gaming is not affiliated with any official cricket board, governing
                body, or sports organisation.
              </p>
              <p>
                To the maximum extent permitted by applicable law, Eura Gaming Pvt. Ltd. shall
                not be liable for any indirect, incidental, special, consequential, or punitive
                damages arising out of or in connection with your use of the Platform.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Force Majeure</h2>
              <p>
                Eura Gaming shall not be liable for any failure or delay in performance of its
                obligations under these Terms resulting from causes beyond our reasonable control,
                including but not limited to: internet outages, server failures, power failures,
                acts of God, natural disasters, government actions, or any other event outside
                our reasonable control.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Dispute Resolution</h2>
              <p className="mb-3">
                In the event of any dispute arising out of or in connection with these Terms or
                the Platform, the parties shall first attempt to resolve the dispute amicably
                through direct communication. Please contact us at{" "}
                <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                  support@euragaming.com
                </a>{" "}
                with a detailed description of your concern.
              </p>
              <p>
                If the dispute cannot be resolved amicably within 30 days, it shall be referred
                to arbitration in accordance with the Arbitration and Conciliation Act, 1996
                (India). The seat of arbitration shall be <strong>Gurugram, Haryana, India</strong>.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                India. Subject to the arbitration clause above, any disputes that are not resolved
                through arbitration shall be subject to the exclusive jurisdiction of the courts
                located in <strong>Gurugram, Haryana, India</strong>.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Modifications to These Terms</h2>
              <p>
                We reserve the right to update or modify these Terms at any time. Changes will be
                indicated by updating the &quot;Last Updated&quot; date at the top of this page. We
                encourage you to review these Terms periodically. Continued use of the Platform
                after any changes constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable
                by a court of competent jurisdiction, that provision shall be modified to the
                minimum extent necessary to make it enforceable, or if modification is not
                possible, it shall be severed from these Terms. The remaining provisions shall
                continue in full force and effect.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">15. Entire Agreement</h2>
              <p>
                These Terms, together with our{" "}
                <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>{" "}
                and{" "}
                <Link href="/cookies" className="text-indigo-600 hover:underline">Cookie Policy</Link>,
                constitute the entire agreement between you and Eura Gaming Pvt. Ltd. with respect
                to the Platform and supersede all prior representations, agreements, negotiations,
                or understandings, whether written or oral, relating to the subject matter hereof.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">16. Contact Us</h2>
              <p className="mb-3">
                For any questions, concerns, or legal notices regarding these Terms, please
                contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm space-y-1">
                <p><strong>Eura Gaming Pvt. Ltd.</strong></p>
                <p>M3M Corner Walk, R-15, Ground Floor,</p>
                <p>Sector 74, Gurugram, Haryana – 122102, India</p>
                <p>
                  Email:{" "}
                  <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                    support@euragaming.com
                  </a>
                </p>
              </div>
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
