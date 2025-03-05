import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    const { pathname, searchParams } = req.nextUrl;

    if (pathname.startsWith("/login") || pathname.startsWith("/api") || pathname.startsWith("_next") || pathname.startsWith("/favicon.ico") || pathname.startsWith("/images")) {
      return NextResponse.next();
    }

    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const loginUrl = new URL("/login", req.url);
      
      const originalUrl = req.nextUrl.origin + pathname;
      if (!searchParams.has("callbackUrl")) {
        loginUrl.searchParams.set("callbackUrl", originalUrl);
      }
      
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|favicon.ico|login|_next|images|fonts).*)", 
  ],
};
