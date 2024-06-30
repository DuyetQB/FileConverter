import React from 'react';
import Layout from '../components/layouts';
import { Metadata } from 'next';
import ConvertHtmlToJsx from '../components/forms/ConvertHtmlToJsx';


export const metadata: Metadata = {
    title: "Convert html to jsx",
    description: "Convert html to jsx. Supper fast and save your time",
    keywords: ['convert html jsx', 'html to jsx','convert html to jsx'],
    referrer: 'origin',
    robots: 'index, follow',
    alternates:{
        canonical:"/html-to-jsx"
    },
    
    bookmarks:'/html-to-jsx',
    category:"Convert html to jsx",
    openGraph: {
      type: "website",
      url: "/html-to-jsx",
      title: "Convert html to jsx",
      description: "Convert html to jsx. Supper fast and save your time",
      siteName: "Html convert to jsx",
      images: [{
        url: "./assets/main-thumbnail.png",
      }],
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
