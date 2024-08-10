import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("signedin")?.value;
  if (!token) {
    if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/signup") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    if(request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/home', '/']
};
