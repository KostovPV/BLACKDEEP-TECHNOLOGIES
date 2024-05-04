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
                <Box
                    h="100vh"
                    position="relative"
                    overflow="hidden"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: -1,
                            filter: 'blur(6px)', // Adjust the blur strength as needed
                            opacity: 1.3, // Adjust the opacity level as needed
                        }}
                    >
                        <source src="/comp-back.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
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
