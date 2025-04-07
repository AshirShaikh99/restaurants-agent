export const restaurants = [
  {
    id: 1,
    name: "Fast Food",
    cuisine: "Fast Food",
    description: "Classic fast food with burgers, fries, and shakes.",
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Available Nationwide",
    rating: 4.7,
    priceRange: "$",
    openingHours: "10:00 AM - 11:00 PM",
    menu: [
      {
        id: "ff-1",
        category: "Burgers",
        items: [
          {
            id: "ff-1-1",
            name: "Classic Cheeseburger",
            description:
              "Beef patty with cheese, lettuce, tomato, and special sauce",
            price: 6.99,
            image:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80",
          },
          {
            id: "ff-1-2",
            name: "Double Bacon Burger",
            description: "Two beef patties with bacon, cheese, and BBQ sauce",
            price: 8.99,
            image:
              "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80",
          },
          {
            id: "ff-1-3",
            name: "Veggie Burger",
            description:
              "Plant-based patty with lettuce, tomato, and vegan mayo",
            price: 7.99,
            image:
              "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80",
          },
        ],
      },
      {
        id: "ff-2",
        category: "Sides",
        items: [
          {
            id: "ff-2-1",
            name: "French Fries",
            description: "Crispy golden fries with sea salt",
            price: 3.49,
            image:
              "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "ff-2-2",
            name: "Onion Rings",
            description: "Battered and fried onion rings with dipping sauce",
            price: 4.49,
            image:
              "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
          {
            id: "ff-2-3",
            name: "Chicken Nuggets",
            description: "Crispy chicken nuggets with choice of dipping sauce",
            price: 5.99,
            image:
              "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
          },
        ],
      },
      {
        id: "ff-3",
        category: "Beverages",
        items: [
          {
            id: "ff-3-1",
            name: "Milkshake",
            description:
              "Creamy milkshake in vanilla, chocolate, or strawberry",
            price: 4.99,
            image:
              "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "ff-3-2",
            name: "Soft Drink",
            description: "Choice of cola, lemon-lime, or orange soda",
            price: 2.49,
            image:
              "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "ff-3-3",
            name: "Iced Tea",
            description: "Freshly brewed iced tea, sweetened or unsweetened",
            price: 2.49,
            image:
              "https://images.unsplash.com/photo-1556679343-c1306ee3f376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Desi Place",
    cuisine: "American Fast Food",
    description:
      "Quick and delicious fast food with a focus on quality ingredients.",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    location: "Available Nationwide",
    rating: 4.5,
    priceRange: "$$",
    openingHours: "11:00 AM - 10:00 PM",
    menu: [
      {
        id: "dp-1",
        category: "Signature Burgers",
        items: [
          {
            id: "dp-1-1",
            name: "Deluxe Burger",
            description:
              "Premium beef patty with special sauce, lettuce, cheese, pickles, and onions",
            price: 9.99,
            image:
              "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
          },
          {
            id: "dp-1-2",
            name: "Mushroom Swiss Burger",
            description:
              "Beef patty topped with sautéed mushrooms and Swiss cheese",
            price: 10.99,
            image:
              "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          },
          {
            id: "dp-1-3",
            name: "Spicy Chicken Sandwich",
            description:
              "Crispy spicy chicken fillet with lettuce, tomato, and spicy mayo",
            price: 8.99,
            image:
              "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
        ],
      },
      {
        id: "dp-2",
        category: "Sides & Appetizers",
        items: [
          {
            id: "dp-2-1",
            name: "Loaded Fries",
            description:
              "Crispy fries topped with cheese, bacon bits, and green onions",
            price: 6.99,
            image:
              "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "dp-2-2",
            name: "Mozzarella Sticks",
            description:
              "Breaded and fried mozzarella sticks with marinara sauce",
            price: 5.99,
            image:
              "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
          {
            id: "dp-2-3",
            name: "Buffalo Wings",
            description: "Spicy buffalo wings with blue cheese dressing",
            price: 8.99,
            image:
              "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
        ],
      },
      {
        id: "dp-3",
        category: "Desserts",
        items: [
          {
            id: "dp-3-1",
            name: "Ice Cream Sundae",
            description:
              "Vanilla ice cream with chocolate sauce, whipped cream, and a cherry",
            price: 4.99,
            image:
              "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
          {
            id: "dp-3-2",
            name: "Chocolate Brownie",
            description: "Warm chocolate brownie with vanilla ice cream",
            price: 5.99,
            image:
              "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Sea Food",
    cuisine: "Seafood Fast Food",
    description:
      "Quick-service seafood restaurant with fresh and delicious options.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Available Nationwide",
    rating: 4.6,
    priceRange: "$$",
    openingHours: "11:30 AM - 9:30 PM",
    menu: [
      {
        id: "sf-1",
        category: "Fish & Chips",
        items: [
          {
            id: "sf-1-1",
            name: "Classic Fish & Chips",
            description: "Battered cod with crispy fries and tartar sauce",
            price: 11.99,
            image:
              "https://images.unsplash.com/photo-1579208030886-b937da0925dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "sf-1-2",
            name: "Cajun Fish & Chips",
            description: "Cajun-spiced fish with seasoned fries and spicy mayo",
            price: 12.99,
            image:
              "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
        ],
      },
      {
        id: "sf-2",
        category: "Seafood Sandwiches",
        items: [
          {
            id: "sf-2-1",
            name: "Fish Sandwich",
            description:
              "Crispy fish fillet with lettuce, tomato, and tartar sauce on a bun",
            price: 8.99,
            image:
              "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
          {
            id: "sf-2-2",
            name: "Shrimp Po' Boy",
            description:
              "Fried shrimp with lettuce, tomato, and remoulade sauce on a French roll",
            price: 10.99,
            image:
              "https://images.unsplash.com/photo-1533640924469-f04e06f8898d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "sf-2-3",
            name: "Crab Cake Sandwich",
            description:
              "Homemade crab cake with lettuce and special sauce on a brioche bun",
            price: 12.99,
            image:
              "https://images.unsplash.com/photo-1599789197514-47270cd526b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
        ],
      },
      {
        id: "sf-3",
        category: "Sides",
        items: [
          {
            id: "sf-3-1",
            name: "Coleslaw",
            description: "Creamy coleslaw with cabbage and carrots",
            price: 2.99,
            image:
              "https://images.unsplash.com/photo-1621347311831-ded8eb02e8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
          {
            id: "sf-3-2",
            name: "Hush Puppies",
            description: "Deep-fried cornmeal batter with a soft center",
            price: 3.99,
            image:
              "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          },
          {
            id: "sf-3-3",
            name: "Seasoned Fries",
            description: "Crispy fries with special seafood seasoning",
            price: 3.49,
            image:
              "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          },
        ],
      },
    ],
  },
];
