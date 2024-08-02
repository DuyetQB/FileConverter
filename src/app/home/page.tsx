import React from 'react'
// import dynamic from 'next/dynamic';
import Banner from '../components/Banner'
import Layout from '../components/layouts'
import Gtag from '../components/Gtag';
import ButtonCheckout from '../components/ButtonCheckout';
// const BannerAds = dynamic(() => import('../components/BannerAds'), { ssr: false })

const Page: React.FC = () => {

    return (
        <Layout>
            <Banner />
            <ButtonCheckout />
           {/* <BannerAds/> */}
           <Gtag />
        </Layout>
    );
};

export default Page;