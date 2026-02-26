import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eura Gaming - Cricket Quiz Platform",
  description:
    "Test your cricket knowledge, compete with players worldwide, and grow your understanding of the beautiful game. India's premier cricket quiz platform.",
  keywords: "cricket quiz, cricket knowledge, cricket trivia, India cricket, cricket leaderboard",
  openGraph: {
    title: "Eura Gaming - Cricket Quiz Platform",
    description: "India's premier cricket quiz platform. Test your knowledge and compete globally.",
    type: "website",
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
