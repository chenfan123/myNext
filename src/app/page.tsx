import React from 'react'
import { Button } from 'antd';
import { cookies } from 'next/headers';

// export default function page() {
//   return (
//     <div>
//         <Button type="primary">Click me</Button>
//     </div>
//   )
// }

// 动态渲染: 下面是用了cookies，所以是动态渲染
// export default async function page() {
//     const cookiesStore = cookies()
//     console.log(cookiesStore,'cookiesStore')
//     console.log('🐮')
//   return (
//     <div>
//         <Button type="primary">{new Date().toISOString()}</Button>
//     </div>
//   )
// }