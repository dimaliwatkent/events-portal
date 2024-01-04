import {
  AlertDialog,
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  Card,
  Flex,
  Box,
  Text,
  Button,
} from "@radix-ui/themes";
import React from "react";

const EventCard = () => {
  return (
    <div>
      <Card className="max-w-full hover:shadow-green">
        <Flex gap="3" direction="column">
          <Box>
            <Text as="div" size="7" weight="bold">
              Event Title
            </Text>
            <Text as="div" size="3" color="gray">
              Description:
            </Text>
            <Text as="div" size="3" color="gray">
              Participants:
            </Text>
            <Text as="div" size="3" color="green">
              January 24, 2024
            </Text>
          </Box>
          <Flex gap="2" justify="end">
            <AlertDialogRoot>
              <AlertDialogTrigger>
                <Button color="amber" variant="soft">
                  Edit
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent style={{ maxWidth: 450 }}>
                <AlertDialogTitle color="green">Edit Event</AlertDialogTitle>
                <AlertDialogDescription size="2">
                  <Text weight="bold"> Event Title: </Text>
                  <br />
                  <Text weight="bold"> Event Description: </Text>
                  <br />
                  <Text weight="bold"> Event Date: </Text>
                  <br />
                </AlertDialogDescription>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialogCancel>
                    <Button variant="soft" color="amber">
                      Cancel
                    </Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button variant="soft" color="green">
                      Save
                    </Button>
                  </AlertDialogAction>
                </Flex>
              </AlertDialogContent>
            </AlertDialogRoot>
            <AlertDialogRoot>
              <AlertDialogTrigger>
                <Button color="red" variant="soft">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent style={{ maxWidth: 450 }}>
                <AlertDialogTitle color="red">Delete Event</AlertDialogTitle>
                <AlertDialogDescription size="2">
                  Are you sure you want to Delete? This event will no longer be
                  accessible.
                </AlertDialogDescription>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialogCancel>
                    <Button variant="soft" color="amber">
                      Cancel
                    </Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button variant="soft" color="red">
                      Delete
                    </Button>
                  </AlertDialogAction>
                </Flex>
              </AlertDialogContent>
            </AlertDialogRoot>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default EventCard;
