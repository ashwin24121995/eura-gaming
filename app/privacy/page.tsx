import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Eura Gaming",
  description: "Read the Privacy Policy for Eura Gaming Pvt. Ltd. Cricket Quiz Platform.",
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
            <p className="text-gray-500 text-sm">Last Updated: March 5, 2026</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
              <p className="mb-3">
                <strong>Eura Gaming Pvt. Ltd.</strong> (&quot;Eura Gaming&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is the
                legal entity responsible for operating the Eura Gaming Cricket Quiz Platform at{" "}
                <strong>www.euragaming.com</strong> (the &quot;Platform&quot;). Our registered address is:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700">
                M3M Corner Walk, R-15, Ground Floor,<br />
                Sector 74, Gurugram, Haryana – 122102, India
              </div>
              <p className="mt-3">
                For any privacy-related queries, contact us at{" "}
                <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                  support@euragaming.com
                </a>.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Hosting Infrastructure &amp; Server-Side Data</h2>
              <p className="mb-3">
                The Platform is hosted on <strong>Vercel Inc.</strong>, a third-party infrastructure
                provider. As a standard part of web hosting operations, Vercel automatically collects
                and processes server access logs, which may include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2 mb-3">
                <li>Your IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and timestamps</li>
                <li>Referring URL</li>
              </ul>
              <p className="mb-3">
                Vercel acts as a data processor on our behalf solely for the purpose of serving the
                website and maintaining infrastructure security. We do not directly access or control
                these logs. Please refer to{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Vercel&apos;s Privacy Policy
                </a>{" "}
                for full details.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Important:</strong> Because the Platform is hosted on Vercel, certain technical
                data such as your IP address is transmitted to Vercel&apos;s servers as part of normal
                web browsing. This is inherent to how all websites on the internet function and is not
                unique to Eura Gaming.
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data We Collect &amp; How It Is Stored</h2>
              <p className="mb-3">
                Beyond infrastructure-level logs handled by Vercel, Eura Gaming does not operate any
                centralised database or server-side storage for user account data. All user-generated
                data — including your account details, quiz scores, and history — is stored exclusively
                in your own browser&apos;s local storage on your device.
              </p>
              <p className="mb-3">We use two types of browser-based storage:</p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Storage Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Purpose</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Persistence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-800">localStorage</td>
                      <td className="px-4 py-3">Account details, quiz history, leaderboard scores, registered users list</td>
                      <td className="px-4 py-3">Until manually cleared by you</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-800">sessionStorage</td>
                      <td className="px-4 py-3">CAPTCHA verification status, active login session state</td>
                      <td className="px-4 py-3">Until browser tab is closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                <strong>Note on the Leaderboard:</strong> The leaderboard displays scores from all
                users who have registered on the same device and browser. This data is aggregated
                from your device&apos;s localStorage and is not transmitted to or stored on any
                external server operated by Eura Gaming.
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Password Handling</h2>
              <p>
                When you register an account, your password is stored in your browser&apos;s localStorage
                on your device. Passwords are not transmitted to any server operated by Eura Gaming.
                We strongly recommend using a unique password for this Platform. You are solely
                responsible for maintaining the confidentiality of your login credentials.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
              <p className="mb-3">
                We do <strong>not</strong> use any third-party analytics tools (such as Google
                Analytics), advertising networks, social media tracking pixels, or behavioural
                tracking services on this Platform.
              </p>
              <p>
                The only third-party service involved in the operation of this Platform is{" "}
                <strong>Vercel Inc.</strong> as our hosting infrastructure provider, as described
                in Section 2 above.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
              <p className="mb-3">
                Data stored in your browser&apos;s localStorage persists indefinitely until you manually
                clear your browser data. We do not impose automatic expiration or inactivity-based
                deletion on locally stored data.
              </p>
              <p>
                Server-side infrastructure logs retained by Vercel are subject to Vercel&apos;s own
                retention policies, which are outside our control.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Account Deletion</h2>
              <p className="mb-3">
                Since all user account data is stored locally in your browser, you can permanently
                delete your account and all associated data by clearing your browser&apos;s localStorage.
                This action is <strong>irreversible</strong> and will remove your account details,
                quiz history, and scores from this device.
              </p>
              <p className="mb-3">
                To clear localStorage: open your browser&apos;s Developer Tools → Application →
                Local Storage → select the euragaming.com entry → and delete it.
              </p>
              <p>
                Note: Clearing localStorage will not affect any server-side infrastructure logs
                held by Vercel, as those are outside our control.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Data Portability</h2>
              <p className="mb-3">
                Since all your data is stored locally in your browser, you can access and view it
                at any time via your browser&apos;s Developer Tools under{" "}
                <strong>Application → Local Storage → euragaming.com</strong>. The data is stored
                in JSON format and can be copied manually.
              </p>
              <p>
                There is no server-side export mechanism as Eura Gaming does not store your personal
                data on any centralised server.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Your Rights</h2>
              <p className="mb-3">You have full control over your data. You can:</p>
              <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Update your profile information from the Dashboard Settings tab</li>
                <li>Delete all your data by clearing your browser&apos;s localStorage</li>
                <li>Log out at any time to clear your session</li>
                <li>Access your stored data via browser Developer Tools</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Children&apos;s Privacy</h2>
              <p>
                The Platform is accessible to users aged 13 and above. We do not knowingly collect
                personal information from children under the age of 13. If you are a parent or
                guardian and believe your child under 13 has used this Platform, please contact us
                at{" "}
                <a href="mailto:support@euragaming.com" className="text-indigo-600 hover:underline">
                  support@euragaming.com
                </a>{" "}
                for guidance on removing locally stored data.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be reflected by
                updating the &quot;Last Updated&quot; date at the top of this page. We encourage you to
                review this policy periodically. Continued use of the Platform after changes
                constitutes your acceptance of the revised policy.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
              <p className="mb-3">
                If you have any questions or concerns about this Privacy Policy, please contact us:
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
