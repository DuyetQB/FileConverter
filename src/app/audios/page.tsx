import React from 'react';
import Layout from '../components/layouts';
import UploadFileAudio from '@/app/components/forms/UploadFileAudio';


const Page: React.FC = () => {

  return (
    <Layout>
      <UploadFileAudio />
    </Layout>
  );
};

export default Page;
