"use client"

import { useRouter } from 'next/navigation';
import { BaseSource } from '../common';

 const CallBack = () => {
    const router = useRouter();

    const handleAuthCallback = () => {
        const hash = window.location.hash;
        
        if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            const accessToken = params.get('access_token');
            if (accessToken) {
                // Send the access token to the server
                fetch(`${BaseSource.baseUrl}/auth/callback`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ access_token: accessToken }),
                    credentials: 'include',
                })
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("user",JSON.stringify(data))
                        router.push("/")
                        // Handle user data (e.g., save to local storage, redirect, etc.)
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        }
    };
    
    
    if (typeof window !== 'undefined') {
        if (window.location.pathname === '/auth/callback') {
            handleAuthCallback();
        }
    };


    return (
        <div></div>
    )
  
}

export default CallBack
