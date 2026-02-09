// Delete => /api/articles/:id
// 因为id非固定所以需要文件夹[id]
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // ...
}

// PATCH => /api/articles/:id

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // ...
}