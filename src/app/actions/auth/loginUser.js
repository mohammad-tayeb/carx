"use server"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import bcrypt from "bcrypt"

export const loginUser = async ({ email, password }) => {
  const userCollection = dbConnect(collectionNameObj.userCollection)
  const user = await userCollection.findOne({ email })

  if (!user) {
    console.log("No user found for", email)
    return null
  }

  // Simple password comparison (plain text, NOT safe for production)
  const passwordOk = await bcrypt.compare(password, user.password)

  if (!passwordOk) {
    console.log("Password mismatch for", email)
    return null
  }
  return user  //return user to authorize function
}
