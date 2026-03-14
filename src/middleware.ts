import { NextRequest, NextResponse } from 'next/server'
import { getToken, verifyToken } from '@/lib/auth'

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Public routes that don't need protection
  const publicRoutes = ['/auth/signin', '/auth/signup', '/auth/forgot-password']
  
  // API routes that don't need protection
  const apiRoutes = ['/api/chat', '/api/products', '/api/auth']

  // Check if the route is public or API
  if (publicRoutes.some(route => pathname.startsWith(route)) || apiRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  // Get the token from the request
  const token = getToken(request)
  
  // If no token, allow access to signin/signup (but not other admin routes)
  if (!token) {
    if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
    return NextResponse.next()
  }

  // If there's a token, validate it and check user role
  try {
    const user = verifyToken(token)
    
    // If user doesn't have admin role and trying to access admin routes, redirect to signin
    if (pathname.startsWith('/admin') && (!user || user.role !== 'admin')) {
      return NextResponse.redirect(new URL('/auth/signin?error=unauthorized', request.url))
    }
    
    // Allow access to admin routes for admin users
    return NextResponse.next()
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/auth/signin?error=server_error', request.url))
  }
}
