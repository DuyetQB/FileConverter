import React from 'react'
import dynamic from 'next/dynamic';
import Banner from '../components/Banner'
import Layout from '../components/layouts'
const BannerAds = dynamic(() => import('../components/BannerAds'), { ssr: false })

const Page: React.FC = () => {

    return (
        <Layout>
           <Banner />
           <BannerAds/>
        </Layout>
    );
};

export default Page;