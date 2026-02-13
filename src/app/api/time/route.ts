import { NextResponse, NextRequest } from "next/server"

export async function GET(request:NextRequest) {
    const searchParams= request.nextUrl.searchParams
    console.log(searchParams,'get /api/time')
    return NextResponse.json({
        time:new Date().toLocaleTimeString(),
        code: 0,
        message: 'success',
    })
}