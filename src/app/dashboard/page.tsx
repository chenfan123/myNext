'use client'
import React from 'react'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
  return (
    <div>
        <Button type="primary" onClick={() => {
            fetch('/api/logout', {
                method: 'DELETE',
            }).then(res => res.json()).then(data => {
                console.log(data,'data')
                router.push('/login');
            }).catch(err => {
                console.log(err,'err')
            })
        }}>Logout</Button>
    </div>
  )
}
