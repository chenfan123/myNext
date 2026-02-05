'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
        <h2>Dashboard template {count}</h2>
        <button className='bg-black text-white p-2 my-4 rounded-md' onClick={() => setCount(count + 1)}>Increment</button>
        {children}
    </div>
  )
}