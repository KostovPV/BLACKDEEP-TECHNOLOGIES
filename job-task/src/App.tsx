import './App.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Center, Checkbox, FormErrorMessage } from '@chakra-ui/react'

interface FormData {
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;
    interests: string[];
    avatar: File | null;
}

function App(): JSX.Element {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: '',
        interests: [],
        avatar: null
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [interestError, setInterestError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        if (type === 'checkbox' && name === 'interests') {
            if (checked) {
                if (formData.interests.includes(value)) {
                    // If the interest is already selected, deselect it
                    setFormData({ ...formData, interests: formData.interests.filter((interest) => interest !== value) });
                } else if (formData.interests.length < 2) {
                    // If less than 2 interests are selected, add the new interest
                    setFormData({ ...formData, interests: [...formData.interests, value] });
                } else {
                    // Otherwise, display error message
                    setInterestError('You can only select up to 2 interests');
                }
            } else {
                // Deselect the interest
                setFormData({ ...formData, interests: formData.interests.filter((interest) => interest !== value) });
                setInterestError('');
            }
        } else {
            setFormData({ ...formData, [name]: newValue });
        }
    };





    const validateStep1 = (): boolean => {
        const { first_name, last_name, password, confirm_password, interests } = formData;
        const newErrors: Partial<FormData> = {};

        if (!first_name || first_name.length < 3) {
            newErrors.first_name = 'First name must be at least 3 characters';
        }

        if (!last_name || last_name.length < 3) {
            newErrors.last_name = 'Last name must be at least 3 characters';
        }

        if (!password || password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (password !== confirm_password) {
            newErrors.confirm_password = 'Passwords do not match';
        }

        if (interests.length = 2) {
            setInterestError('You can only select up to 2 interests');
        } else {
            setInterestError('');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0 && interests.length > 0 && interests.length <= 2;
    };


    const handleNext = (): void => {
        if (validateStep1()) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = (): void => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (step === 1) {
            if (validateStep1()) {
                setStep(2); // Navigate to the second step
            }
        } else if (step === 2) {
            // Additional submission logic for the second step, if needed
            console.log("Form submitted:", formData);
        }
    };


    return (
        <Center>
            <Box maxWidth={480} py={20}>
                <form onSubmit={handleSubmit} style={{ display: step === 1 ? 'block' : 'none' }}>
                    <FormControl isRequired mb={8} isInvalid={!!errors.first_name}>
                        <FormLabel fontSize='xl' textAlign='center'>Register account</FormLabel>
                        <Input type='text' name='first_name' placeholder='Enter First Name' onChange={handleChange} />
                        <FormErrorMessage>{errors.first_name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired mb={8} isInvalid={!!errors.last_name}>
                        <Input type='text' name='last_name' placeholder='Enter Last Name' onChange={handleChange} />
                        <FormErrorMessage>{errors.last_name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired mb={8} isInvalid={!!errors.password}>
                        <Input type='password' name='password' placeholder='Password' onChange={handleChange} />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired mb={8} isInvalid={!!errors.confirm_password}>
                        <Input type='password' name='confirm_password' placeholder='Confirm Password' onChange={handleChange} />
                        <FormErrorMessage>{errors.confirm_password}</FormErrorMessage>
                    </FormControl>

                    <FormLabel fontSize={'xl'} textAlign={'center'}>Interests</FormLabel>
                    <FormControl display="flex" alignItems="center" mb="40px">
                        <Checkbox
                            name='interests'
                            value='Sports'
                            size="lg"
                            onChange={handleChange}
                            isChecked={formData.interests.includes('Sports')}
                            isDisabled={formData.interests.length >= 2 && !formData.interests.includes('Sports')}
                        />
                        <FormLabel mb="0" ml="2">Sports</FormLabel>
                        <Checkbox
                            ml="2"
                            name='interests'
                            value='Music'
                            size="lg"
                            onChange={handleChange}
                            isChecked={formData.interests.includes('Music')}
                            isDisabled={formData.interests.length >= 2 && !formData.interests.includes('Music')}
                        />
                        <FormLabel mb="0" ml="2">Music</FormLabel>
                        <Checkbox
                            ml="2"
                            name='interests'
                            value='Dancing'
                            size="lg"
                            onChange={handleChange}
                            isChecked={formData.interests.includes('Dancing')}
                            isDisabled={formData.interests.length >= 2 && !formData.interests.includes('Dancing')}
                        />
                        <FormLabel mb="0" ml="2">Dancing</FormLabel>
                        <Checkbox
                            ml="2"
                            name='interests'
                            value='Games'
                            size="lg"
                            onChange={handleChange}
                            isChecked={formData.interests.includes('Games')}
                            isDisabled={formData.interests.length >= 2 && !formData.interests.includes('Games')}
                        />
                        <FormLabel mb="0" ml="2">Games</FormLabel>
                    </FormControl>
                    <FormErrorMessage>{interestError}</FormErrorMessage>
                    <Button colorScheme='teal' type='button' onClick={handleNext} mt={4}>
                        Next
                    </Button>

                </form>

                <form onSubmit={handleSubmit} style={{ display: step === 2 ? 'block' : 'none' }}>
                    {/* Step 2 form fields */}
                    <FormControl isRequired mb={8}>
                        <FormLabel fontSize='xl' textAlign='center'>Upload Avatar</FormLabel>
                        <Input type='file' name='avatar' onChange={handleChange} />
                    </FormControl>

                    <Button colorScheme='teal' type='button' onClick={handleBack} mr={2} mt={4}>
                        Back
                    </Button>
                    <Button colorScheme='teal' type='submit' mt={4}>
                        Submit
                    </Button>
                </form>

            </Box>
        </Center>
    )
}

export default App;
