'use client'

import Link from 'next/link'
import { ShoppingCart, User, Search } from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
import { useCartStore } from '@/store/cart-store'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function Header() {
  const { user, signOut } = useAuthStore()
  const { getTotalItems } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-orange-700 transition-all duration-200">
              NiceLand
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-blue-500 transition-colors duration-200" />
              <input
                type="text"
                placeholder="Search shoes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white hover:border-gray-400 transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:scale-105 transform">
              Products
            </Link>
            
            {/* Cart */}
            <Link href="/cart" className="relative group">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5 group-hover:text-blue-600 transition-colors duration-200" />
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center shadow-md">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-2">
                <Link href="/account">
                  <Button variant="ghost" size="sm" className="hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut} className="hover:text-red-600 hover:bg-red-50 transition-all duration-200">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/signin">
                  <Button variant="outline" size="sm" className="hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
