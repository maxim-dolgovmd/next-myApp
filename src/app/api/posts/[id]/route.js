import Post from '../../../../models/Post'
import connect from '../../../../utils/db'
import { NextResponse } from 'next/server'

export const GET = async(req, {params}) => {

    console.log(req)
    const id = params.id

    try {
        
        await connect()
        const posts = await Post.findById(id)

        return new NextResponse(JSON.stringify(posts), {status: 200})

    } catch (error) {
        console.log(error)
        return new NextResponse('Error in responce of DB', {status: 500})
    }
}

export const DELETE = async(req, {params}) => {

    const deleteId = params.id

    try {
        
        await connect()
        await Post.findByIdAndDelete(deleteId)

        return new NextResponse('Post has been deleted', {status: 200})

    } catch (error) {
        console.log(error)
        return new NextResponse('Failed to deleted post', {status: 500})
    }
}