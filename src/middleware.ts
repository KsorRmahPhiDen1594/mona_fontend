import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLocation } from './lib/getLocation';
import { countryToLocale } from './lib/languageMap';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const privateRoutes = ["/dashboard", "/checkout"];
  const publicRoutes = [
    "/login",
    "/register",
    "/reset-password",
    "/forget-password",
    "/change-password"
  ];

  const { nextUrl: url, headers } = request;
  const cookie = request.cookies;

  let locale = cookie.get('locale')?.value;

  if (!locale) {
    let ip = headers.get('x-forwarded-for') || '127.0.0.1';
    console.log("ip", ip)
    if (ip.includes(',')) ip = ip.split(',')[0];

    const location = await getLocation(ip);
    const country = location?.country || 'US';
    locale = countryToLocale[country] || 'en';

    const response = NextResponse.next();
    response.cookies.set('locale', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,  // Lưu cookie trong 1 năm
    });
    return response;
  }

  const matchesRoute = (path: string, routes: string[]) => {
    return routes.some(route => {
      if (route === path) return true;
      if (route.endsWith('/')) {
        return path.startsWith(route);
      }
      return false;
    });
  };

  const isPrivateRoute = matchesRoute(path, privateRoutes);
  const isPublicRoute = matchesRoute(path, publicRoutes);

  const token = request.cookies.get('token')?.value || '';
  const from = request.cookies.get('from')?.value || "/dashboard";

  if (isPrivateRoute && !token) {
    const fullUrl = path + request.nextUrl.search; // Kết hợp pathname với query parameters
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set("from", fullUrl, { path: '/' });
    return response;
  }

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL(from, request.url));
  }

  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static (public static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|static).*)',
  ],
};
