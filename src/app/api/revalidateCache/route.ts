import { NextRequest, NextResponse } from "next/server";
import { revalidatePath,revalidateTag } from "next/cache";

export function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get('path')
    const tag = request.nextUrl.searchParams.get('tag')
    if(path){
        revalidatePath(path)
        return NextResponse.json({ message: 'Cache revalidated',revalidated:true })
    }
    if(tag){
        revalidateTag(tag,'tag')
        return NextResponse.json({ message: 'Cache revalidated',revalidated:true })
    }
    return NextResponse.json({ message: 'Cache not revalidated',revalidated:false })
}

