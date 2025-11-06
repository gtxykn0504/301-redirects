import { type NextRequest, NextResponse } from "next/server"
import { redirectRules } from "./lib/redirect-config"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const pathname = request.nextUrl.pathname

  console.log("[v0] Middleware triggered - hostname:", hostname, "pathname:", pathname)

  const rule = redirectRules[hostname as keyof typeof redirectRules]

  if (rule) {
    let redirectUrl: string | null = null

    if (rule.type === "full") {
      redirectUrl = rule.target
    } else if (rule.type === "path") {
      redirectUrl = rule.routes[pathname as keyof typeof rule.routes] || null
      console.log("[v0] Path-based routing - looking for:", pathname, "found:", redirectUrl)
    }

    if (redirectUrl) {
      console.log("[v0] Redirecting to:", redirectUrl)
      return NextResponse.redirect(redirectUrl, { status: 301 })
    } else if (rule.type === "path") {
      console.log("[v0] No matching path found for:", pathname, "on domain:", hostname)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/api|favicon.ico).*)"],
}
