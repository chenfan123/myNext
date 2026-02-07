import React from 'react';
import Image from 'next/image';
import homeSrc from '../../../public/004210-16372537307822.jpeg';
import Hero from '../components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function Home() {
  return (
    <Hero imgUrl={homeSrc} title="Professional Cloud Hosting" />
  );
} 
  
