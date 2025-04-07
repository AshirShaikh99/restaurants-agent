// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (req.method === "POST") {
      const { message } = req.body;

      const { type = "function-call", functionCall = {}, call } = message;
      console.log("payload message", message);

      if (type === "function-call") {
        if (functionCall?.name === "suggestRestaurants") {
          const parameters = functionCall?.parameters;

          return res.status(201).json({
            result:
              "You can see the suggested restaurants on the screen. Which one would you like to explore?",
          });
        }

        if (functionCall?.name === "viewMenu") {
          const parameters = functionCall?.parameters;

          return res.status(201).json({
            result:
              "Here's the menu for the restaurant. Let me know which items you'd like to order.",
          });
        }

        if (functionCall?.name === "selectMenuItems") {
          const parameters = functionCall?.parameters;

          return res.status(201).json({
            result:
              "I've added those items to your order. Would you like to make a reservation now?",
          });
        }

        if (functionCall?.name === "makeReservation") {
          const parameters = functionCall?.parameters;

          return res.status(201).json({
            result:
              "Here are your reservation details. Please confirm if everything looks correct.",
          });
        }

        return res.status(201).json({ data: functionCall?.parameters });
      }

      return res.status(201).json({});
    }

    return res.status(404).json({ message: "Not Found" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
