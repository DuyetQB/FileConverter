
import React from 'react';
import Layout from '../components/layouts';
import UploadFileAudio from "@/app/components/forms/UploadFileAudio"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Convert audio types",
    description: "Convert mp3 to waw, convert mp3 to m4a and other types. Supper fast and save your time",
    keywords: ['convert audio file', 'convert mp3 to waw','convert waw to mp3','convert mp3 to ogg'],
    referrer: 'origin',
    robots: 'index, follow',
    alternates:{
        canonical:"/convert-audio"
    },
    bookmarks:'/convert-audio',
    category:"Convert audio file",
    openGraph: {
      type: "website",
      url: "/convert-audio",
      title: "Convert audio files",
      description: "FilesConvert help you convert many files type. Supper fast and save your time",
      siteName: "Audio Convert",
      images: [{
        url: "./assets/main-thumbnail.png",
      }],
    },
  };

const Page: React.FC = () => {

    return (
        <Layout>
            <UploadFileAudio />
        </Layout>
    );
};

export default Page;
