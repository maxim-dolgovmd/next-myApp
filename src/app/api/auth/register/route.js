import User from '../../../../models/User'
import connect from '../../../../utils/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export const POST = async (request) => {

    console.log(request.json())
    const {userName, password, email} = request.json()

    await connect()

    // const password = await req.body.password
    // const email = await req.body.password
    // const userName = await req.body.password
    console.log(password, email, userName)
    // const passwordHash = await req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
        name: userName,
        email: email,
        password: hashedPassword
    })

    console.log(newUser)

    try {
        await newUser.save()
        return new NextResponse('User has been created', {
            status: 201
        })   
    } catch (error) {
        console.log(error)
        return new NextResponse(error.message, {
            status: 500
        })
    }
}