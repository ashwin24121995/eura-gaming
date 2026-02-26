import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-8xl mb-4">🏏</div>
        <h1 className="text-6xl font-black text-indigo-600 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          Looks like this page got stumped! The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
