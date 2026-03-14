import { NextRequest, NextResponse } from 'next/server'
import { getToken, verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const token = getToken(request)
    
    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      )
    }

    const user = verifyToken(token)
    
    if (!user || user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      )
    }

    return NextResponse.json({
      user: {
        id: user.id,
        role: user.role
      },
      message: 'Authenticated successfully'
    })
  } catch (error) {
    console.error('Admin auth error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // In a real app, you'd verify credentials against your database
    // For demo purposes, we'll use mock credentials
    if (email === 'admin@niceland.com' && password === 'admin123') {
      const token = 'demo-admin-token'
      
      // Set token in cookie
      const response = NextResponse.json({
        user: {
          id: 'user123',
          email: email,
          role: 'admin'
        },
        token,
        message: 'Login successful'
      })

      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 // 24 hours
      })

      return response
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: 'Logout successful'
    })

    // Clear admin token cookie
    response.cookies.set('admin_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0
    })

    return response
  } catch (error) {
    console.error('Admin logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
