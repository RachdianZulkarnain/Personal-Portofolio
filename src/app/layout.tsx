import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400", // Or an array like ['400', '700'] for multiple weights
  display: "swap", // Recommended for better performance
});

export const metadata: Metadata = {
  title: "Rachdian Zulkarnain - Portofolio ",
  description:
    "Welcome to the portfolio of Rachdian Muhammad Adha. Discover innovative projects that combine expertise in Electrical Engineering with Full-Stack Web Development skills, utilizing technologies such as TypeScript, React, Node.js, Next.js, and TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased `}>
        {children}
      </body>
    </html>
  );
}
// antialiased leading-6 h-[5000px]
