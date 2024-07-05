import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: "FilesConvert - Fast & Efficient File Conversion",
  description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
  keywords: [
    'file conversion', 
    'convert files', 
    'document conversion', 
    'image conversion', 
    'audio conversion', 
    'video conversion', 
    'file converter'
  ],
  referrer: 'origin',
  robots: 'index, follow',
  openGraph: {
    type: "website",
    url: "https://www.filesconvert.com",
    title: "FilesConvert - Fast & Efficient File Conversion",
    description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
    siteName: "FilesConvert",
    images: [{
      url: "https://www.filesconvert.com/assets/main-thumbnail.png",
      alt: "FilesConvert Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FilesConvert",
    title: "FilesConvert - Fast & Efficient File Conversion",
    description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
    images: "https://www.filesconvert.com/assets/main-thumbnail.png",
  },
  verification: {
    google: 'msYKoOpfNx-lGswS8LxexpukMTYEdDuvPIkGDKKAV-s'
  },
  alternates:{
    canonical: 'https://www.filesconvert.com',
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
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1737962627563882"
     crossOrigin="anonymous" strategy="beforeInteractive"></Script>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-DLBGNL85FN"></Script>
        {children}
      </body>
    </html>
  );
}
