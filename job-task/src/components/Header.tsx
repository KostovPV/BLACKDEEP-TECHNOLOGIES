import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/');
    };

    return (
        <Flex as="nav" p="10px" alignItems="center" bg="grey" >
            <Heading as="h1">Job Task</Heading>
            <Spacer></Spacer>

            <HStack spacing="20px">
                <Box bg="gray.200" >M</Box>
                <Text>Welcome to ....</Text>
                <Button colorScheme="teal" onClick={handleLogout}>Logout</Button>
            </HStack>
        </Flex>
    )
}
