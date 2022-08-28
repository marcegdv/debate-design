import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import Button, { PrimaryButtonProps } from './PrimaryButton';

const mockFunction = jest.fn();
const baseProps: PrimaryButtonProps = {
    label: 'My button',
    onClick: mockFunction,
    disabled: false,
    dark: false,
};
let props: PrimaryButtonProps;

describe('PrimaryButton tests:', () => {

    beforeEach(() => {
        mockFunction.mockClear();
        props = Object.assign({}, baseProps);
    });
    
    it('Render label props', () => {
        render(<Button {...props} />);
        const button = screen.getByText(props.label);
        expect(button).toBeInTheDocument();
    });
    
    it('Call the function when clicked', () => {
        render(<Button {...props} />);
        const button = screen.getByText(props.label);
        fireEvent.click(button);
        expect(mockFunction).toBeCalledTimes(1);
    });
    
    it('Render in dark mode, and call the function', () => {
        props.dark = true;
        render(<Button {...props} />);
        const button = screen.getByText(props.label);
        fireEvent.click(button);
        expect(mockFunction).toBeCalledTimes(1);
    });

});