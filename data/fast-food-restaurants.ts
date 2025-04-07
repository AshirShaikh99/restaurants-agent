export const restaurants = [
  {
    id: 1,
    name: "Fast Food",
    cuisine: "Fast Food",
    description: "Classic fast food with burgers, fries, and shakes.",
    img: "https://foodish-api.com/images/burger/burger1.jpg",
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
            image: "https://foodish-api.com/images/burger/burger3.jpg",
          },
          {
            id: "ff-1-2",
            name: "Double Bacon Burger",
            description: "Two beef patties with bacon, cheese, and BBQ sauce",
            price: 8.99,
            image: "https://foodish-api.com/images/burger/burger4.jpg",
          },
          {
            id: "ff-1-3",
            name: "Veggie Burger",
            description:
              "Plant-based patty with lettuce, tomato, and vegan mayo",
            price: 7.99,
            image: "https://foodish-api.com/images/burger/burger5.jpg",
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
            image: "https://foodish-api.com/images/burger/burger6.jpg",
          },
          {
            id: "ff-2-2",
            name: "Onion Rings",
            description: "Battered and fried onion rings with dipping sauce",
            price: 4.49,
            image: "https://foodish-api.com/images/burger/burger7.jpg",
          },
          {
            id: "ff-2-3",
            name: "Chicken Nuggets",
            description: "Crispy chicken nuggets with choice of dipping sauce",
            price: 5.99,
            image: "https://foodish-api.com/images/burger/burger8.jpg",
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
            image: "https://foodish-api.com/images/dessert/dessert1.jpg",
          },
          {
            id: "ff-3-2",
            name: "Soft Drink",
            description: "Choice of cola, lemon-lime, or orange soda",
            price: 2.49,
            image: "https://foodish-api.com/images/burger/burger9.jpg",
          },
          {
            id: "ff-3-3",
            name: "Iced Tea",
            description: "Freshly brewed iced tea, sweetened or unsweetened",
            price: 2.49,
            image: "https://foodish-api.com/images/burger/burger10.jpg",
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
    img: "https://foodish-api.com/images/burger/burger2.jpg",
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
            image: "https://foodish-api.com/images/burger/burger11.jpg",
          },
          {
            id: "dp-1-2",
            name: "Mushroom Swiss Burger",
            description:
              "Beef patty topped with sautéed mushrooms and Swiss cheese",
            price: 10.99,
            image: "https://foodish-api.com/images/burger/burger12.jpg",
          },
          {
            id: "dp-1-3",
            name: "Spicy Chicken Sandwich",
            description:
              "Crispy spicy chicken fillet with lettuce, tomato, and spicy mayo",
            price: 8.99,
            image: "https://foodish-api.com/images/burger/burger13.jpg",
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
            image: "https://foodish-api.com/images/burger/burger14.jpg",
          },
          {
            id: "dp-2-2",
            name: "Mozzarella Sticks",
            description:
              "Breaded and fried mozzarella sticks with marinara sauce",
            price: 5.99,
            image: "https://foodish-api.com/images/burger/burger15.jpg",
          },
          {
            id: "dp-2-3",
            name: "Buffalo Wings",
            description: "Spicy buffalo wings with blue cheese dressing",
            price: 8.99,
            image: "https://foodish-api.com/images/burger/burger16.jpg",
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
            image: "https://foodish-api.com/images/dessert/dessert2.jpg",
          },
          {
            id: "dp-3-2",
            name: "Chocolate Brownie",
            description: "Warm chocolate brownie with vanilla ice cream",
            price: 5.99,
            image: "https://foodish-api.com/images/dessert/dessert3.jpg",
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
    img: "https://foodish-api.com/images/pizza/pizza1.jpg",
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
            image: "https://foodish-api.com/images/pizza/pizza2.jpg",
          },
          {
            id: "sf-1-2",
            name: "Cajun Fish & Chips",
            description: "Cajun-spiced fish with seasoned fries and spicy mayo",
            price: 12.99,
            image: "https://foodish-api.com/images/pizza/pizza3.jpg",
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
            image: "https://foodish-api.com/images/pizza/pizza4.jpg",
          },
          {
            id: "sf-2-2",
            name: "Shrimp Po' Boy",
            description:
              "Fried shrimp with lettuce, tomato, and remoulade sauce on a French roll",
            price: 10.99,
            image: "https://foodish-api.com/images/pizza/pizza5.jpg",
          },
          {
            id: "sf-2-3",
            name: "Crab Cake Sandwich",
            description:
              "Homemade crab cake with lettuce and special sauce on a brioche bun",
            price: 12.99,
            image: "https://foodish-api.com/images/pizza/pizza6.jpg",
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
            image: "https://foodish-api.com/images/pizza/pizza7.jpg",
          },
          {
            id: "sf-3-2",
            name: "Hush Puppies",
            description: "Deep-fried cornmeal batter with a soft center",
            price: 3.99,
            image: "https://foodish-api.com/images/pizza/pizza8.jpg",
          },
          {
            id: "sf-3-3",
            name: "Seasoned Fries",
            description: "Crispy fries with special seafood seasoning",
            price: 3.49,
            image: "https://foodish-api.com/images/pizza/pizza9.jpg",
          },
        ],
      },
    ],
  },
];
