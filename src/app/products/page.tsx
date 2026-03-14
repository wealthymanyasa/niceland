'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { ProductImage } from '@/components/ui/product-image'
import { useCartStore } from '@/store/cart-store'
import { getProducts } from '@/lib/products'
import { Product } from '@/types'
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>({})
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { addItem } = useCartStore()

  const PRODUCTS_PER_PAGE = 12

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await getProducts()
        setProducts(fetchedProducts)
        setTotalPages(Math.ceil(fetchedProducts.length / PRODUCTS_PER_PAGE))
      } catch (error) {
        console.error('Failed to load products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
    const endIndex = startIndex + PRODUCTS_PER_PAGE
    return products.slice(startIndex, endIndex)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      quantity: 1,
      category: product.category
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our curated collection of premium shoes, designed for comfort, style, and performance.
            </p>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">Loading amazing products...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {getCurrentPageProducts().map((product) => (
                <div key={product.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden">
                    {/* Product Image */}
                    <ProductImage 
                      images={product.images} 
                      name={product.name}
                      className="w-full mb-6 rounded-xl"
                    />
                    
                    {/* Product Info */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full border border-blue-200">
                          {product.category}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-red-600 hover:bg-red-50 rounded-lg">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Price */}
                      <div className="text-2xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      
                      {/* Size Selection */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Size:</label>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSizeSelect(product.id, size)}
                              className={`px-3 py-2 border-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                                selectedSize[product.id] === size
                                  ? 'border-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                  : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-700'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Stock indicator */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className={`font-medium ${
                            product.stock > 10 ? 'text-green-600' : 
                            product.stock > 5 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {product.stock > 10 ? '✓ In Stock' : 
                             product.stock > 5 ? `⚠ Only ${product.stock} left` : 
                             `⚠ Low Stock (${product.stock})`}
                          </span>
                          <span className="text-gray-500">
                            {product.stock} available
                          </span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-bold px-6 py-3 rounded-full"
                          disabled={!selectedSize[product.id]}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {!selectedSize[product.id] ? 'Select Size' : 'Add to Cart'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
          {products.length === 0 && !loading && (
              <div className="text-center py-16">
                <div className="bg-white p-8 max-w-md mx-auto rounded-2xl shadow-lg border border-gray-200">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">📦</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">No products found</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We're currently updating our inventory. Check back soon for amazing shoes!
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full">
                    Notify Me When Available
                  </Button>
                </div>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 p-0 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-blue-600 to-orange-600 text-white'
                          : 'hover:border-blue-600 hover:text-blue-600'
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}

            {/* Products Info */}
            <div className="text-center mt-8 text-gray-600">
              Showing {getCurrentPageProducts().length} of {products.length} products
              {totalPages > 1 && (
                <span className="ml-2">
                  | Page {currentPage} of {totalPages}
                </span>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
