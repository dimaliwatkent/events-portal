import { Heading, Button, Card, Flex, Box, Text } from "@radix-ui/themes";
import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className=" my-8">
      <Heading color="green" size="8" align="center" my="5">
        EVENTS
      </Heading>
      <Flex my="5" gap="3" justify="center">
        <Button variant="soft" color="amber">
          Upcomming
        </Button>
        <Button variant="soft" color="gray">
          Ongoing
        </Button>
        <Button variant="soft" color="gray">
          Done
        </Button>
        <Button variant="soft" color="gray">
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
