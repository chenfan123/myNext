import { NextResponse,NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
    const response = NextResponse.json({
        code: 0,
        message: '退出登陆',
        data: {
            token: null
        }
    })
    response.cookies.set('token','',{maxAge:0})
    return response
}