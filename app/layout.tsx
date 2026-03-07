import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.euragaming.com"),
  title: "Eura Gaming - Cricket Quiz Platform",
  description:
    "Test your cricket knowledge, compete with players worldwide, and grow your understanding of the beautiful game. India's premier cricket quiz platform.",
  keywords:
    "cricket quiz, cricket knowledge, cricket trivia, India cricket, cricket leaderboard, Eura Gaming",
  authors: [{ name: "Eura Gaming Pvt. Ltd." }],
  creator: "Eura Gaming Pvt. Ltd.",
  publisher: "Eura Gaming Pvt. Ltd.",
  alternates: {
    canonical: "https://www.euragaming.com",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Eura Gaming - Cricket Quiz Platform",
    description:
      "India's premier cricket quiz platform. Test your cricket knowledge and compete globally.",
    url: "https://www.euragaming.com",
    siteName: "Eura Gaming",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Eura Gaming - Cricket Quiz Platform",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Eura Gaming - Cricket Quiz Platform",
    description:
      "India's premier cricket quiz platform. Test your cricket knowledge and compete globally.",
    images: ["/favicon.png"],
  },
  verification: {
    google: "OCoD4oukReGhAoJ6wvSV6iea71XOJAa2NGqeYTN-OPM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
