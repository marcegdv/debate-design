import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import InputNumber, { InputNumberProps } from './InputNumber';

const mockFunction = jest.fn();
const baseProps: InputNumberProps = {
    value: 5,
    onClickMinus: mockFunction,
    onClickPlus: mockFunction,
    minusDisabled: false,
    plusDisabled: false,
    dark: false,
};

let props: InputNumberProps;

describe('Amount tests:', () => {

    beforeEach(() => {
        mockFunction.mockClear();
        props = Object.assign({}, baseProps);
    });

    test('Renders value', () => {
        render(<InputNumber {...props} />);
        const value = screen.getByText(props.value);
        expect(value).toBeInTheDocument();
    });

    test('Call the function when click buttons', () => {
        render(<InputNumber {...props} />);
        fireEvent.click(screen.getByTestId('inputNumberMinusButton'));
        expect(mockFunction).toBeCalledTimes(1);
        fireEvent.click(screen.getByTestId('inputNumberPlusButton'));
        expect(mockFunction).toBeCalledTimes(2);
    });
    
    test('Do not call the function when click disabled button', () => {
        props.minusDisabled = true;
        props.plusDisabled = true;
        render(<InputNumber {...props} />);
        fireEvent.click(screen.getByTestId('inputNumberMinusButton'));
        expect(mockFunction).toBeCalledTimes(0);
        fireEvent.click(screen.getByTestId('inputNumberPlusButton'));
        expect(mockFunction).toBeCalledTimes(0);
    });

    test('Render component in dark mode', () => {
        props.dark = true;
        render(<InputNumber {...props} />);
        const value = screen.getByText(props.value);
        expect(value).toBeInTheDocument();
    });

});