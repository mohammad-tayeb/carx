// middleware.ts
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
    const token = await getToken({ req }) // 🔥 use await
    if (token) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: [
        '/orders',
        '/rents',
        // '/checkout/:path*',
    ],
}
