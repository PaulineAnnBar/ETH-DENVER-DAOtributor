import React from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Stack,
  Img,
  useMediaQuery,
} from "@chakra-ui/react";

function redirectToNewURL() {
  window.location.href = "https://http://localhost:3000/new-url";
}

function Hero() {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");
  return (
    <div>
      <Flex
        alignItems="center"
        w="full"
        px={isLargerThanLG ? "19" : "8"}
        py="10"
        minHeight="20vh"
        flexDirection={isLargerThanLG ? "row" : "column"}
      >
        <Box
          mr={isLargerThanLG ? "6" : "0"}
          w={isLargerThanLG ? "60%" : "full"}
        >
          {/* TITLE */}
          <Flex justifyContent={"left"} alignItems={"center"}>
            <Heading
              className={
                "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              }
              fontSize={["4rem", "3.8rem", "3.5rem", "3.3rem", "3rem"]}
            >
              OrgaDao
            </Heading>
          </Flex>
          {/* DESCRIPTION */}
          <Text mb="5" fontSize={isLargerThanLG ? "lg" : "base"} opacity={0.7}>
            Where DAOs and contributors can meet blablal We need to find a good
            explanations here !! so judge understands straight away what problem
            we solve
          </Text>
          <Stack direction="row" spacing={4}>
            {/* GREET THE WORLD */}
            <Button
              w="200px"
              colorScheme="blue"
              variant="solid"
              h="50px"
              size={isLargerThanLG ? "lg" : "md"}
              mb={isLargerThanLG ? "0" : "10"}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/create-greeting";
              }}
            >
              We are a DAO
            </Button>
            <Button
              w="200px"
              colorScheme="blue"
              variant="solid"
              h="50px"
              size={isLargerThanLG ? "lg" : "md"}
              mb={isLargerThanLG ? "0" : "10"}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/create-proposal";
              }}
            >
              I am a contributor
            </Button>
          </Stack>
        </Box>
        {/* IMAGE */}
        <Flex
          w={isLargerThanLG ? "40%" : "60%"}
          alignItems="left"
          justifyContent="left"
        >
          <Img src="/HolaMundo.png" alt="Hola Mundo Image" />
        </Flex>
      </Flex>
    </div>
  );
}

export default Hero;
