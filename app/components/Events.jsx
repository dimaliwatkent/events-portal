"use client";
import { useState } from "react";
import { Heading, Button, Card, Flex, Box, Text } from "@radix-ui/themes";
import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  const [activeButton, setActiveButton] = useState("upcoming"); // Default active button

  const handleButtonClick = (event) => {
    setActiveButton(event.target.innerText.toLowerCase());
  };
  console.log(activeButton);

  return (
    <div className=" my-8">
      <Heading color="green" size="8" align="center" my="5">
        EVENTS
      </Heading>
      <Flex my="5" gap="3" justify="center">
        <Button
          variant="soft"
          color={activeButton === "upcoming" ? "amber" : "gray"}
          onClick={handleButtonClick}
        >
          Upcoming
        </Button>
        <Button
          variant="soft"
          color={activeButton === "ongoing" ? "amber" : "gray"}
          onClick={handleButtonClick}
        >
          Ongoing
        </Button>
        <Button
          variant="soft"
          color={activeButton === "done" ? "amber" : "gray"}
          onClick={handleButtonClick}
        >
          Done
        </Button>
        <Button
          variant="soft"
          color={activeButton === "cancelled" ? "amber" : "gray"}
          onClick={handleButtonClick}
        >
          Cancelled
        </Button>
      </Flex>
      <Flex direction="column" gap="4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Flex>
    </div>
  );
};

export default Events;
