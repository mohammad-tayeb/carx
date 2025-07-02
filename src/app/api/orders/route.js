import { authOptions } from "@/lib/authOptions"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    const session = await getServerSession(authOptions)
    if (session) {
        const email = session?.user?.email
        const orderCollection = dbConnect(collectionNameObj.orderCollection)
        const result = await orderCollection.find({ userEmail: email }).toArray()
        return NextResponse.json(result)
    }

    // 🔐 No session - respond with empty array and 401
    return NextResponse.json([], { status: 401 })
}


export const POST = async (req) => {
    const body = await req.json()
    const orderCollection = dbConnect(collectionNameObj.orderCollection)
    const result = await orderCollection.insertOne(body)
    return NextResponse.json(result)
}