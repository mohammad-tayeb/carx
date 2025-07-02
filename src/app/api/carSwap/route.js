import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const carCollection = dbConnect(collectionNameObj.carCollection);
    const cars = await carCollection.find().toArray();

    return NextResponse.json({ cars });
};
