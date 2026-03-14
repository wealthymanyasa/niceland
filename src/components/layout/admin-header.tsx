'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Settings, LogOut, Home, Package, Users, BarChart3 } from 'lucide-react'

export function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/admin" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-black tracking-tight group-hover:text-blue-600 transition-colors duration-200">
              Admin Panel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/admin"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <Package className="h-4 w-4 mr-2" />
              Products
            </Link>
            <Link
              href="/admin/analytics"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
            <Link
              href="/"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <Home className="h-4 w-4 mr-2" />
              Store
            </Link>
            <Button
              variant="outline"
              className="hover:border-red-600 hover:text-red-600"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link
                href="/admin"
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
              <Link
                href="/admin/products"
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Package className="h-4 w-4 mr-2" />
                Products
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
              <Link
                href="/"
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4 mr-2" />
                Store
              </Link>
              <Button
                variant="outline"
                className="w-full hover:border-red-600 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
