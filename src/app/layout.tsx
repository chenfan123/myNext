import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Geist } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
        {children}
     </body>
  </html>
  );
}
