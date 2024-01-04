import {
  Container,
  Flex,
  Heading,
  Text,
  Blockquote,
  Button,
} from "@radix-ui/themes";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute bottom-20">
        <Flex direction="column" gap="3">
          <Heading as="h1" size="8" color="green">
            Stay Informed, Stay Engaged
          </Heading>
          <Heading as="h2" size="5">
            Your Gateway to College Life
          </Heading>
          <div className="w-3/4">
            <Blockquote size="2">
              This portal is dedicated to providing you with the latest updates
              and announcements, ensuring you stay connected with your peers,
              faculty, and the wider community. Whether it's an upcoming
              seminar, a campus tour, or a student organization meeting, we have
              you covered. Join us in making your college journey more exciting
              and rewarding.
            </Blockquote>
          </div>
          <Button color="amber" mt="3" variant="surface" className="w-32">
            Events
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default Hero;
