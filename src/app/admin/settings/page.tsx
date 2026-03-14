'use client'

import { useState, useEffect } from 'react'
import { AdminHeader } from '@/components/layout/admin-header'
import { Button } from '@/components/ui/button'
import { Settings, Save, Eye, EyeOff, Bell, Shield, Palette, Globe, Database } from 'lucide-react'

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'NiceLand',
    siteDescription: 'Your premier destination for premium footwear',
    email: 'admin@niceland.com',
    notifications: true,
    maintenanceMode: false,
    allowRegistration: true,
    defaultCurrency: 'USD',
    timezone: 'UTC',
    theme: 'light'
  })

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    try {
      // Simulate API call to save settings
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Settings saved:', settings)
    } catch (error) {
      console.error('Failed to save settings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <AdminHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Settings
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Configure your store settings and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* General Settings */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <Settings className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">General Settings</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                    <input
                      type="text"
                      value={settings.siteName}
                      onChange={(e) => handleInputChange('siteName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                    <textarea
                      rows={3}
                      value={settings.siteDescription}
                      onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Appearance Settings */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <Palette className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">Appearance</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                    <select
                      value={settings.theme}
                      onChange={(e) => handleInputChange('theme', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                    <select
                      value={settings.defaultCurrency}
                      onChange={(e) => handleInputChange('defaultCurrency', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="JPY">JPY (¥)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => handleInputChange('timezone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="UTC">UTC</option>
                      <option value="EST">EST</option>
                      <option value="PST">PST</option>
                      <option value="GMT">GMT</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">Security</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:border-blue-600 hover:text-blue-600"
                  >
                    <Database className="h-4 w-4 mr-2" />
                    Backup Database
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:border-orange-600 hover:text-orange-600"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Clear Cache
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:border-red-600 hover:text-red-600"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Security Audit
                  </Button>
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-gray-900">System Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Server Status</span>
                    <span className="text-sm font-medium text-green-600">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Database</span>
                    <span className="text-sm font-medium text-green-600">Connected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Last Backup</span>
                    <span className="text-sm font-medium text-gray-600">2 hours ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Storage Used</span>
                    <span className="text-sm font-medium text-orange-600">68%</span>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <Button
                onClick={handleSave}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
