import React from 'react'
import { products } from '@/data';
import Image from 'next/image';

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = products.find((item) => item.id === id)!;
    return (
        <div className='container mx-auto pt-8'>
            <Image src={data.image} alt={data.name} width={400} height={400} className='rounded-lg block mx-auto'/>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-4'>
                <p><strong>title:</strong> {data.name}</p>
                <p><strong>price:</strong> ${data.price}</p>
                <p><strong>description:</strong> {data.description}</p>
                <p><strong>category:</strong> {data.category}</p>
            </div>
        </div>
    )
}