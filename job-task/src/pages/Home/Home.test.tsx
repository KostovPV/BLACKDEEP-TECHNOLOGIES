import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter as Router } from 'react-router-dom';

// import { FormErrorMessage } from "@chakra-ui/react";

describe("Home component test", () => {

    test("renders Register account", () => {
        render(
            <Router>
                <Home />
            </Router>
        );
        const register = screen.getByText(/Register account/i);
        expect(register).toBeInTheDocument();
    });

    test("shows first form section by default", () => {
        render(
            <Router>
                <Home />
            </Router>
        );
        const firstNameInput = screen.getByPlaceholderText(/Enter First Name/i);
        expect(firstNameInput).toBeVisible();
        const nextButton = screen.getByText(/Next/i);
        expect(nextButton).toBeVisible();
    });

    test("does not show second form submitButton by default", () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Assert that the submit button for the second form section is not visible
        const submitButton = screen.queryByText(/Submit/i); // Use queryByText to check if the button exists
        expect(submitButton).toBeNull(); // Check that the button is not in the DOM
    });

    test("does not show second form section Submit Button by default", () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Assert that the submit button for the second form section is not in the document
        const submitButton = screen.queryByText(/Submit/i); // Use queryByText to check if the button exists
        expect(submitButton).not.toBeInTheDocument(); // Check that the button is not in the document
    });


    test("does not show second form backButton by default", () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Assert that the submit button for the second form section is not visible
        const backButton = screen.queryByText(/Back/i); // Use queryByText to check if the button exists
        expect(backButton).toBeNull(); // Check that the button is not in the DOM
    });

    test("does not show second form section submit button by default", () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Query the submit button for the second form section
        const submitButton = screen.queryByText(/Submit/i);

        // Assert that the submit button does not exist
        expect(submitButton).not.toBeInTheDocument();
    });


});


