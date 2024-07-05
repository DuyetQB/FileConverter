"use client"
import Script from 'next/script';
import React, { useEffect } from 'react'

declare global {
    interface Window {
        dataLayer: any[];
    }
  }
  

function Gtag() {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(p0: string, p1: string | Date) {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-DLBGNL85FN');
      }, []);
      
  return (
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DLBGNL85FN"
        strategy="afterInteractive"
      />
  )
}

export default Gtag
