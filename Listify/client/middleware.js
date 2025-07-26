import { NextResponse } from "next/server";


export const middleware = (req) => {
    const authToken = req.cookies.get("token");
    const url = req.url;

    if(!authToken && url.includes("/dashboard")){
        return NextResponse.redirect(new URL('/auth', req.url))
    }
}