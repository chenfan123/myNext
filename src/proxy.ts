import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export default function proxy(request: NextRequest) {
    console.log(request.url,'proxy')
    // 如果不是登录页，并且没有token，则重定向到登录页
    if(!request.nextUrl.pathname.startsWith('/login') && !request.cookies.get('token')){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    /** 
        // 第二种方式
        // if(request.nextUrl.pathname.startsWith('/about')){
        //     return NextResponse.redirect(new URL('/home', request.url))
        // }
     */
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
// 第一种方式：允许过滤proxy在特定路径上运行，其他路径不运行
export const config = {
    // 只有和右边路径匹配的请求才会被proxy处理
//   matcher: '/about/:path*',
  matcher: ['/dashboard/:path*','/api/:path*'],
//   matcher:['/about/:path*','/api/:path*']
}