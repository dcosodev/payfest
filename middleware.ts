export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/kyc/:path*",
    "/credits/:path*",
    "/qr/:path*"
  ]
}