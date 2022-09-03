import { fireEvent, render, screen } from '@testing-library/react';

import Button, { SecondaryButtonProps } from './SecondaryButton';

const mockOnClick = jest.fn();
const mockOnKeyDown = jest.fn();
const baseProps: SecondaryButtonProps = {
    label: 'My button',
    onClick: mockOnClick,
    onKeyDown: mockOnKeyDown,
    disabled: false,
    dark: false,
};

describe('PrimaryButton tests:', () => {
    
    let props: SecondaryButtonProps;
    beforeEach(() => {
        mockOnClick.mockClear();
        mockOnKeyDown.mockClear();
        props = Object.assign({}, baseProps);
    });

    it('Button was rendered', () => {
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        expect(button).toBeInTheDocument();
    });

    it('Calls the function when clicked', () => {
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        fireEvent.click(button);
        expect(mockOnClick).toBeCalledTimes(1);
    });

    it('Do not calls the function when key pressed is different from Enter or SpaceBar', () => {
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        fireEvent.keyDown(button, { key: 'A' });
        expect(mockOnKeyDown).toBeCalledTimes(0);
    });

    it('Calls the function when Enter key was pressed', () => {
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        fireEvent.keyDown(button, { key: 'Enter' });
        expect(mockOnKeyDown).toBeCalledTimes(1);
    });

    it('Calls the function when SpaceBar key was pressed', () => {
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        fireEvent.keyDown(button, { key: ' ' });
        expect(mockOnKeyDown).toBeCalledTimes(1);
    });

    it('Calls the function onClicn if onKeyDown is undefined when Enter key was pressed', () => {
        props.onKeyDown = undefined;
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        fireEvent.keyDown(button, { key: 'Enter' });
        expect(mockOnClick).toBeCalledTimes(1);
    });

    it('Calls the function onClicn if onKeyDown is undefined when SpaceBar key was pressed', () => {
        props.onKeyDown = undefined;
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        fireEvent.keyDown(button, { key: ' ' });
        expect(mockOnClick).toBeCalledTimes(1);
    });

    it('Render in dark mode, and call the function', () => {
        props.dark = true;
        render(<Button {...props} />);
        const button = screen.getByRole('secondary-button');
        fireEvent.click(button);
        expect(mockOnClick).toBeCalledTimes(1);
    });

});