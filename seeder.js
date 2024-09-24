const mongoose = require("mongoose");
const Product = require("./models/Product");

// MongoDB connection string
const mongoURI =
  "mongodb+srv://e-commerceLandingPage:e-commerceLandingPage@cluster0.kedn2.mongodb.net/e-commerceLandingPage?retryWrites=true&w=majority&appName=Cluster";

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Product data
const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 999,
    description: "A powerful laptop.",
    image: "https://placehold.jp/250x192.png",
    quantity: 50,
  },
  {
    name: "Shirt",
    category: "clothing",
    price: 29,
    description: "A stylish shirt.",
    image: "https://placehold.jp/250x192.png",
    quantity: 150,
  },
  {
    name: "Smartphone",
    category: "electronics",
    price: 799,
    description: "A high-end smartphone with great camera.",
    image: "https://placehold.jp/250x192.png",
    quantity: 75,
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 49,
    description: "Comfortable blue jeans.",
    image: "https://placehold.jp/250x192.png",
    quantity: 100,
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 199,
    description: "Noise-cancelling headphones.",
    image: "https://placehold.jp/250x192.png",
    quantity: 40,
  },
  {
    name: "Microwave Oven",
    category: "home-appliances",
    price: 120,
    description: "Compact microwave oven for your kitchen.",
    image: "https://placehold.jp/250x192.png",
    quantity: 30,
  },
  {
    name: "T-Shirt",
    category: "clothing",
    price: 19,
    description: "A simple cotton t-shirt.",
    image: "https://placehold.jp/250x192.png",
    quantity: 200,
  },
  {
    name: "Refrigerator",
    category: "home-appliances",
    price: 899,
    description: "Energy-efficient refrigerator with freezer.",
    image: "https://placehold.jp/250x192.png",
    quantity: 20,
  },
  {
    name: "Blender",
    category: "home-appliances",
    price: 49,
    description: "A powerful blender for smoothies.",
    image: "https://placehold.jp/250x192.png",
    quantity: 60,
  },
  {
    name: "Sneakers",
    category: "clothing",
    price: 79,
    description: "Comfortable running sneakers.",
    image: "https://placehold.jp/250x192.png",
    quantity: 120,
  },
  {
    name: "Gaming Console",
    category: "electronics",
    price: 499,
    description: "Next-gen gaming console.",
    image: "https://placehold.jp/250x192.png",
    quantity: 35,
  },
  {
    name: "Air Conditioner",
    category: "home-appliances",
    price: 600,
    description: "Split AC with quick cooling.",
    image: "https://placehold.jp/250x192.png",
    quantity: 25,
  },
  {
    name: "Smartwatch",
    category: "electronics",
    price: 199,
    description: "Smartwatch with health tracking.",
    image: "https://placehold.jp/250x192.png",
    quantity: 80,
  },
  {
    name: "Jacket",
    category: "clothing",
    price: 120,
    description: "Water-resistant jacket.",
    image: "https://placehold.jp/250x192.png",
    quantity: 90,
  },
  {
    name: "Toaster",
    category: "home-appliances",
    price: 30,
    description: "Two-slice toaster with browning control.",
    image: "https://placehold.jp/250x192.png",
    quantity: 40,
  },
  {
    name: "LED TV",
    category: "electronics",
    price: 1200,
    description: "4K Ultra HD Smart LED TV.",
    image: "https://placehold.jp/250x192.png",
    quantity: 15,
  },
  {
    name: "Washing Machine",
    category: "home-appliances",
    price: 700,
    description: "Top load washing machine with 7kg capacity.",
    image: "https://placehold.jp/250x192.png",
    quantity: 18,
  },
  {
    name: "Dress",
    category: "clothing",
    price: 69,
    description: "Floral print summer dress.",
    image: "https://placehold.jp/250x192.png",
    quantity: 95,
  },
  {
    name: "Tablet",
    category: "electronics",
    price: 399,
    description: "10-inch tablet with stylus support.",
    image: "https://placehold.jp/250x192.png",
    quantity: 55,
  },
  {
    name: "Vacuum Cleaner",
    category: "home-appliances",
    price: 150,
    description: "Bagless vacuum cleaner.",
    image: "https://placehold.jp/250x192.png",
    quantity: 45,
  },
  {
    name: "Blazer",
    category: "clothing",
    price: 150,
    description: "Formal blazer for office wear.",
    image: "https://placehold.jp/250x192.png",
    quantity: 70,
  },
  {
    name: "Smart Speaker",
    category: "electronics",
    price: 99,
    description: "Voice-activated smart speaker.",
    image: "https://placehold.jp/250x192.png",
    quantity: 90,
  },
  {
    name: "Air Fryer",
    category: "home-appliances",
    price: 85,
    description: "Healthy cooking with minimal oil.",
    image: "https://placehold.jp/250x192.png",
    quantity: 65,
  },
  {
    name: "Socks",
    category: "clothing",
    price: 10,
    description: "Pack of 5 cotton socks.",
    image: "https://placehold.jp/250x192.png",
    quantity: 300,
  },
  {
    name: "Leather Wallet",
    category: "accessories",
    price: 50,
    description: "Premium leather wallet.",
    image: "https://placehold.jp/250x192.png",
    quantity: 120,
  },
  {
    name: "Lipstick",
    category: "cosmetics",
    price: 25,
    description: "Matte finish lipstick.",
    image: "https://placehold.jp/250x192.png",
    quantity: 250,
  },
  {
    name: "Foundation",
    category: "cosmetics",
    price: 40,
    description: "Full-coverage liquid foundation.",
    image: "https://placehold.jp/250x192.png",
    quantity: 180,
  },
  {
    name: "Perfume",
    category: "cosmetics",
    price: 90,
    description: "Luxury floral fragrance.",
    image: "https://placehold.jp/250x192.png",
    quantity: 120,
  },
  {
    name: "Eyeshadow Palette",
    category: "cosmetics",
    price: 35,
    description: "12-color eyeshadow palette.",
    image: "https://placehold.jp/250x192.png",
    quantity: 140,
  },
  {
    name: "Face Cream",
    category: "cosmetics",
    price: 60,
    description: "Moisturizing face cream.",
    image: "https://placehold.jp/250x192.png",
    quantity: 160,
  },
  {
    name: "Hair Serum",
    category: "cosmetics",
    price: 30,
    description: "Nourishing hair serum for shine.",
    image: "https://placehold.jp/250x192.png",
    quantity: 100,
  },
  {
    name: "Nail Polish",
    category: "cosmetics",
    price: 15,
    description: "Long-lasting nail polish.",
    image: "https://placehold.jp/250x192.png",
    quantity: 300,
  },
  {
    name: "Blush",
    category: "cosmetics",
    price: 20,
    description: "Peach-toned blush.",
    image: "https://placehold.jp/250x192.png",
    quantity: 130,
  },
  {
    name: "Mascara",
    category: "cosmetics",
    price: 18,
    description: "Volumizing mascara.",
    image: "https://placehold.jp/250x192.png",
    quantity: 170,
  },
];

// Seed the products into the database
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Insert new products
    console.log("Data seeded successfully!");
    mongoose.disconnect(); // Disconnect after seeding
  } catch (err) {
    console.error("Error seeding data:", err);
  }
};

// Run the seeder
seedProducts();
