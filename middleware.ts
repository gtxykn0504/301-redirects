import { type NextRequest, NextResponse } from "next/server"
import { redirectRules } from "./lib/redirect-config"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""
  const pathname = request.nextUrl.pathname

  const rule = redirectRules[hostname as keyof typeof redirectRules]

  if (rule) {
    let redirectUrl: string | null = null

    if (rule.type === "full") {
      redirectUrl = rule.target
    } else if (rule.type === "path") {
      redirectUrl = rule.routes[pathname as keyof typeof rule.routes] || null
    }

    if (redirectUrl) {
      return NextResponse.redirect(redirectUrl, { status: 301 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/api|favicon.ico).*)"],
}
