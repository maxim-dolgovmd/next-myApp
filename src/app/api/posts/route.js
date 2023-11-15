import Post from '../../../models/Post'
import connect from '../../../utils/db'
import { NextResponse } from 'next/server'

export const GET = async(request) => {

    const url = new URL(request.url)
    const username = url.searchParams.get('username')

    try {
        
        await connect()
        const posts = await Post.find(username && { username })

        return new NextResponse(JSON.stringify(posts), {status: 200})

    } catch (error) {
        console.log(error)
        return new NextResponse('Error in responce of DB', {status: 500})
    }
}

export const POST = async(request) => {

    const body = request.json()
    const newPost = new Post({
        title: body.title,
        desc: body.desc,
        img: body.image,
        content: body.textarea,
        username: body.username
    })

    try {
        
        await connect()
        await newPost.save()

        return new NextResponse('Post has been created', {status: 201})

    } catch (error) {
        console.log(error)
        return new NextResponse('Error in DB', {status: 500})
    }
}