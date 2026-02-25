import React from 'react'
import Image from 'next/image'

interface ImageResponse {
    url: string[]
}

const fetchImage = async (): Promise<ImageResponse> => {
    console.log(111)
    const response = await new Promise<ImageResponse>((resolve) => {
        setTimeout(() => {
            resolve({
                url: [
                    '/004210-16372537307822.jpeg',
                    '/223131-163931949195b3.jpeg',
                    '/232707-16391500276274.jpeg'
                ]
            })
        }, 1000)
    })
    return response
}
export default async function page() {
    const image1 = await fetchImage()
    const image2 = await fetchImage()
    const image3 = await fetchImage()
  return (
    <div>       
        <Image src={image1.url[0]} alt="image1" width={100} height={100} />
        <Image src={image2.url[1]} alt="image2" width={100} height={100} />
        <Image src={image3.url[2]} alt="image3" width={100} height={100} />
    </div>
  )
}

/**
 * 1. 打包构建的时候
 *  会请求/a获取这个页面，然后会执行代码发起fetch请求。
 *  如果没有请求记忆（Request memoization），就会看一下数据缓存（Data Cache），这时候数据缓存也没有数据，就会真正发起请求拿到数据。然后会依次set数据缓存和请求记忆。
 * 然后走上述代码的第二次fetch请求，这时候因为有了请求记忆，就不会真正发起请求，而是直接返回请求记忆中的数据。（第三次同第二次） 
 * 然后会生成（Render To Payload）RSC即服务端组件。如果存在客户端组件，则会结合客户端组件生成对应的HTML。不管是RSC还是生成的html都会在服务端进行缓存。即全路由缓存（Full Route Cache）。
 * 
 * 
 * 再访问/a页面的时候，首先会查看客户端路由缓存，这时候没有名字，就会往下到完整陆游缓存。这时候有缓存，然后返回缓存内容，再set一下客户端路由缓存。最后渲染。
 * 客户端陆游缓存只会存在陆游导航期间，如果刷新就会失效。
 */