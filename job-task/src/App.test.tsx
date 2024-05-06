import { render, screen } from "@testing-library/react";

import App from "./App";

it("should have hello world", () => {
    render(<App />);
    const message = screen.queryByText(/Register account/i);
    expect(message).toBeVisible();
});

test("renders App component without crashing", () => {
    render(<App />);
  });

  test("renders Job Task element", () => {
    const { getByText } = render(<App />);
    const jobTaskElement = getByText(/Job Task/i);
    expect(jobTaskElement).toBeInTheDocument();
  });
  

  test("renders 'Happy Coding' instead of Footer component", () => {
    const { getByText } = render(<App />);
    const happyCodingElement = getByText(/Happy Coding/i);
    expect(happyCodingElement).toBeInTheDocument();
  });
  

  