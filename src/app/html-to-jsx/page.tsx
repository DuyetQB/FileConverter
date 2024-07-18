import React from 'react';
import Layout from '../components/layouts';
import { Metadata } from 'next';
import ConvertHtmlToJsx from '../components/forms/ConvertHtmlToJsx';

export const metadata: Metadata = {
  title: "Convert HTML to JSX | Online HTML to JSX Converter",
  description: "Easily convert HTML to JSX with our online converter. Try it now and streamline your React development.",
  keywords: [
    'convert HTML to JSX', 
    'HTML to JSX conversion', 
    'online HTML to JSX converter', 
    'React HTML to JSX tool',
    'HTML to JSX',
    'HTML to JSX converter',
  ],
  referrer: 'origin',
  robots: 'index, follow',
  openGraph: {
    type: "website",
    url: "https://www.filesconvert.com/html-to-jsx",
    title: "Convert HTML to JSX | Online HTML to JSX Converter",
    description: "Easily convert HTML to JSX with our online converter. Try it now and streamline your React development.",
    siteName: "FilesConvert",
    images: [{
      url: "https://www.filesconvert.com/assets/main-thumbnail.png",
      alt: "FilesConvert Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@FilesConvert",
    title: "Convert HTML to JSX | Online HTML to JSX Converter",
    description: "Easily convert HTML to JSX with our online converter. Try it now and streamline your React development.",
    images: "https://www.filesconvert.com/assets/main-thumbnail.png",
  },
  verification: {
    google: 'msYKoOpfNx-lGswS8LxexpukMTYEdDuvPIkGDKKAV-s'
  },
  alternates: {
    canonical: 'https://www.filesconvert.com/html-to-jsx',
  },
  icons: {
      icon: "/assets/icon.png"
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
