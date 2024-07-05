import React from 'react';
import Layout from '../components/layouts';
import { Metadata } from 'next';
import ConvertHtmlToJsx from '../components/forms/ConvertHtmlToJsx';

  export const metadata:Metadata = {
    title: "Html-to-jsx - Fast & Efficient File Conversion",
    description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
    keywords: [
      'file conversion', 
      'convert files', 
      'document conversion', 
      'image conversion', 
      'audio conversion', 
      'video conversion', 
      'file converter',
      'html-to-jsx'
    ],
    referrer: 'origin',
    robots: 'index, follow',
    openGraph: {
      type: "website",
      url: "https://www.filesconvert.com/html-to-jsx",
      title: "FilesConvert - Fast & Efficient File Conversion",
      description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
      siteName: "Html-to-jsx",
      images: [{
        url: "https://www.filesconvert.com/assets/main-thumbnail.png",
        alt: "FilesConvert Logo"
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@FilesConvert",
      title: "Html-to-jsx - Fast & Efficient File Conversion",
      description: "FilesConvert helps you quickly convert multiple file types with ease. Super fast and saves your time. Convert documents, images, audio, video, and more.",
      images: "https://www.filesconvert.com/assets/main-thumbnail.png",
    },
    verification: {
      google: 'msYKoOpfNx-lGswS8LxexpukMTYEdDuvPIkGDKKAV-s'
    },
    alternates:{
      canonical: 'https://www.filesconvert.com/html-to-jsx',
    }
  };
  
  
const Page: React.FC = () => {

    return (
        <Layout>
            <ConvertHtmlToJsx />
        </Layout>
    );
};

export default Page;
