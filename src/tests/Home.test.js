import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders two cards', () => {
    render(<Home />);
    const card1ReactElement = screen.getByText(/Diseño nº 1/i);
    expect(card1ReactElement).toBeInTheDocument();
    const card2ReactElement = screen.getByText(/Diseño nº 2/i);
    expect(card2ReactElement).toBeInTheDocument();
});
