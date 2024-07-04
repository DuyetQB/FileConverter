"use client"
import React, { useEffect } from 'react'

declare global {
    interface Window {
      adsbygoogle: any[];
    }
  }
  
export default function BannerAds() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.error('push Adsbygoogle');
          } catch (e) {
            console.error('Adsbygoogle error:', e);
          }
        }
      }, []);

  return (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-1737962627563882"
          data-ad-slot="9663365192"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
  )
}
