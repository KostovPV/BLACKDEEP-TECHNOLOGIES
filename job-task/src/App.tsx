import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                margin: 0,
                padding: 0,
                overflow: 'hidden', // Prevent scrolling
                position: 'relative',
            },
        },
    },
});

function App() {
    return (
        <ChakraProvider theme={theme}>

            <Router>
                <Header />
                <Box bg="rgb(158, 158, 158)" h="100vh">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Box>

                <Footer />
            </Router>

        </ChakraProvider>
    );
}

export default App;
