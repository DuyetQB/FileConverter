import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FileConverter",
  description: "FileConverter help you convert many files type. Supper fast and save your time",
  keywords: ['files convert', 'file'],
  referrer: 'origin',
  robots: 'index, follow',
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "FileConverter",
    description: "FileConverter help you convert many files type. Supper fast and save your time",
    siteName: "FileConverter",
    images: [{
      url: "./assets/main-thumbnail.png",
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
