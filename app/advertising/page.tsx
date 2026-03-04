import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Advertising Disclosure | Eura Gaming",
  description:
    "Eura Gaming's advertising disclosure statement — learn about our monetisation model and how we keep the platform free.",
};

const sections = [
  {
    title: "Our Current Monetisation Model",
    content: `Eura Cricket Quiz is currently a completely free-to-play platform. As of the Last Updated date below, Eura Gaming Pvt. Ltd. does not display any third-party advertisements, banner ads, pop-ups, or sponsored content on this website. There are no paid placements, affiliate links, or advertiser relationships that influence the content of our quizzes, leaderboard, or any other part of the platform.`,
  },
  {
    title: "No Sponsored Content",
    content: `All quiz questions, answers, and educational content on Eura Cricket Quiz are created and curated by our internal team. No quiz question, answer, or result is sponsored, paid for, or influenced by any external advertiser, brand, or organisation. We are not affiliated with, sponsored by, or endorsed by any cricket board, governing body, broadcaster, or sports brand.`,
  },
  {
    title: "Future Advertising Plans",
    content: `We may introduce advertising or sponsored content in the future as part of our monetisation strategy. If and when we do, we will clearly label all sponsored content as "Sponsored" or "Advertisement" so users can distinguish it from editorial content. We will also update this Advertising Disclosure page and our Privacy Policy accordingly before any advertising is introduced.`,
  },
  {
    title: "Premium Features",
    content: `We may introduce optional premium features or subscriptions in the future. Any premium or paid features will be clearly marked and will be entirely optional. The core quiz experience — including all 30 questions, the leaderboard, and user dashboard — will always remain free to access.`,
  },
  {
    title: "Affiliate Links",
    content: `As of the Last Updated date, this website does not contain any affiliate links. If affiliate relationships are introduced in the future, all affiliate links will be clearly disclosed with an "Affiliate Link" or similar label in accordance with applicable advertising standards and guidelines.`,
  },
  {
    title: "Data & Advertising",
    content: `We do not sell, rent, or share your personal data with advertisers. We do not use advertising tracking pixels, retargeting cookies, or behavioural advertising technologies. Please refer to our Privacy Policy for full details on how we handle your data.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Advertising Disclosure or our monetisation practices, please contact us at support@euragaming.com.`,
  },
];

export default function AdvertisingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="text-4xl mb-3">📢</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Advertising Disclosure</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span>
                <strong>Company:</strong> Eura Gaming Pvt. Ltd.
              </span>
              <span>
                <strong>Last Updated:</strong> March 5, 2026
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              In the interest of full transparency, this page explains Eura Gaming&apos;s current
              monetisation model, advertising practices, and our commitments to users regarding
              sponsored content.
            </p>
          </div>

          {/* Current Status Banner */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">✅</span>
            <div>
              <p className="font-semibold text-green-800 mb-1">
                Currently: No Advertisements on This Platform
              </p>
              <p className="text-green-700 text-sm leading-relaxed">
                As of March 5, 2026, Eura Cricket Quiz does not display any third-party
                advertisements, sponsored posts, or affiliate links. The platform is entirely
                free and ad-free.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {idx + 1}. {section.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {section.title === "Contact Us" ? (
                    <>
                      If you have any questions about this Advertising Disclosure or our
                      monetisation practices, please contact us at{" "}
                      <a
                        href="mailto:support@euragaming.com"
                        className="text-indigo-600 hover:underline"
                      >
                        support@euragaming.com
                      </a>
                      .
                    </>
                  ) : (
                    section.content
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-8 bg-gray-100 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Related Policies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/cookies", label: "Cookie Policy" },
                { href: "/accessibility", label: "Accessibility Policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="mt-6 text-center text-xs text-gray-400">
            <p>
              <strong>Eura Gaming Pvt. Ltd.</strong> &mdash; M3M Corner Walk, R-15, Ground Floor,
              Sector 74, Gurugram, Haryana &ndash; 122102, India
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
