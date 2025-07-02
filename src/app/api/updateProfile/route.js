import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const body = await req.json();

        const { email, name, image } = body;
        if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

        const userCollection = dbConnect(collectionNameObj.userCollection);

        const result = await userCollection.updateOne(
            { email }, // Filter document by email
            { $set: { name, image } }, // Fields to update
            { upsert: true } // Optional: creates new document if not found
        );

        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error("Update Error:", error);
        return NextResponse.json({ error: "Failed to update user profile" }, { status: 500 });
    }
};
