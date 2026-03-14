import { NextRequest } from 'next/server'

// In a real app, you'd decode and verify the JWT token
// For demo purposes, we'll use a simple token-based system

export function getToken(request: NextRequest): string | null {
  // Try to get token from Authorization header
  const authHeader = request.headers.get('authorization')
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7) // Remove 'Bearer ' prefix
  }
  
  // Try to get token from cookies
  const token = request.cookies.get('admin_token')?.value
  
  return token || null
}

export function verifyToken(token: string): { id: string; role: string } | null {
  // In a real app, you'd decode and verify the JWT token against your database
  // For demo purposes, we'll return a mock admin user
  try {
    // This is where you'd decode the JWT and check the user's role in your database
    if (token === 'demo-admin-token') {
      return { id: 'user123', role: 'admin' }
    }
    
    // Invalid token
    return null
  }
}
