import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              AI-Powered Shopping Experience
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Step Into
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Greatness
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Experience the future of footwear with AI-powered recommendations and personalized shopping
              </p>
            </div>
            
            {/* CTA Buttons - Made more visible */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-10 py-6 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm"
              >
                Explore Collection
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-white bg-white/20 backdrop-blur-md text-gray-900 hover:bg-white/30 hover:border-white/40 font-bold px-10 py-6 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                Try AI Assistant
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Why Choose NiceLand?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect pair with our intelligent shopping experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered Shopping</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Get personalized recommendations based on your style, preferences, and needs using advanced AI technology
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="mr-2">→</span>
                  Smart recommendations
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">👟</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Perfect Fit Guarantee</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced size recommendations and fit guidance ensure maximum comfort and performance
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span className="mr-2">→</span>
                  Size optimization
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Quality</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Curated selection of high-quality shoes from top brands with verified authenticity
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span className="mr-2">→</span>
                  Premium materials
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community of satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Shoe Models</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl opacity-20 blur-3xl"></div>
              
              {/* Content */}
              <div className="relative bg-white/95 backdrop-blur-xl p-12 md:p-16 rounded-3xl text-center border border-white/20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Ready to Find Your Perfect Pair?
                </h2>
                <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                  Start your journey with NiceLand today and experience the future of shoe shopping
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-10 py-6 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                  >
                    Start Shopping
                  </Button>
                  <Button 
                    size="lg"
                    className="border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-bold px-10 py-6 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                  >
                    Browse Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Preview */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Trending Now
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our most popular styles
            </p>
          </div>
          
          <div className="text-center mb-8">
            <Button 
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NiceLand
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your premier destination for premium footwear with AI-powered shopping experiences.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                <span className="text-sm text-gray-400">Step Into Greatness</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/products" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    Products <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    Shopping Cart <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="/account" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    My Account <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="/support" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                    Customer Support <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 text-white">Customer Service</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <Phone className="mr-3 h-4 w-4 text-blue-400" />
                  <span>1-800-NICELAND</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Mail className="mr-3 h-4 w-4 text-blue-400" />
                  <span>support@niceland.com</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <MapPin className="mr-3 h-4 w-4 text-blue-400" />
                  <span>Global Shipping Available</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-200 transform hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 transform hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold px-6 py-2 rounded-lg">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 NiceLand. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Shipping Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Return Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
