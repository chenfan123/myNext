import { NextResponse } from "next/server";
import db from '@/db';
// GET => /api/articles

export async function GET(request: Request) {
    // ...
    return NextResponse.json({
        code: 0,
        message: 'success',
        data: []
    })
}

// POST => /api/articles

export async function POST(request: Request) {
    try {
        
        // 否则尝试从请求体获取 JSON 数据
        const contentType = request.headers.get('content-type')
        if (contentType?.includes('application/json')) {
            const r = await request.json()
            await db.update(({posts})=>posts.unshift({id:Math.random().toString(36).slice(-8),
                ...r
            }))
            return NextResponse.json({
                code: 0,
                message: 'success',
                data: r
            })
        }
        
        // 如果既没有查询参数也没有请求体，返回错误
        return NextResponse.json({
            code: 1,
            message: 'No data provided. Use query parameters or JSON body.',
        }, { status: 400 })
        
    } catch (error) {
        console.error('Request parse error:', error)
        return NextResponse.json({
            code: 1,
            message: 'Invalid request data',
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 400 })
    }
}
