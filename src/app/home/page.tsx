import React from 'react'
// import dynamic from 'next/dynamic';
import Banner from '../components/Banner'
import Layout from '../components/layouts'
// import Gtag from '../components/Gtag';
import dynamic from 'next/dynamic';
// const BannerAds = dynamic(() => import('../components/BannerAds'), { ssr: false })
const Gtag = dynamic(() => import('../components/Gtag'), { ssr: false })

const Page: React.FC = () => {

    return (
        <Layout>
            <Banner />
            {/* <BannerAds/> */}
            <Gtag />
        </Layout>
    );
};

export default Page;