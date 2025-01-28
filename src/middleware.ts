import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export default function middleware(request: NextRequest) {
    // get token from cookies
    const token = request.cookies.get('authjs.session-token')
    const pathname = request.nextUrl.pathname

    console.log({
        token: token?.value,
        pathname
    })

    if (pathname === '/auth' && token) {
        return NextResponse.redirect(new URL(getUrl('/app')))
    }

    if (pathname.includes('/app') && !token) {
        return NextResponse.redirect(new URL(getUrl('/auth')))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}