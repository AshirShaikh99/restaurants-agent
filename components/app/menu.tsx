import React from "react";
import { restaurants } from "@/data/fast-food-restaurants";

interface MenuComponentProps {
  restaurant: (typeof restaurants)[number];
}

function MenuComponent({ restaurant }: MenuComponentProps) {
  return (
    <div className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-6 max-w-4xl mx-auto animate-fade-in transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6 mb-8 animate-slide-up">
        <div className="md:w-1/3">
          <div className="relative overflow-hidden rounded-xl shadow-md">
            <div className="absolute top-3 right-3 z-10 bg-primary-500 text-white px-2 py-1 rounded-full text-sm font-bold">
              {restaurant.rating}★
            </div>
            <img
              src={restaurant.img}
              alt={restaurant.name}
              className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            {restaurant.name}
          </h1>
          <div className="flex items-center mb-2">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mr-2">
              {restaurant.cuisine}
            </span>
            <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 rounded-full text-sm font-medium">
              {restaurant.priceRange}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-medium">Location:</span> {restaurant.location}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-medium">Hours:</span>{" "}
            {restaurant.openingHours}
          </p>
          <p className="text-gray-700 dark:text-gray-200 mt-4 text-lg">
            {restaurant.description}
          </p>
        </div>
      </div>

      <div className="menu-sections space-y-8">
        {restaurant.menu.map((section, sectionIndex) => (
          <div
            key={section.id}
            className="mb-8 animate-slide-up"
            style={{ animationDelay: `${sectionIndex * 100}ms` }}
          >
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-dark-500 text-gray-800 dark:text-gray-100">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-600 hover:bg-gray-100 dark:hover:bg-dark-500 transition-all duration-300 shadow-sm hover:shadow animate-fade-in"
                  style={{
                    animationDelay: `${sectionIndex * 100 + itemIndex * 50}ms`,
                  }}
                >
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {item.description}
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 font-bold mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  {item.image && (
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MenuComponent };
