import React from 'react';
import Layout from '../components/layouts';
import UploadFileImage from "@/app/components/forms/UploadFileImage"
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Convert jpg to webp - Fast & Efficient File Conversion",
  description: "Convert jpg to webp,convert jpg to avif,convert jpg to png.It's helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
  keywords: ['convert image file', 'jpg to webp', 'jpg to png', 'convert jpg to avif'],
  referrer: 'origin',
  robots: 'index, follow',
  openGraph: {
    type: "website",
    url: "https://www.filesconvert.com/convert-image",
    title: "Convert jpg to webp - Fast & Efficient File Conversion",
    description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
    siteName: "Convert jpg to webp",
    images: [{
      url: "https://www.filesconvert.com/assets/main-thumbnail.png",
      alt: "FilesConvert Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FilesConvert",
    title: "Convert jpg to webp - Fast & Efficient File Conversion",
    description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
    images: "https://www.filesconvert.com/assets/main-thumbnail.png",
  },
  verification: {
    google: 'msYKoOpfNx-lGswS8LxexpukMTYEdDuvPIkGDKKAV-s'
  },
  alternates: {
    canonical: 'https://www.filesconvert.com/convert-image',
  }
};


const Page: React.FC = () => {

  return (
    <Layout>
      <UploadFileImage />
    </Layout>
  );
};

export default Page;
