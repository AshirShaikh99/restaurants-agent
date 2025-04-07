import React from "react";
import { restaurants } from "@/data/fast-food-restaurants";
import { vapi } from "@/lib/vapi.sdk";
import { MessageTypeEnum } from "@/lib/types/conversation.type";

interface ReservationProps {
  type: "menu-selection" | "confirmation" | "confirmed";
  restaurant: (typeof restaurants)[number];
  params: any;
}

function Reservation({
  type = "menu-selection",
  restaurant,
  params = {},
}: ReservationProps) {
  const confirmReservation = () => {
    vapi.send({
      type: MessageTypeEnum.ADD_MESSAGE,
      message: {
        role: "user",
        content: `Yes, I confirm my reservation. Please book it.`,
      },
    });
  };

  const getSelectedItems = () => {
    if (!params.selectedItems || !Array.isArray(params.selectedItems)) {
      return [];
    }
    return params.selectedItems;
  };

  const selectedItems = getSelectedItems();
  const totalPrice = selectedItems.reduce((total, item) => {
    const menuItem = restaurant.menu
      .flatMap((section) => section.items)
      .find(
        (menuItem) => menuItem.name.toLowerCase() === item.name.toLowerCase()
      );

    return total + (menuItem ? menuItem.price * item.quantity : 0);
  }, 0);

  return (
    <div className="bg-white dark:bg-dark-700 rounded-xl shadow-lg animate-fade-in transition-all duration-300">
      <div className="container mx-auto px-4 py-8">
        {type === "confirmed" && (
          <div className="mb-6 animate-slide-down">
            <div className="bg-accent-500 bg-opacity-20 dark:bg-opacity-10 border-l-4 border-accent-500 text-accent-800 dark:text-accent-200 p-4 rounded-r-lg">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-accent-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="font-medium">
                  Your reservation has been confirmed!
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 animate-slide-up">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              {type === "confirmed" && (
                <div className="absolute inset-0 bg-accent-500 bg-opacity-20 flex items-center justify-center z-10">
                  <div className="bg-white dark:bg-dark-700 rounded-full p-4 shadow-lg">
                    <svg
                      className="w-12 h-12 text-accent-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
              <img
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
                src={restaurant.img}
                alt={restaurant.name}
              />
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 px-4 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {restaurant.name}
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {restaurant.description}
            </p>

            <div className="mb-6 bg-gray-50 dark:bg-dark-600 p-4 rounded-lg shadow-sm">
              <p className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">
                Reservation Details
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Date & Time:
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {params.date} at {params.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Location:
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {restaurant.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-500 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Party Size:
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {params.partySize} people
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {selectedItems.length > 0 && (
              <div
                className="mb-6 bg-gray-50 dark:bg-dark-600 p-4 rounded-lg shadow-sm animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <p className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                  Pre-selected Items
                </p>
                <div className="space-y-2">
                  {selectedItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-dark-500 last:border-0"
                    >
                      <div className="flex items-center">
                        <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">
                          {item.quantity}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        $
                        {(
                          item.quantity *
                          (restaurant.menu
                            .flatMap((section) => section.items)
                            .find(
                              (menuItem) =>
                                menuItem.name.toLowerCase() ===
                                item.name.toLowerCase()
                            )?.price || 0)
                        ).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-dark-500 flex justify-between items-center">
                  <span className="font-bold text-gray-800 dark:text-gray-200">
                    Total:
                  </span>
                  <span className="font-bold text-lg text-primary-600 dark:text-primary-400">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            {type === "confirmation" && (
              <button
                onClick={confirmReservation}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                type="button"
                style={{ animationDelay: "300ms" }}
              >
                Confirm Reservation
              </button>
            )}

            {type === "confirmed" && (
              <div
                className="mt-6 text-center animate-fade-in"
                style={{ animationDelay: "300ms" }}
              >
                <p className="text-gray-600 dark:text-gray-300 italic">
                  A confirmation has been sent to your device. We look forward
                  to serving you!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Reservation };
