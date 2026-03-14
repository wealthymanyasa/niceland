'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth-store'
import { useCartStore } from '@/store/cart-store'
import { supabase } from '@/lib/supabase'
import { User, Mail, Phone, MapPin, Package, Heart, Settings, LogOut, ShoppingBag, CreditCard, Truck, Shield } from 'lucide-react'

export default function Account() {
  const [user, setUser] = useState<any>(null)
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const router = useRouter()
  const { user: authUser, signOut } = useAuthStore()
  const { getTotalItems } = useCartStore()

  useEffect(() => {
    if (!authUser) {
      router.push('/auth/signin')
      return
    }
    
    loadUserData()
    loadOrders()
  }, [authUser, router])

  const loadUserData = async () => {
    try {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single()
      
      setUser(data || authUser)
    } catch (error) {
      console.error('Failed to load user data:', error)
      setUser(authUser)
    } finally {
      setLoading(false)
    }
  }

  const loadOrders = async () => {
    try {
      const { data } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', authUser.id)
        .order('created_at', { ascending: false })
      
      setOrders(data || [])
    } catch (error) {
      console.error('Failed to load orders:', error)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading account...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              My Account
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Manage your profile, orders, and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg sticky top-4">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{user?.name || 'User'}</h2>
                  <p className="text-gray-600">{user?.email}</p>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors duration-200 ${
                      activeTab === 'overview' 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <User className="h-4 w-4 mr-3" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors duration-200 ${
                      activeTab === 'orders' 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Package className="h-4 w-4 mr-3" />
                    Orders
                  </button>
                  <button
                    onClick={() => setActiveTab('wishlist')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors duration-200 ${
                      activeTab === 'wishlist' 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Heart className="h-4 w-4 mr-3" />
                    Wishlist
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors duration-200 ${
                      activeTab === 'settings' 
                        ? 'bg-blue-50 text-blue-600 font-medium' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    Settings
                  </button>
                </nav>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    onClick={handleSignOut}
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-gray-900">Account Overview</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-blue-50 rounded-xl">
                        <ShoppingBag className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-blue-600">{orders.length}</div>
                        <div className="text-sm text-gray-600">Total Orders</div>
                      </div>
                      
                      <div className="text-center p-6 bg-green-50 rounded-xl">
                        <Package className="h-8 w-8 text-green-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-green-600">{getTotalItems()}</div>
                        <div className="text-sm text-gray-600">Cart Items</div>
                      </div>
                      
                      <div className="text-center p-6 bg-orange-50 rounded-xl">
                        <Heart className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-orange-600">0</div>
                        <div className="text-sm text-gray-600">Wishlist Items</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-gray-900">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={user?.name || ''}
                          readOnly
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={user?.email || ''}
                          readOnly
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          placeholder="Add your phone number"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input
                          type="text"
                          placeholder="Add your address"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full">
                        Update Information
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Order History</h3>
                  
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h4>
                      <p className="text-gray-600 mb-6">Start shopping to see your order history</p>
                      <Button
                        onClick={() => router.push('/products')}
                        className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full"
                      >
                        Start Shopping
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors duration-200">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="font-medium text-gray-900">Order #{order.id}</div>
                              <div className="text-sm text-gray-600">{new Date(order.created_at).toLocaleDateString()}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-gray-900">${order.total || '0.00'}</div>
                              <div className="text-sm text-green-600 font-medium">Delivered</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-600">
                              {order.items?.length || 0} items
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">My Wishlist</h3>
                  
                  <div className="text-center py-12">
                    <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h4>
                    <p className="text-gray-600 mb-6">Save items you love for later</p>
                    <Button
                      onClick={() => router.push('/products')}
                      className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full"
                    >
                      Browse Products
                    </Button>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-gray-900">Account Settings</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Notifications</label>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" defaultChecked />
                            <span className="text-gray-700">Order updates</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" defaultChecked />
                            <span className="text-gray-700">Promotional offers</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-3" />
                            <span className="text-gray-700">Newsletter</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="h-4 w-4 mr-3" />
                          Change Password
                        </Button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Methods</label>
                        <Button variant="outline" className="w-full justify-start">
                          <CreditCard className="h-4 w-4 mr-3" />
                          Manage Payment Methods
                        </Button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Addresses</label>
                        <Button variant="outline" className="w-full justify-start">
                          <MapPin className="h-4 w-4 mr-3" />
                          Manage Addresses
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
