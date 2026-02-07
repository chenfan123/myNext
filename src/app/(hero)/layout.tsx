import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { ADLaM_Display } from 'next/font/google'
import Header from "../components/Header";

const geist = ADLaM_Display({
    subsets: ['adlam'],
    weight: ['400'],
  })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={geist.className}>
        <Header/>
        {children}
    </div>
  );
}
