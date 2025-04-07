export const restaurants = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    description: "Authentic Italian cuisine with a modern twist.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    location: "123 Main Street, New York, NY 10001",
    rating: 4.5,
    priceRange: "$$",
    openingHours: "11:00 AM - 10:00 PM",
    menu: [
      {
        id: "bi-1",
        category: "Appetizers",
        items: [
          {
            id: "bi-1-1",
            name: "Bruschetta",
            description: "Toasted bread topped with tomatoes, garlic, and basil",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          },
          {
            id: "bi-1-2",
            name: "Caprese Salad",
            description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
            price: 10.99,
            image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      },
      {
        id: "bi-2",
        category: "Main Courses",
        items: [
          {
            id: "bi-2-1",
            name: "Spaghetti Carbonara",
            description: "Classic pasta dish with eggs, cheese, pancetta, and black pepper",
            price: 16.99,
            image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          },
          {
            id: "bi-2-2",
            name: "Margherita Pizza",
            description: "Traditional pizza with tomato sauce, mozzarella, and basil",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      },
      {
        id: "bi-3",
        category: "Desserts",
        items: [
          {
            id: "bi-3-1",
            name: "Tiramisu",
            description: "Coffee-flavored Italian dessert made of ladyfingers, mascarpone cheese, and cocoa",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Sushi Palace",
    cuisine: "Japanese",
    description: "Premium sushi and Japanese specialties in an elegant setting.",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    location: "456 Broadway, New York, NY 10013",
    rating: 4.8,
    priceRange: "$$$",
    openingHours: "12:00 PM - 11:00 PM",
    menu: [
      {
        id: "sp-1",
        category: "Appetizers",
        items: [
          {
            id: "sp-1-1",
            name: "Edamame",
            description: "Steamed soybeans sprinkled with sea salt",
            price: 5.99,
            image: "https://images.unsplash.com/photo-1615361200141-f45625b9a1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          },
          {
            id: "sp-1-2",
            name: "Gyoza",
            description: "Pan-fried dumplings filled with pork and vegetables",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      },
      {
        id: "sp-2",
        category: "Sushi Rolls",
        items: [
          {
            id: "sp-2-1",
            name: "California Roll",
            description: "Crab, avocado, and cucumber wrapped in seaweed and rice",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          },
          {
            id: "sp-2-2",
            name: "Dragon Roll",
            description: "Eel, crab, and cucumber topped with avocado",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      },
      {
        id: "sp-3",
        category: "Desserts",
        items: [
          {
            id: "sp-3-1",
            name: "Mochi Ice Cream",
            description: "Rice cake filled with ice cream in various flavors",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Spice Garden",
    cuisine: "Indian",
    description: "Authentic Indian flavors with a wide range of spice levels.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    location: "789 Park Avenue, New York, NY 10021",
    rating: 4.3,
    priceRange: "$$",
    openingHours: "11:30 AM - 10:30 PM",
    menu: [
      {
        id: "sg-1",
        category: "Appetizers",
        items: [
          {
            id: "sg-1-1",
            name: "Samosas",
            description: "Crispy pastry filled with spiced potatoes and peas",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          },
          {
            id: "sg-1-2",
            name: "Vegetable Pakora",
            description: "Mixed vegetables dipped in chickpea batter and fried",
            price: 5.99,
            image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      },
      {
        id: "sg-2",
        category: "Main Courses",
        items: [
          {
            id: "sg-2-1",
            name: "Butter Chicken",
            description: "Tender chicken in a creamy tomato sauce",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          },
          {
            id: "sg-2-2",
            name: "Vegetable Biryani",
            description: "Fragrant basmati rice cooked with mixed vegetables and spices",
            price: 13.99,
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      },
      {
        id: "sg-3",
        category: "Desserts",
        items: [
          {
            id: "sg-3-1",
            name: "Gulab Jamun",
            description: "Sweet milk solids balls soaked in rose-flavored syrup",
            price: 4.99,
            image: "https://images.unsplash.com/photo-1605197161470-5d1d7d8ce480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
        ]
      }
    ]
  }
];
