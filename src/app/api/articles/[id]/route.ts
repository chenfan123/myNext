import { NextResponse } from "next/server";
import db from "@/db";
// Delete => /api/articles/:id
// 因为id非固定所以需要文件夹[id]
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    await db.update(({posts})=>{
        const idx = posts.findIndex(post=>post.id === id)
        if(idx !== -1){
            posts.splice(idx,1)
        }
    })
    return NextResponse.json({
        code: 0,
        message: 'success',
        data: {id}
    })
    // ...
}

// PATCH => /api/articles/:id

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const r = await request.json()
    await db.update(({posts})=>{
        const idx = posts.findIndex(post=>post.id === id)
        if(idx !== -1){
            posts[idx] = {...posts[idx], ...r}
        }
    }) 
    return NextResponse.json({
        code: 0,
        message: 'success',
        data: {id, ...r}
    })
    // ...
}