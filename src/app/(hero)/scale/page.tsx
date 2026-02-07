import React from 'react'
import Hero from '../../components/hero';
import homeSrc from '../../../../public/223522-1639319722d133.jpeg';   
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scale',
  description: 'Scale page',
}

export default function Scale() {
  return (
    <Hero imgUrl={homeSrc} title="Professional Cloud Hosting" />
  )
}
