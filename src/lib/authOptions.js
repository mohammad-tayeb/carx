import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { loginUser } from "@/app/actions/auth/loginUser";
import dbConnect, { collectionNameObj } from "./dbConnect";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                const user = await loginUser(credentials)
                console.log(user)

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    //for not using the default login or register pages
    pages: {
        signIn: '/login',
    },
    //for getting the response after a user login/signup successfully
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log({ user, account, profile, email, credentials })
            if (account) {
                const { providerAccountId, provider } = account
                const { email, image, name } = user   //user_email ===> email
                const userCollection = await dbConnect(collectionNameObj.userCollection)
                const isExisted = await userCollection.findOne({ providerAccountId })
                if (!isExisted) {
                    const payload = { providerAccountId, provider, email, image, name }
                    await userCollection.insertOne(payload)
                }
            }

            return true
        },
    }
}
