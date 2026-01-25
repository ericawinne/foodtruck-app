MenuItem.destroy_all

MenuItem.create!([
  {
    name: "Seoul Chicken Sandwich",
    price: 14.00,
    description: "Sweet, spicy, chicken sandwhich with gochujang sauce",
    image_url: "/menu/seoul-chicken.jpg"
  },
  {
    name: "Spud-nik",
    price: 8.00,
    description: "Crispy twisty spud",
    image_url: "/menu/spud-nik.jpg"
  },
  {
    name: "Mozza Meatball Spaghetti",
    price: 11.00,
    description: "Mozzarella stuffed turkey meatball over spaghettti",
    image_url: "/menu/cheese-stuffed-meatballs.jpg"
  },
  {
    name: "Shroom-cake Sammy",
    price: 13.50,
    description: "Mushroom cake sandwhich (vegan)",
    image_url: "/menu/shroom-cake-sammy.jpg"
  },{
    name: "Mexican Tortilla Soupy",
    price: 11.50,
    description: "The best soup ever",
    image_url: "/menu/mexican-tortilla-soup.jpg"
  },
  {
    name: "Chopped Philly",
    price: 10.00,
    description: "Classy Philly cheasesteak wit real cheese",
    image_url: "/menu/philly-cheesesteak.jpg"
  }
])

puts "🌮 Seeded menu items fo cookin withh cahrahhl!!!! #{MenuItem.count} menu items ✅"
