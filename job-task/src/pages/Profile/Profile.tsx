import { useEffect, useState } from 'react';
import { Image, Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Define interface for user data
interface UserData {
    first_name: string;
    last_name: string;
    avatar: string; // Add avatar property
    // Add other properties if needed
}

export default function Profile() {
    const [userData, setUserData] = useState<UserData | null>(null); // Initialize as null
    const navigate = useNavigate();

    useEffect(() => {
        const savedUserData = localStorage.getItem('userData');
        if (!savedUserData) {
            navigate('/');
        } else {
            const parsedUserData = JSON.parse(savedUserData);
            setUserData(parsedUserData);
        }
    }, []);

    return (
        <Box textAlign="center">
            {userData && (
                <Box p={100}>
                    <Image  src={userData.avatar} alt="User Avatar" borderRadius="full" boxSize="150px" mx="auto" />
                    <Text mt={4} fontWeight="bold" color='rgba(255, 255, 255, 0.7)' fontSize='2xl'>{userData.first_name} {userData.last_name},</Text>
                    <Text mt={4} fontWeight="bold" color='rgba(255, 255, 255, 0.7)' fontSize='xl'> you have been successfully logged in</Text>
                </Box>
            )}
        </Box>
    );
}
