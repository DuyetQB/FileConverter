import React from 'react';
import Layout from '../components/layouts';
import UploadFileImage from "@/app/components/forms/UploadFileImage"
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Convert image types",
    description: "Convert jpg to webp,convert jpg to avif,convert jpg to png. Supper fast and save your time",
    keywords: ['convert image file', 'convert jpg to webp','convert jpg to png','convert jpg to avif'],
    referrer: 'origin',
    robots: 'index, follow',
    alternates:{
        canonical:"/convert-image"
    },
    bookmarks:'/convert-image',
    category:"Convert image file",
    openGraph: {
      type: "website",
      url: "/convert-image",
      title: "FileConvert",
      description: "Convert jpg to webp,convert jpg to avif,convert jpg to png. Supper fast and save your time",
      siteName: "Image Convert Type",
      images: [{
        url: "./assets/main-thumbnail.png",
      }],
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
