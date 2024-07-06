import React from 'react';
import Layout from '../components/layouts';
import { Metadata } from 'next';
import ConvertHtmlToJsx from '../components/forms/ConvertHtmlToJsx';

  export const metadata:Metadata = {
    title: "HTML to JSX Converter",
    description: "Convert HTML to JSX online. An online playground for HTML to JSX conversion",
    keywords: [
      'file conversion', 
      'convert files', 
      'document conversion', 
      'image conversion', 
      'audio conversion', 
      'video conversion', 
      'html to jsx',
      'Convert Html to Jsx',
      'html-to-jsx'
    ],
    referrer: 'origin',
    robots: 'index, follow',
    openGraph: {
      type: "website",
      url: "https://www.filesconvert.com/html-to-jsx",
      title: "HTML to JSX Converter",
      description: "Convert HTML to JSX online. An online playground for HTML to JSX conversion",
      siteName: "Html-to-jsx",
      images: [{
        url: "https://www.filesconvert.com/assets/main-thumbnail.png",
        alt: "FilesConvert Logo"
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@FilesConvert",
      title: "HTML to JSX Converter",
      description: "Convert HTML to JSX online. An online playground for HTML to JSX conversion",
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
