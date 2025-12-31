MenuItem.destroy_all

MenuItem.create!([
  {
    name: "Seoul Chicken Sandwich",
    price: 14.00,
    description: "Sweet, spicy, chicken sandwhich with gochujang sauce"
  },
  {
    name: "spud-nik",
    price: 8.00,
    description: "Crispy twisty spud"
  },
  {
    name: "Mozza Meatball Spaghetti",
    price: 11.50,
    description: "Mozzarella stuffed turkey meatball over spaghettti"
  },
  {
    name: "Chopped Cheese",
    price: 10.00,
    description: "wit real cheese"
  }
])

puts "🌮 Seeded menu items fo cookin withh cahrahhl!!!! #{MenuItem.count} menu items ✅"
