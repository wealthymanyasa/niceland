'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AdminHeader } from '@/components/layout/admin-header'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Eye, Package, Star, ArrowUp, ArrowDown } from 'lucide-react'
import { getProducts } from '@/lib/products'

export default function AdminAnalytics() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('7d')

  useEffect(() => {
    loadAnalytics()
  }, [])

  const loadAnalytics = async () => {
    try {
      const fetchedProducts = await getProducts()
      setProducts(fetchedProducts)
    } catch (error) {
      console.error('Failed to load analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = () => {
    const totalProducts = products.length
    const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0)
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0)
    const lowStock = products.filter(p => p.stock < 5).length
    const outOfStock = products.filter(p => p.stock === 0).length
    const avgPrice = products.length > 0 ? totalValue / totalStock : 0
    
    return {
      totalProducts,
      totalValue,
      totalStock,
      lowStock,
      outOfStock,
      avgPrice,
      topCategories: products.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      recentProducts: products.slice(0, 5)
    }
  }

  const stats = calculateStats()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <AdminHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading analytics...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <AdminHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Track your store performance and customer insights
            </p>
          </div>

          {/* Time Range Selector */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Time Range:</label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">${stats.totalValue.toFixed(2)}</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>+12.5% from last month</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">1,234</div>
              <div className="flex items-center text-sm text-blue-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>+8.2% from last month</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Total Customers</h3>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">5,678</div>
              <div className="flex items-center text-sm text-purple-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>+15.3% from last month</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Conversion Rate</h3>
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">3.2%</div>
              <div className="flex items-center text-sm text-red-600">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>-2.1% from last month</span>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sales Chart */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Sales Overview</h3>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">Sales chart visualization</p>
                  <p className="text-sm text-gray-500">Integration with chart library needed</p>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Top Products</h3>
              <div className="space-y-4">
                {stats.recentProducts.slice(0, 5).map((product, index) => (
                  <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gray-200 rounded-lg mr-3 overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">${product.price}</div>
                      <div className="text-sm text-gray-500">{product.stock} in stock</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Category Distribution</h3>
              <div className="space-y-4">
                {Object.entries(stats.topCategories).map(([category, count]) => (
                  <div key={category} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 ${
                        category === 'running' ? 'bg-blue-600' :
                        category === 'basketball' ? 'bg-orange-600' :
                        category === 'lifestyle' ? 'bg-purple-600' :
                        category === 'training' ? 'bg-green-600' :
                        'bg-gray-600'
                      }`}></div>
                      <span className="font-medium text-gray-900 capitalize">{category}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-900 mr-2">{count}</span>
                      <div className="text-sm text-gray-500">products</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Status */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Inventory Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">In Stock</span>
                  </div>
                  <div className="font-bold text-green-600">
                    {stats.totalProducts - stats.lowStock - stats.outOfStock}
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-600 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">Low Stock</span>
                  </div>
                  <div className="font-bold text-yellow-600">{stats.lowStock}</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-900">Out of Stock</span>
                  </div>
                  <div className="font-bold text-red-600">{stats.outOfStock}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">New product added</div>
                    <div className="text-sm text-gray-500">Nike Air Max 90</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">2 minutes ago</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">New order received</div>
                    <div className="text-sm text-gray-500">Order #1234</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">15 minutes ago</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">New customer registered</div>
                    <div className="text-sm text-gray-500">john.doe@example.com</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">1 hour ago</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
