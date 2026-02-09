import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Geist } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {children}
          {modal}
        </AntdRegistry>
      </body>
    </html>
  );
}
