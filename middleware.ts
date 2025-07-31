import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip password protection for static assets
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/favicon') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if user is already authenticated
  const authCookie = request.cookies.get('simpl-auth')
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next()
  }

  // If accessing the auth page, allow it
  if (request.nextUrl.pathname === '/auth') {
    return NextResponse.next()
  }

  // Redirect to auth page
  const url = request.nextUrl.clone()
  url.pathname = '/auth'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 