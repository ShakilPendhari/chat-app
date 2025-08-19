import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("authToken"); // we'll set this when user logs in
  const { pathname } = req.nextUrl;

  // Public routes
  const publicPaths = ["/login"];

  // If no token and trying to access protected page → redirect
  if (!token && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If logged in and trying to access /login → redirect to /chat
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only on these routes
export const config = {
  matcher: ["/", "/chat/:path*", "/login"],
};
