import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <h1>这是dashboard layout</h1>
        {children}
    </div>
  )
}