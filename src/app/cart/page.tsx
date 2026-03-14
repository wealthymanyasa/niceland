'use client'

import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { Trash2, Plus, Minus } from 'lucide-react'

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
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <div className="mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                <span className="text-3xl">🛒</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any shoes to your cart yet.</p>
            <Button onClick={() => window.location.href = '/products'}>
              Continue Shopping
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-200 rounded flex-shrink-0">
                      {/* Placeholder for product image */}
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Size: {item.size}</p>
                      <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.size, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.size, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        
                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id, item.size)}
                          className="ml-auto text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} (Size: {item.size}) x{item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = '/products'}
                  >
                    Continue Shopping
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full text-red-600 hover:text-red-700"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
