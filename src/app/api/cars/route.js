import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  // Reads filter params from request URL.
  // Builds MongoDB query filter based on brand and type
  const url = new URL(req.url);
  const brand = url.searchParams.get("brand");
  const type = url.searchParams.get("type");
  const page = parseInt(url.searchParams.get("page")) || 1;
  const limit = parseInt(url.searchParams.get("limit")) || 6;
  const skip = (page - 1) * limit;

  const carCollection = await dbConnect(collectionNameObj.carCollection);
  const filters = {};

  if (brand && brand !== "allbrand") {
    filters.make = { $regex: new RegExp(`^${brand}$`, "i") };
  }

  if (type && type !== "alltype") {
    filters.class = { $regex: new RegExp(`^${type}$`, "i") };
  }
  // Finds cars matching the filters.
  // Skips documents for pagination and limits results to 6 per page.
  // Gets total count for pagination.
  const cars = await carCollection.find(filters).skip(skip).limit(limit).toArray();
  const total = await carCollection.countDocuments(filters);

  return NextResponse.json({ cars, total });
};
