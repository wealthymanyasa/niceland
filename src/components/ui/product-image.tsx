'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ZoomIn, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductImageProps {
  images: string[]
  name: string
  className?: string
}

export function ProductImage({ images, name, className = '' }: ProductImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Use a fallback image if no images or if there's an error
  const currentImage = (!images || images.length === 0 || imageError) 
    ? 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80&auto=format&fit=crop'
    : images[currentImageIndex] || 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80&auto=format&fit=crop'

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div 
      className={`relative aspect-square overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Product Image */}
      <div className="relative w-full h-full">
        <Image
          src={currentImage}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority
          onError={handleImageError}
          unoptimized={false}
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Hover Actions */}
      <div className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <Button
          size="sm"
          className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
        >
          <ZoomIn className="h-4 w-4 mr-1" />
          Quick View
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-white/90 hover:bg-white border-gray-300 text-gray-700 shadow-lg"
        >
          <Heart className="h-4 w-4 mr-1" />
          Save
        </Button>
      </div>

      {/* Image Thumbnails */}
      {images && images.length > 1 && !imageError && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}

      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-900 rounded-full shadow-sm">
          New
        </span>
      </div>
    </div>
  )
}
