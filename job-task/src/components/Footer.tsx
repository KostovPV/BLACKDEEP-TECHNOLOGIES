import { Flex, HStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      bg="gray"
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      p="10px"
    >
      <HStack spacing="20px">
        <Text>Ⓒ 2018-2023, BLACKDEEP TECHNOLOGIES PLTD</Text>
        <Text>Happy Coding</Text>
      </HStack>
    </Flex>
  );
}
