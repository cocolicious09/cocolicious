const asset = (name) => `${import.meta.env.BASE_URL}${name}`

export const products = [
  {
    id: 'coir-pot',
    title: 'Coir Pot',
    type: 'Gardening',
    categories: ['gardening'],
    image: asset('Coir Pot.jpg'),
    description: 'Eco-friendly planting pot made from compressed coir fiber. Promotes healthy root growth and can be planted directly into soil.',
    price: 30
  },
  {
    id: 'coconut-coir',
    title: 'Coconut Coir',
    type: 'Gardening',
    categories: ['gardening'],
    image: asset('Coconut Coir.png'),
    description: 'Premium organic growing medium made from coconut husk fibers. Ideal for improving soil aeration, moisture retention, and plant growth.',
    price: 129
  },
  {
    id: 'coir-basket',
    title: 'Coir Basket',
    type: 'Home',
    categories: ['home'],
    image: asset('Basket.png'),
    description: 'Durable and handcrafted storage basket made from natural coconut fibers. Perfect for organizing household items or decorative use.',
    price: 100
  },
  {
    id: 'natural-door-mat',
    title: 'Natural Door Mat',
    type: 'Home',
    categories: ['home'],
    image: asset('Door Mat.jpg'),
    description: 'Tough and absorbent doormat made from coconut fiber. Effectively traps dirt and moisture while adding a natural look to your entrance.',
    price: 50
  },
  {
    id: 'coir-geotextiles',
    title: 'Coir Geotextiles',
    type: 'Eco Materials',
    categories: ['materials'],
    image: asset('Coir Geotextiles.jpeg'),
    description: 'Heavy-duty woven coir mat designed for soil erosion control, slope stabilization, and landscaping applications.',
    price: 300
  },
  {
    id: 'coir-wall-panel-board',
    title: 'Coir Wall Panel Board',
    type: 'Eco Materials',
    categories: ['materials'],
    image: asset('Wall.png'),
    description: 'Eco-friendly coir board panel used for wall finishing, insulation, and soundproofing. Strong, lightweight, and sustainable.',
    price: 250
  },
  {
    id: 'hanging-coir-basket-planter',
    title: 'Hanging Coir Basket Planter',
    type: 'Gardening',
    categories: ['gardening'],
    image: asset('Hanging Coir Basket.jpg'),
    description: 'A breathable and eco-friendly hanging planter made from natural coconut coir fibers for flowers, herbs, and trailing plants.',
    price: 100
  },
  {
    id: 'coir-bag',
    title: 'Coir Bag',
    type: 'Home',
    categories: ['home'],
    image: asset('Coir Bag.jpg'),
    description: 'Reusable and biodegradable coir bag designed for everyday use. Durable, stylish, and environmentally friendly.',
    price: 25
  },
  {
    id: 'coir-heavy-rope',
    title: 'Coir Heavy Rope',
    type: 'Home | Gardening | Eco Materials',
    categories: ['home', 'gardening', 'materials'],
    image: asset('Rope.jpg'),
    description: 'Strong and durable rope made from twisted coconut fibers. Ideal for gardening, construction, marine use, and DIY crafts.',
    price: 140
  },
  {
    id: 'egg-coir-husk',
    title: 'Egg Coir Husk',
    type: 'Home',
    categories: ['home'],
    image: asset('Egg Husk.jpg'),
    description: 'Sustainable egg tray made from coconut fiber pulp. Biodegradable and sturdy, ideal for eco-conscious packaging.',
    price: 15
  },
  {
    id: 'coir-designed-headphones',
    title: 'Coir Designed Headphones',
    type: 'Home',
    categories: ['home'],
    image: asset('Coir-designed Headphones.png'),
    description: 'Stylish headphones featuring eco-conscious coir-based design elements. Combines sustainability with modern audio performance.',
    price: 1200
  },
  {
    id: 'coir-fiber',
    title: 'Coir Fiber',
    type: 'Eco Materials',
    categories: ['materials'],
    image: asset('Coir Fiber.png'),
    description: 'Natural, untreated coconut fiber used for rope making, stuffing, crafts, and eco-friendly production.',
    price: 159
  }
]

export const trendingProducts = [
  products.find((item) => item.id === 'coir-designed-headphones'),
  products.find((item) => item.id === 'coir-bag'),
  products.find((item) => item.id === 'coir-basket')
].filter(Boolean)
