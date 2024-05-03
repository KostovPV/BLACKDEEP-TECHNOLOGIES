import {  Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/');
    };

    return (
        <Flex as="nav" p="10px" alignItems="center" bg="black" color="rgb(245, 207, 26)">
            <Heading as="h1">Job Task</Heading>
            <Spacer />
            
            <Text paddingRight={2} color="rgb(245, 207, 26)" px="2" py="1" borderRadius="md">Welcome to code challenge</Text>
            {userData.first_name && (
                <HStack spacing="20px">
                    <Text color="rgb(245, 207, 26)" px="2" py="1" borderRadius="md">{userData.first_name}</Text>
                    <Button  color="rgb(245, 207, 26)" onClick={handleLogout}>Logout</Button>
                </HStack>
            )}
        </Flex>
    )
}
