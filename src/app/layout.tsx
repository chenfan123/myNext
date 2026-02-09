import React, { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Geist } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Link from "next/link";

export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <AntdRegistry>
        <div className="container mx-auto">
            <div className="flex justify-center text-blue-500 p-6 gap-6">
                <Link href="/">
                    Home
                </Link>
                <Link href="/visitors">
                    Visitors
                </Link>
            </div>
            <div className="flex gap-6">
                <Suspense fallback={<div className="flex text-white justify-center items-center h-60 rounded-lg bg-teal-500 flex-1">Loading team...</div>}>
                    {team}
                </Suspense>
                <Suspense fallback={<div className="flex text-white justify-center items-center h-60 rounded-lg bg-purple-500 flex-1">Loading analytics...</div>}>
                    {analytics}
                </Suspense>
            </div>
            {children}
        </div>
      </AntdRegistry>
    </body>
  </html>
  );
}
