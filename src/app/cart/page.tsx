'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { ProductImage } from '@/components/ui/product-image'
import { useCartStore } from '@/store/cart-store'
import { Trash2, Plus, Minus, Heart, Share2 } from 'lucide-react'

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore()

  const handleQuantityChange = (id: string, size: string, change: number) => {
    const item = items.find(item => item.id === id && item.size === size)
    if (item) {
      updateQuantity(id, size, item.quantity + change)
    }
  }

  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto flex items-center justify-center shadow-lg">
                <span className="text-5xl">🛒</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your cart is empty</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
              Looks like you haven't added any shoes to your cart yet.
            </p>
            <Link href="/products">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Review your selected items and proceed to checkout
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                    <div className="relative bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex gap-6">
                        {/* Product Image */}
                        <div className="w-32 h-32 flex-shrink-0">
                          <ProductImage 
                            images={[item.image || '/placeholder-shoe.png']} 
                            name={item.name}
                            className="rounded-xl overflow-hidden shadow-md"
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                              {item.name}
                            </h3>
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-sm font-medium text-gray-700 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full border border-blue-200">
                              Size: {item.size}
                            </span>
                            <span className="text-sm text-gray-600">
                              Category: {item.category || 'Shoes'}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-xl font-bold text-gray-900">
                              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                                ${item.price.toFixed(2)}
                              </span>
                            </p>
                            <p className="text-sm text-gray-600 font-medium">
                              Total: ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, item.size, -1)}
                                className="h-10 w-10 p-0 rounded-lg hover:border-blue-600 hover:text-blue-600"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleQuantityChange(item.id, item.size, 1)}
                                className="h-10 w-10 p-0 rounded-lg hover:border-blue-600 hover:text-blue-600"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            {/* Remove Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id, item.size)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg font-medium"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 sticky top-4">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                      <span className="text-gray-600 leading-relaxed">
                        {item.name} (Size: {item.size}) x{item.quantity}
                      </span>
                      <span className="font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between mb-8">
                    <span className="text-xl font-semibold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="mb-2">
                      <Link href="/checkout">
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300" 
                          size="lg"
                        >
                          Proceed to Checkout
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="/products">
                        <Button
                          variant="outline"
                          className="w-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 font-medium px-4 py-4 rounded-xl border-2"
                        >
                          Continue Shopping
                        </Button>
                      </Link>
                      
                      <Button
                        variant="outline"
                        className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-300 font-medium px-4 py-4 rounded-xl border-2"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
