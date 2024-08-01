import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    if (request.nextUrl.locale === 'default') {
        const locale = 'en'
        return NextResponse.redirect(new URL(`/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url))
    }
    return NextResponse.next()
    
}