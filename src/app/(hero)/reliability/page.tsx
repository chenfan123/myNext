import React from 'react'
import Hero from '../../components/hero';
import homeSrc from '../../../../public/232707-16391500276274.jpeg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reliability',
  description: 'Reliability page',
}

export default function Reliability() {
  return (
    <Hero imgUrl={homeSrc} title="Professional Cloud Hosting" />

  )
}
