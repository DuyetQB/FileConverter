'use client'
import React, { useEffect, useState } from 'react'
import { initializePaddle, Paddle } from '@paddle/paddle-js';

function ButtonCheckout() {
    const [paddle, setPaddle] = useState<Paddle>();

    // Download and initialize Paddle instance from CDN
    useEffect(() => {
        initializePaddle({ environment: 'sandbox', token: 'test_9d4d8d96139fc7d55e79d2f4d71' }).then(
            (paddleInstance: Paddle | undefined) => {
                if (paddleInstance) {
                    setPaddle(paddleInstance);
                }
            },
        );
    }, []);

    // Callback to open a checkout
    const openCheckout = () => {
        paddle?.Checkout.open({
            items: [{ priceId: 'pri_01j490tems53kv4gg59pch7v56', quantity: 1 }],
        });
    };
    return (

        <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={openCheckout}>Checkout</button>

    )
}

export default ButtonCheckout
