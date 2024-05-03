import { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
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
        <div>
            <h1>Profile</h1>
            {userData && (
                <div>
                    <p>First Name: {userData.first_name}</p>
                    <p>Last Name: {userData.last_name}</p>
                   
                    <Image src={userData.avatar} alt="User Avatar" />
                </div>
            )}
        </div>
    );
}
