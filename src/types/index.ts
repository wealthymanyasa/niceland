export interface Product {
  id: string
  name: string
  description: string
  price: number
  sizes: string[]
  images: string[]
  stock: number
  category: string
  created_at: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  size: string
  quantity: number
}

export interface Order {
  id: string
  user_id: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  created_at: string
}

export interface User {
  id: string
  email: string
  name: string
  shoe_size?: string
  preferences?: Record<string, any>
  created_at: string
}

export interface AdminUser extends User {
  role: 'admin'
}

export interface ApiResponse<T> {
  data: T
  error?: string
  message?: string
}

export interface StripePaymentIntent {
  client_secret: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}
