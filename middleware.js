import { NextResponse } from 'next/server';

const PROTECTED_ROUTES = [];
const AUTH_ROUTES = ['/login', '/register'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Replace 'session' with your actual auth cookie name
  const token = request.cookies.get('session')?.value;

  const isProtected = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  if (isProtected && !token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
