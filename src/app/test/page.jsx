"use client"
import { motion } from 'framer-motion';
import React from 'react'

export default function page() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-4xl font-fbold mb-8'>
                    Welcome to Framer Motion
                </motion.div>
            </main>
        </div>
    )
}


// https://i.ibb.co/ksS7tMrM/t4.jpg
// https://i.ibb.co/Zz7WSWZs/t5.jpg
// https://i.ibb.co/bRMKxx05/t6.jpg
// https://i.ibb.co/bczsfnW/t1.webp
// https://i.ibb.co/bczsfnW/t1.webp
// https://i.ibb.co/Q7RZHfWf/t3.webp


// https://i.ibb.co/PzCsmYnq/b4.webp
// https://i.ibb.co/CKb46cRd/b5.webp
// https://i.ibb.co/CKChDMC7/b6.webp
// https://i.ibb.co/B5k5Nd21/b1.webp
// https://i.ibb.co/tpFG4f35/b2.webp
// https://i.ibb.co/qL1PxkKZ/b3.webp



// https://i.ibb.co/hF3B8TdV/p3.webp
// https://i.ibb.co/bjbyF7MT/p4.webp
// https://i.ibb.co/FLjLbNg3/p5.webp
// https://i.ibb.co/zHC914WR/p1.webp
// https://i.ibb.co/JwNwNSF8/p2.webp