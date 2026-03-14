import { create } from 'zustand'
import { User } from '@supabase/supabase-js'
import { User as CustomUser } from '@/types'

interface AuthStore {
  user: CustomUser | null
  loading: boolean
  setUser: (user: CustomUser | null) => void
  setLoading: (loading: boolean) => void
  signOut: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  loading: false,
  
  setUser: (user) => set({ user }),
  
  setLoading: (loading) => set({ loading }),
  
  signOut: async () => {
    const { supabase } = await import('@/lib/supabase')
    await supabase.auth.signOut()
    set({ user: null })
  },
}))
