'use client';

import React from 'react'
import { products } from '@/data';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const id = params.id as string;
    const data = products.find((item) => item.id === id)!;
    const router = useRouter();
    
    if (!data) {
        return null;
    }
    
    return (
        <div onClick={() => router.back()} className='flex justify-center items-center fixed inset-0 bg-gray-500/80'>
            <Image src={data.image} alt={data.name} width={400} height={400} className='rounded-lg block mx-auto'/>
        </div>
    )
}
