'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { Product } from '@/types'

// Mock data for now - will be replaced with Supabase data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Air Max 90',
    description: 'Classic comfort meets modern style in this iconic sneaker.',
    price: 120.00,
    sizes: ['7', '8', '9', '10', '11'],
    images: ['/api/placeholder/150/150'],
    stock: 15,
    category: 'running',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Nike Dunk Low',
    description: 'Skate-inspired style meets everyday comfort.',
    price: 90.00,
    sizes: ['7', '8', '9', '10', '11'],
    images: ['/api/placeholder/150/150'],
    stock: 8,
    category: 'lifestyle',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Jordan 1 Retro',
    description: 'Legendary style returns with this retro basketball classic.',
    price: 170.00,
    sizes: ['7', '8', '9', '10', '11'],
    images: ['/api/placeholder/150/150'],
    stock: 5,
    category: 'basketball',
    created_at: new Date().toISOString()
  }
]

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>({})
  const { addItem } = useCartStore()

  useEffect(() => {
    // Simulate loading products
    setTimeout(() => {
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  const handleAddToCart = (product: Product) => {
    const size = selectedSize[product.id]
    if (!size) {
      alert('Please select a size')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      quantity: 1
    })
  }

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSize(prev => ({ ...prev, [productId]: size }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Product Image */}
              <div className="aspect-square bg-gray-200 relative">
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                {/* Placeholder for product image */}
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                {/* Price */}
                <div className="text-2xl font-bold text-gray-900 mb-3">
                  ${product.price.toFixed(2)}
                </div>
                
                {/* Size Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Size:</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeSelect(product.id, size)}
                        className={`px-3 py-1 border rounded text-sm ${
                          selectedSize[product.id] === size
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                  disabled={!selectedSize[product.id]}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found.</p>
          </div>
        )}
      </main>
    </div>
  )
}
