import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/lib/site";

const BLOG_HOST = siteConfig.blogHost;

function isBlogHost(host: string) {
  const hostname = host.split(":")[0];
  return hostname === BLOG_HOST || hostname === "blog.localhost";
}

function blogPublicPath(pathname: string) {
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return pathname.slice("/blog".length) || "/";
  }

  return pathname;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  if (isBlogHost(host)) {
    const publicPath = blogPublicPath(pathname);

    if (publicPath.startsWith("/api")) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = publicPath === "/" ? "/blog" : `/blog${publicPath}`;
    return NextResponse.rewrite(url);
  }

  if (process.env.NODE_ENV === "production") {
    if (pathname === "/blog" || pathname.startsWith("/blog/")) {
      const blogPath = pathname.replace(/^\/blog/, "") || "/";
      const destination = new URL(blogPath, siteConfig.blogUrl);
      return NextResponse.redirect(destination, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|logo.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
