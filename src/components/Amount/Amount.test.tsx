import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import Amount, { AmountProps } from './Amount';

const baseProps: AmountProps = {
    amount: 100,
    caption: 'test',
    hideCents: false,
    negativeRed: false,
};

let props: AmountProps;

describe('Amount tests:', () => {

    beforeEach(() => {
        props = Object.assign({}, baseProps);
    });

    test('renders Amount with cents', () => {
        render(<Amount {...props} />);
        const amount = screen.getByText('$100,00');
        expect(amount).toBeInTheDocument();
    });

    test('render Caption', () => {
        render(<Amount {...props} />);
        const caption = screen.getByText('test');
        expect(caption).toBeInTheDocument();
    });

    test('render Amount without cents', () => {
        props.hideCents = true;
        render(<Amount {...props} />);
        const amount = screen.getByText('$100');
        expect(amount).toBeInTheDocument();
    });

    test('render Amount in colors.textDanger when negative', () => {
        props.amount = -100;
        props.negativeRed = true;
        render(<Amount {...props} />);
        const amount = screen.getByText('$-100,00');
        expect(amount).toBeInTheDocument();
    });

    test('render component in dark mode', () => {
        props.dark = true;
        render(<Amount {...props} />);
        const amount = screen.getByText('$100,00');
        expect(amount).toBeInTheDocument();
    });

});