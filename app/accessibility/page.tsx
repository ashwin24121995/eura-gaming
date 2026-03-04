import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Accessibility Policy | Eura Gaming",
  description:
    "Eura Gaming's accessibility policy — our commitment to making the cricket quiz platform accessible to all users.",
};

const commitments = [
  {
    icon: "🎯",
    title: "WCAG 2.1 Compliance Target",
    desc: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard. These guidelines explain how to make web content more accessible to people with disabilities.",
  },
  {
    icon: "⌨️",
    title: "Keyboard Navigation",
    desc: "All interactive elements — including navigation menus, quiz questions, buttons, and forms — are designed to be fully accessible via keyboard alone, without requiring a mouse.",
  },
  {
    icon: "🔤",
    title: "Screen Reader Support",
    desc: "We use semantic HTML, ARIA labels, and descriptive alt text to ensure compatibility with screen readers such as NVDA, JAWS, and VoiceOver.",
  },
  {
    icon: "🎨",
    title: "Colour Contrast",
    desc: "We maintain a minimum colour contrast ratio of 4.5:1 for normal text and 3:1 for large text, in accordance with WCAG 2.1 Level AA requirements, to support users with visual impairments.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "The platform is fully responsive and works across all screen sizes including mobile phones, tablets, and desktop computers. Content reflows correctly at all zoom levels up to 200%.",
  },
  {
    icon: "⏱️",
    title: "Timing Adjustments",
    desc: "The quiz timer is visible and clearly displayed. We are working on providing options to extend time limits for users who require additional time due to disabilities.",
  },
  {
    icon: "🚫",
    title: "No Flashing Content",
    desc: "We do not use content that flashes more than three times per second, in compliance with guidelines to prevent seizures in users with photosensitive epilepsy.",
  },
  {
    icon: "🔗",
    title: "Descriptive Links",
    desc: "All links use descriptive text that makes sense out of context, helping screen reader users understand where each link leads without reading surrounding content.",
  },
];

const knownIssues = [
  "The drag-to-verify CAPTCHA slider may present challenges for users with motor disabilities. We are evaluating alternative verification methods.",
  "Some older browser versions may not fully support all accessibility features. We recommend using a modern browser (Chrome, Firefox, Safari, or Edge) for the best experience.",
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="text-4xl mb-3">♿</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Accessibility Policy</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span>
                <strong>Company:</strong> Eura Gaming Pvt. Ltd.
              </span>
              <span>
                <strong>Last Updated:</strong> March 5, 2026
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Eura Gaming Pvt. Ltd. is committed to ensuring that Eura Cricket Quiz is accessible
              to all users, including those with disabilities. We believe that everyone deserves
              equal access to our platform, regardless of ability.
            </p>
          </div>

          {/* Commitment Statement */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-indigo-900 mb-2">Our Commitment</h2>
            <p className="text-indigo-800 text-sm leading-relaxed">
              We are actively working to improve the accessibility of euragaming.com in accordance
              with the{" "}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>. This is
              an ongoing effort and we continuously review and improve our platform. If you
              encounter any accessibility barrier, please contact us — we take all feedback
              seriously.
            </p>
          </div>

          {/* Accessibility Features */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Accessibility Features</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {commitments.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Known Issues */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-bold text-amber-900 mb-3">Known Accessibility Limitations</h2>
            <p className="text-amber-800 text-sm mb-3">
              We are aware of the following limitations and are actively working to address them:
            </p>
            <ul className="space-y-2">
              {knownIssues.map((issue, idx) => (
                <li key={idx} className="flex gap-2 text-amber-800 text-sm">
                  <span className="flex-shrink-0 mt-0.5">⚠️</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 pr-4 text-gray-700 font-semibold">Aspect</th>
                    <th className="text-left py-2 text-gray-700 font-semibold">Standard / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Accessibility Standard", "WCAG 2.1 Level AA (target)"],
                    ["Assistive Technologies Tested", "NVDA, VoiceOver, TalkBack"],
                    ["Browsers Tested", "Chrome, Firefox, Safari, Edge"],
                    ["Colour Contrast (Normal Text)", "Minimum 4.5:1 ratio"],
                    ["Colour Contrast (Large Text)", "Minimum 3:1 ratio"],
                    ["Responsive Breakpoints", "Mobile (320px+), Tablet (768px+), Desktop (1024px+)"],
                    ["Zoom Support", "Up to 200% without loss of content"],
                    ["Language", "English (lang=en declared in HTML)"],
                  ].map(([aspect, standard]) => (
                    <tr key={aspect}>
                      <td className="py-2 pr-4 text-gray-700 font-medium">{aspect}</td>
                      <td className="py-2 text-gray-600">{standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Feedback & Contact</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We welcome your feedback on the accessibility of Eura Cricket Quiz. If you experience
              any accessibility barriers, please let us know so we can improve. We aim to respond
              to accessibility feedback within <strong>5 business days</strong>.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-1">
              <p><strong>Eura Gaming Pvt. Ltd.</strong></p>
              <p>M3M Corner Walk, R-15, Ground Floor,</p>
              <p>Sector 74, Gurugram, Haryana &ndash; 122102, India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@euragaming.com"
                  className="text-indigo-600 hover:underline"
                >
                  support@euragaming.com
                </a>
              </p>
            </div>
          </div>

          {/* Formal Complaints */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Formal Complaints</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you are not satisfied with our response to your accessibility feedback, you may
              contact the relevant disability rights authority in your jurisdiction. In India, you
              may refer matters to the{" "}
              <strong>Department of Empowerment of Persons with Disabilities (DEPwD)</strong>,
              Ministry of Social Justice and Empowerment, Government of India.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-6 bg-gray-100 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Related Policies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/cookies", label: "Cookie Policy" },
                { href: "/advertising", label: "Advertising Disclosure" },
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
