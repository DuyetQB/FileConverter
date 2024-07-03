import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FilesConvert",
  description: "FileConvert help you convert many files type. Supper fast and save your time",
  keywords: ['files convert', 'file'],
  referrer: 'origin',
  robots: 'index, follow',
  openGraph: {
    type: "website",
    url: "/",
    title: "FilesConvert",
    description: "FilesConvert help you convert many files type. Supper fast and save your time",
    siteName: "FileConvert",
    images: [{
      url: "./assets/main-thumbnail.png",
    }],
  },
  verification:{
    google:'msYKoOpfNx-lGswS8LxexpukMTYEdDuvPIkGDKKAV-s'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1737962627563882"
     crossOrigin="anonymous"></Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
