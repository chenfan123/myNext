import React from 'react'
import Hero from '../../components/hero';
import homeSrc from '../../../../public/223131-163931949195b3.jpeg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance',
  description: 'Performance page',
}

export default function Performance() {
  return (
    <Hero imgUrl={homeSrc} title="Professional Cloud Hosting" />

  )
}
