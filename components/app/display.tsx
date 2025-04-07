import { restaurants } from "@/data/fast-food-restaurants";
import { Message, MessageTypeEnum } from "@/lib/types/conversation.type";
import { vapi } from "@/lib/vapi.sdk";
import React, { useEffect } from "react";
import { RestaurantsComponent } from "./restaurants";
import { MenuComponent } from "./menu";
import { Reservation } from "./reservation";
import { useDisplay } from "@/context/DisplayContext";

function Display() {
  const { setDisplayStatus } = useDisplay();

  const [restaurantList, setRestaurantList] = React.useState<
    typeof restaurants
  >([]);

  const [status, setStatus] = React.useState<
    "restaurants" | "menu" | "menu-selection" | "confirmation" | "confirmed"
  >("restaurants");

  const [selectedRestaurant, setSelectedRestaurant] = React.useState<
    (typeof restaurants)[number] | null
  >(null);

  const [reservationDetails, setReservationDetails] = React.useState<{}>({});

  // Update the display context whenever status changes
  useEffect(() => {
    if (restaurantList.length === 0 && !selectedRestaurant) {
      setDisplayStatus("empty");
    } else {
      setDisplayStatus(status);
    }
  }, [status, restaurantList, selectedRestaurant, setDisplayStatus]);

  useEffect(() => {
    const onMessageUpdate = (message: Message) => {
      if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        message.functionCall.name === "suggestRestaurants"
      ) {
        setStatus("restaurants");
        vapi.send({
          type: MessageTypeEnum.ADD_MESSAGE,
          message: {
            role: "system",
            content: `Here is the list of suggested restaurants: ${JSON.stringify(
              restaurants.map((restaurant) => restaurant.name)
            )}`,
          },
        });
        setRestaurantList(restaurants);
      } else if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        message.functionCall.name === "viewMenu"
      ) {
        const params = message.functionCall.parameters;
        console.log("viewMenu parameters", params);

        const result = restaurants.find(
          (restaurant) =>
            restaurant.name.toLowerCase() ===
            params.restaurantName.toLowerCase()
        );
        setSelectedRestaurant(result ?? restaurants[0]);
        setStatus("menu");
      } else if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        message.functionCall.name === "selectMenuItems"
      ) {
        const params = message.functionCall.parameters;
        console.log("selectMenuItems parameters", params);

        const result = restaurants.find(
          (restaurant) =>
            restaurant.name.toLowerCase() ===
            params.restaurantName.toLowerCase()
        );
        setSelectedRestaurant(result ?? restaurants[0]);
        setReservationDetails(params);
        setStatus("menu-selection");
      } else if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        message.functionCall.name === "makeReservation"
      ) {
        const params = message.functionCall.parameters;
        console.log("makeReservation parameters", params);

        const result = restaurants.find(
          (restaurant) =>
            restaurant.name.toLowerCase() ===
            params.restaurantName.toLowerCase()
        );
        setSelectedRestaurant(result ?? restaurants[0]);
        setReservationDetails(params);
        setStatus("confirmation");
      }
    };

    const reset = () => {
      setStatus("restaurants");
      setRestaurantList([]);
      setSelectedRestaurant(null);
      setReservationDetails({});
      setDisplayStatus("empty");
    };

    vapi.on("message", onMessageUpdate);
    vapi.on("call-end", reset);
    return () => {
      vapi.off("message", onMessageUpdate);
      vapi.off("call-end", reset);
    };
  }, []);

  return (
    <>
      {restaurantList.length > 0 && status === "restaurants" ? (
        <RestaurantsComponent restaurantList={restaurantList} />
      ) : null}
      {status === "menu" && selectedRestaurant ? (
        <MenuComponent restaurant={selectedRestaurant} />
      ) : null}
      {(status === "menu-selection" ||
        status === "confirmation" ||
        status === "confirmed") &&
      selectedRestaurant ? (
        <Reservation
          type={status}
          restaurant={selectedRestaurant}
          params={reservationDetails}
        />
      ) : null}
    </>
  );
}

export { Display };
