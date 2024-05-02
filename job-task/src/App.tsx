import './App.css'
import { Box, FormControl, FormHelperText, FormLabel, Input, Button, Center } from '@chakra-ui/react'

function App() {
    return (
        <Center >
            <Box maxWidth={780} minWidth={400} py='20' >
                <form>
                    <FormControl isRequired mb='30px'>
                        <FormLabel fontSize={'xl'} textAlign={'center'}>Register account</FormLabel>
                        <Input type='text' name='first_name' placeholder='Enter First Name' />
                    </FormControl>

                    <FormControl isRequired mb='30px'>
                        <Input type='text' name='last_name' placeholder='Enter Last Name' />
                    </FormControl>
                    
                    <FormControl isRequired mb='30px'>
                        <Input type='password' name='pass' placeholder='Password' />
                    </FormControl>
                    
                    <FormControl isRequired mb='30px'>
                    <Input type='password' name='re-pass' placeholder='Repeat Password' />
                    </FormControl> 
                    
                    <Button colorScheme='teal' type='submit' mt={4}>
                        Next
                    </Button>
                </form>
            </Box>
        </Center >
    )
}

export default App
