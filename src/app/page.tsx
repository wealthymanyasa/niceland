import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to NiceLand
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your AI-powered shoe shopping experience starts here. Discover the perfect pair with our intelligent recommendations.
          </p>
          <div className="space-x-4">
            <Button size="lg">Shop Now</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NiceLand?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Smart recommendations tailored to your style and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Fit</h3>
              <p className="text-gray-600">Advanced size recommendations for the perfect fit.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your doorstep.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Pair?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who found their ideal shoes with NiceLand.</p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Start Shopping
          </Button>
        </section>
      </main>
    </div>
  )
}
