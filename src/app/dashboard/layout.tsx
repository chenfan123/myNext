'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        label: 'About',
        href: '/dashboard/about'
    },
    {
        label: 'Settings',
        href: '/dashboard/settings'
    }
]

export default function layout({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
    const pathname = usePathname()
    console.log(pathname,'pathname')
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
        <div className='flex gap-4 font-bold text-lg md-4 '>
            {links.map((link) => (
                <Link key={link.href} className={pathname === link.href ? 'text-purple-500' : ''} href={link.href}>{link.label}</Link>
            ))}
        </div>
        <h2>Dashboard layout {count}</h2>
        <button className='bg-black text-white p-2 my-4 rounded-md' onClick={() => setCount(count + 1)}>Increment</button>
        {children}
    </div>
  )
}