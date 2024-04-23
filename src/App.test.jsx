import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';
import userEvent from '@testing-library/user-event';

// describe("App component", () => {
//   it("renders Home", () => {
//     render(<App />);
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

describe("App component", () => {
    it("renders Home componenet", () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it("renders home component after click", async () => {
        const user = userEvent.setup();

        render(<Home />);
        const button = screen.getByRole('button', { name:  "Home"});

        await user.click(button);

        expect(screen.getByRole("heading").textContent).toMatch(/Home/i)
    })

    it("renders product component after click", async () => {
        const user = userEvent.setup();

        render(<Home />);
        const button = screen.getByRole('button', { name: "Products" });

        await user.click(button);

        expect(screen.getByRole("heading").textContent).toMatch(/Products/i)
    })  
})