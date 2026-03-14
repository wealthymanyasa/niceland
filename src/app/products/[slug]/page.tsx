'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ProductImage } from '@/components/ui/product-image'
import { useCartStore } from '@/store/cart-store'
import { useAuthStore } from '@/store/auth-store'
import { Heart, Share2, Truck, Shield, Star, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'

export default function ProductDetail() {
  const [product, setProduct] = useState<any>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [addedToCart, setAddedToCart] = useState(false)
  const [addedToWishlist, setAddedToWishlist] = useState(false)
  
  const { slug } = useParams()
  const router = useRouter()
  const { addItem } = useCartStore()
  const { user } = useAuthStore()

  useEffect(() => {
    loadProduct()
  }, [slug])

  const loadProduct = async () => {
    try {
      // Mock product data - in real app, fetch from API
      const mockProduct = {
        id: slug,
        name: 'Premium Running Shoe',
        description: 'Experience ultimate comfort and performance with our premium running shoes. Designed for athletes who demand the best in footwear technology, these shoes provide exceptional cushioning, support, and style for your daily runs and competitive races.',
        price: 129.99,
        originalPrice: 159.99,
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1551107696-a4b0bf5a5f0c?w=800&q=80&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80&auto=format&fit=crop'
        ],
        sizes: ['7', '8', '9', '10', '11', '12'],
        category: 'running',
        stock: 15,
        rating: 4.5,
        reviews: 128,
        features: [
          'Advanced cushioning technology',
          'Breathable mesh upper',
          'Durable rubber outsole',
          'Lightweight design',
          'Enhanced traction'
        ],
        specifications: {
          'Material': 'Synthetic mesh and rubber',
          'Weight': '9.5 oz',
          'Drop': '8mm',
          'Surface': 'Road',
          'Activity': 'Running'
        }
      }
      
      setProduct(mockProduct)
      setSelectedSize(mockProduct.sizes[0])
    } catch (error) {
      console.error('Failed to load product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      size: selectedSize,
      quantity: quantity
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleAddToWishlist = () => {
    if (!user) {
      router.push('/auth/signin')
      return
    }
    
    setAddedToWishlist(!addedToWishlist)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Product link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading product...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Product Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the product you're looking for.</p>
            <Button
              onClick={() => router.push('/products')}
              className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 hover:bg-blue-50 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <ProductImage 
                  images={product.images} 
                  name={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image: string, index: number) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-white border-2 border-gray-200 hover:border-blue-500 transition-colors duration-200 cursor-pointer">
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleAddToWishlist}
                    className={`hover:bg-red-50 ${addedToWishlist ? 'text-red-600' : 'hover:text-red-600'}`}
                  >
                    <Heart className={`h-5 w-5 ${addedToWishlist ? 'fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews})</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Select Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400 text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                    className="w-16 text-center border-0 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stock} in stock
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize || product.stock === 0}
                className={`w-full py-4 text-lg font-bold rounded-full transition-all duration-300 ${
                  addedToCart
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white'
                } ${!selectedSize || product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {addedToCart ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-2">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    </div>
                    Added to Cart!
                  </div>
                ) : (
                  <div className="flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </div>
                )}
              </Button>

              {product.stock === 0 && (
                <p className="text-center text-red-600 font-medium">
                  This product is currently out of stock
                </p>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center text-center">
                <Truck className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center text-center">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Secure Payment</span>
              </div>
              <div className="flex items-center text-center">
                <Heart className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-sm text-gray-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8">
              <button className="pb-4 border-b-2 border-blue-600 text-blue-600 font-medium">
                Specifications
              </button>
              <button className="pb-4 text-gray-600 hover:text-gray-900 font-medium">
                Reviews
              </button>
              <button className="pb-4 text-gray-600 hover:text-gray-900 font-medium">
                Shipping
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 capitalize">{key}</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
