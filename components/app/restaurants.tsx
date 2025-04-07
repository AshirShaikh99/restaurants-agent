import React from "react";
import { restaurants } from "@/data/fast-food-restaurants";

interface RestaurantsComponentProps {
  restaurantList: typeof restaurants;
}

function RestaurantsComponent({
  restaurantList = [],
}: RestaurantsComponentProps) {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 animate-slide-down">
        Available Restaurants
      </h2>
      <div className="flex gap-6 py-4 overflow-x-auto pb-4 snap-x">
        {restaurantList.map((restaurant, index) => (
          <div
            key={restaurant.id}
            className="min-w-[280px] max-w-[320px] bg-white dark:bg-dark-600 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl snap-center animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden">
              <div className="absolute top-2 right-2 z-10 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {restaurant.rating}★
              </div>
              <img
                className="h-auto w-full object-cover transition-all duration-500 hover:scale-110 aspect-[4/3]"
                src={restaurant.img}
                alt={restaurant.name}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {restaurant.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {restaurant.cuisine}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600 dark:text-gray-300">
                  {restaurant.priceRange}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {restaurant.openingHours}
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 truncate">
                {restaurant.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { RestaurantsComponent };
