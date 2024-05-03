import { Flex, HStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bg="black"
      as="footer"
      align="center"
      justify="center"
      direction="column"
      color="rgb(245, 207, 26)"
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      p="10px"
    >
      <HStack spacing="20px">
       
        <Text>Happy Coding</Text>
      </HStack>
    </Flex>
  );
}
