import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const body = await req.json()
    const testDriveCollection = dbConnect(collectionNameObj.testDriveCollection)
    const result = await testDriveCollection.insertOne(body)
    return NextResponse.json(result)
}