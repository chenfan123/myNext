import React from 'react';
import Image,{StaticImageData} from 'next/image';
import homeSrc from '../../public/004210-16372537307822.jpeg';

interface IHero {
    imgUrl: StaticImageData;
    title: string;
}
export default function Hero({imgUrl,title}: IHero) {
  return (
    <div className=" h-screen relative">
        <div className='absolute inset-0 -z-10'>
            <Image src={imgUrl} alt="logo" fill style={{objectFit: 'cover'}}/>
            <div className='absolute inset-0 bg-linear-to-r from-gray-500'></div>
        </div>
        <div className='flex justify-center pt-48'>
            <h1 className='text-white text-6xl'>{title}</h1>
        </div>
    </div>
  );
} 
  