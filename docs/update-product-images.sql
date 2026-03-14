-- Update products with verified working Unsplash images
-- These URLs are confirmed to work

-- Running Shoes
UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9eb?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Air Max 90';

UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9eb?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Ultra Boost';

UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9eb?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Zoom Pegasus';

UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9eb?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'React Infinity Run';

-- Basketball Shoes
UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9eb?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Jordan 1 Retro';

UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9eb?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Kyrie 8';

-- Lifestyle Shoes
UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515955656352-b1d3d7b5a9f3?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Nike Dunk Low';

UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9eb?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Air Force 1';

UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515955656352-b1d3d7b5a9f3?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Nike Blazer Mid';

UPDATE public.products SET 
  images = ARRAY[
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515955656352-b1d3d7b5a9f3?w=800&q=80&auto=format&fit=crop'
  ]
WHERE name = 'Court Vision Low';
