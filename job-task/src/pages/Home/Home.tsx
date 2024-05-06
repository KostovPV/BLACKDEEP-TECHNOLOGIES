import { Box, FormControl, FormLabel, Button, Center, Input, FormErrorMessage, Checkbox } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

type FormFields = {
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
    interests: string[];
    avatar: string;
}

function Home(): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const [showAvatarForm, setShowAvatarForm] = useState<boolean>(false);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [showFirstBox, setShowFirstBox] = useState<boolean>(true); 
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('userData');
    }, []);


    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log("On submit executed");
        console.log(errors);
        console.log(data);

        
        localStorage.setItem('userData', JSON.stringify(data));
        navigate('/profile');
    }

    const handleNext = () => {
        handleSubmit((data) => {
            if (Object.keys(errors).length === 0) {
                setShowAvatarForm(true);
                setShowFirstBox(false); 
            }
        })();
    }

    const handleBack = () => {
        setShowAvatarForm(false);
        setShowFirstBox(true);
    }

    const handleCheckboxChange = (value: string) => {
        if (selectedInterests.includes(value)) {
            setSelectedInterests(selectedInterests.filter((interest) => interest !== value));
        } else {
            if (selectedInterests.length < 2) {
                setSelectedInterests([...selectedInterests, value]);
            }
        }
    }

    return (
        <Center>


            <form onSubmit={handleSubmit(onSubmit)}  >
                {showFirstBox && (
                    <Box
                        maxWidth={['100%', '60%', '480px', '480px']}
                        width="100%"
                        px={4}
                        pt={[6, 6, 10, 20]} 
                        pb={6}

                    >
                        <FormLabel fontSize='2xl' textAlign='center' color="white">Register account</FormLabel>
                        <FormControl mb={8} isInvalid={!!errors.first_name}>

                            <Input {...register("first_name", {
                                required: "First name is required",
                                minLength: { value: 4, message: "First name should be at least 4 characters long" }
                            })} type='text' name='first_name' placeholder='Enter First Name' color='rgba(255, 255, 255, 0.7)' />
                            <FormErrorMessage>{errors.first_name?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl mb={8} isInvalid={!!errors.last_name}>

                            <Input {...register("last_name", {
                                required: "Last name is required",
                                minLength: { value: 4, message: "Last name should be at least 4 characters long" }
                            })} type='text' name='last_name' placeholder='Enter Last Name' color='rgba(255, 255, 255, 0.7)' />
                            <FormErrorMessage>{errors.last_name?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl mb={8} isInvalid={!!errors.password}>

                            <Input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 4, message: "Password should be at least 4 characters long" }
                            })} type='password' name='password' placeholder='Enter Password' color='rgba(255, 255, 255, 0.7)' />
                            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl mb={8} isInvalid={!!errors.confirm_password}>

                            <Input {...register("confirm_password", {
                                required: "Confirm Password is required",
                                minLength: { value: 4, message: "Confirm Password should be at least 4 characters long" }
                            })} type='password' name='confirm_password' placeholder='Confirm Password' color='rgba(255, 255, 255, 0.7)' />
                            <FormErrorMessage>{errors.confirm_password?.message}</FormErrorMessage>
                        </FormControl>




                        <FormLabel fontSize='xl' textAlign='center' color="white">Interests</FormLabel>
                        <FormControl display="flex" alignItems="center" mb="40px">
                            <Checkbox
                                key={1}
                                id={`field-ports-1`}
                                name='interests'
                                value='Sports'
                                size="lg"
                                onChange={() => handleCheckboxChange('Sports')}
                                isChecked={selectedInterests.includes('Sports')}
                                isDisabled={selectedInterests.length === 2 && !selectedInterests.includes('Sports')}
                            />
                            <FormLabel mb="0" ml="2" color="white">Sports</FormLabel>
                            <Checkbox
                                key={2}
                                id={`field-music-2`}
                                ml="2"
                                name='interests'
                                value='Music'
                                size="lg"
                                onChange={() => handleCheckboxChange('Music')}
                                isChecked={selectedInterests.includes('Music')}
                                isDisabled={selectedInterests.length === 2 && !selectedInterests.includes('Music')}
                            />
                            <FormLabel mb="0" ml="2" color="white">Music</FormLabel>
                            <Checkbox
                                key={3}
                                id={`field-dancing-3`}
                                ml="2"
                                name='interests'
                                value='Dancing'
                                size="lg"
                                onChange={() => handleCheckboxChange('Dancing')}
                                isChecked={selectedInterests.includes('Dancing')}
                                isDisabled={selectedInterests.length === 2 && !selectedInterests.includes('Dancing')}
                            />
                            <FormLabel mb="0" ml="2" color="white">Dancing</FormLabel>
                            <Checkbox
                                key={4}
                                id={`field-games-4`}
                                ml="2"
                                name='interests'
                                value='Games'
                                size="lg"
                                onChange={() => handleCheckboxChange('Games')}
                                isChecked={selectedInterests.includes('Games')}
                                isDisabled={selectedInterests.length === 2 && !selectedInterests.includes('Games')}
                            />
                            <FormLabel mb="0" ml="2" color="white">Games</FormLabel>
                        </FormControl>
                        <FormErrorMessage></FormErrorMessage>
                        <Button colorScheme='rgb(245, 207, 26)'
                            bg='rgb(245, 207, 26)'
                            type='button'
                            onClick={handleNext}
                            mt={4}>
                            Next
                        </Button>
                    </Box>
                )
                }
                {showAvatarForm && (
                    <Box mt={150}>

                        <FormControl mb={8} isInvalid={!!errors.confirm_password}>

                            <Input {...register("avatar", {
                                required: "URL is required",
                                minLength: { value: 4, message: "Valid URL is required" }
                            })} type='text' name='avatar' placeholder='Image URL' color='rgba(255, 255, 255, 0.7)' />
                            <FormErrorMessage>{errors.avatar?.message}</FormErrorMessage>
                        </FormControl>

                        <Button colorScheme='teal' type='button' mr={2} mt={4} onClick={handleBack}>
                            Back
                        </Button>
                        <Button colorScheme='teal' type='submit' mt={4}>
                            Submit
                        </Button>
                    </Box>
                )}
            </form>



        </Center>
    );
}

export default Home;
