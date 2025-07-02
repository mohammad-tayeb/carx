import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const phone = searchParams.get("phone")
    console.log("searced phone number:", phone)

    if (!phone) {
        return NextResponse.json({ message: "Phone number is required" }, { status: 400 })
    }

    try {
        const repairCollection = dbConnect(collectionNameObj.repairCollection)
        const result = await repairCollection.find({ phone }).toArray()
        return NextResponse.json(result)
    } catch (error) {
        console.error("Error fetching repair data:", error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}
