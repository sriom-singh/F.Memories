import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Allow NextAuth & public pages
        if (
          pathname.startsWith("/api/auth") ||
          pathname === "/login" ||
          pathname === "/register"
        ) {
          return true;
        }

        // Public pages
        if (
          pathname === "/" ||
          pathname === "/about-us" ||
          pathname === "/cancellation-and-refund" ||
          pathname === "/privacy-policy" ||
          pathname === "/terms-and-conditions" ||
          pathname.startsWith("/india") ||
          pathname.startsWith("/global")
        ) {
          return true;
        }

        // All other pages require auth
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/admin/package/:path*"],
};
