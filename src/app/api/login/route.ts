import { NextResponse,NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();
    // 调用后端接口
    // const r = await fetch('https://api.zhihur.com/admin/auth/sign_in', {
    //     method: 'POST',
    //     headers:{
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         login:username,
    //         password
    //     })
    // })
    // const data = await r.json();
    const data = {
        data:{
            token:'1234567890',
        }
    }
    // BFF
    // 把拿到的token通过cookie的形式种植到前端
    return NextResponse.json({
        code: 0,
        message: 'success',
        data: data
    },{
        headers:{
            'Set-Cookie': `token=${data.data.token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
        }
    })
}