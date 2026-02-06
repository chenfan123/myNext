import React from 'react'

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div className='template'>template</div>
        {children}
    </div>
  )
}
