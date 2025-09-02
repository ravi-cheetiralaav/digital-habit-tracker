import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Habit Tracker",
  description: "A Digital Habit Tracker with Gamification features including streak counters, motivational quotes, heatmap visualizations, and system notifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
