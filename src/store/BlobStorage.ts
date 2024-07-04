import { put } from '@vercel/blob'

export async function upload(request: Request) {
    const { url } = await put('avatars/user-12345.png', request.body, { access: 'public' })
    return Response.json({ url })
}
