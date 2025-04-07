import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { restaurants } from "../data/fast-food-restaurants";

export const assistant: CreateAssistantDTO | any = {
  name: "Paula-restaurant",
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    systemPrompt: `You're Paula, an AI assistant who can help users find fast food restaurants and make reservations. Users can ask you to suggest restaurants, view menus, and make reservations. You can help users select menu items in advance so their food is ready when they arrive. Focus on providing a voice-based experience, avoiding text-based interactions when possible. Guide the user through the restaurant selection, menu browsing, and reservation process using natural conversation. The available restaurants are Fast Food, Desi Place, and Sea Food, all offering delicious fast food options.`,
    functions: [
      {
        name: "suggestRestaurants",
        async: true,
        description: "Suggests a list of restaurants to the user.",
        parameters: {
          type: "object",
          properties: {
            cuisine: {
              type: "string",
              description: "The type of cuisine the user is interested in.",
            },
            location: {
              type: "string",
              description:
                "The location where the user wants to find restaurants.",
            },
            priceRange: {
              type: "string",
              description:
                "The price range the user is looking for (e.g., $, $$, $$$).",
            },
          },
        },
      },
      {
        name: "viewMenu",
        async: true,
        description: "Shows the menu for a selected restaurant.",
        parameters: {
          type: "object",
          properties: {
            restaurantName: {
              type: "string",
              description:
                "The name of the restaurant whose menu the user wants to view.",
            },
          },
          required: ["restaurantName"],
        },
      },
      {
        name: "selectMenuItems",
        async: true,
        description:
          "Allows the user to select menu items for their reservation.",
        parameters: {
          type: "object",
          properties: {
            restaurantName: {
              type: "string",
              description: "The name of the restaurant.",
            },
            menuItems: {
              type: "array",
              description: "The menu items selected by the user.",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "The name of the menu item.",
                  },
                  quantity: {
                    type: "number",
                    description: "The quantity of the menu item.",
                  },
                },
                required: ["name", "quantity"],
              },
            },
          },
          required: ["restaurantName", "menuItems"],
        },
      },
      {
        name: "makeReservation",
        async: true,
        description: "Makes a reservation at a restaurant.",
        parameters: {
          type: "object",
          properties: {
            restaurantName: {
              type: "string",
              description: "The name of the restaurant.",
            },
            date: {
              type: "string",
              description: "The date for the reservation.",
            },
            time: {
              type: "string",
              description: "The time for the reservation.",
            },
            partySize: {
              type: "number",
              description: "The number of people in the party.",
            },
            selectedItems: {
              type: "array",
              description: "The menu items pre-selected by the user.",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "The name of the menu item.",
                  },
                  quantity: {
                    type: "number",
                    description: "The quantity of the menu item.",
                  },
                },
              },
            },
          },
          required: ["restaurantName", "date", "time", "partySize"],
        },
      },
    ],
  },
  voice: {
    provider: "11labs",
    voiceId: "paula",
  },
  firstMessage:
    "Hi, I'm Paula, your restaurant assistant. I can help you find restaurants, view menus, and make reservations with pre-selected dishes. How can I help you today?",
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
};
