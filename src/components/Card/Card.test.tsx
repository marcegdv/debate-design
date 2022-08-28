import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card, { CardProps } from './Card';

const childrenText: string = 'Card children';
const baseProps: CardProps = {
    title: 'Card title',
    dark: false,
    children: <div>{childrenText}</div>,
};
let props: CardProps;

describe('Card tests:', () => {

    beforeEach(() => {
        props = Object.assign({}, baseProps);
    });

    it('Render label props', () => {
        render(<Card {...props} />);
        const title = screen.getByText(props.title);
        expect(title).toBeInTheDocument();
    });

    it('Render children', () => {
        render(<Card {...props} />);
        const children = screen.getByText(childrenText);
        expect(children).toBeInTheDocument();
    });

    it('Render in dark mode with children', () => {
        props.dark = true;
        render(<Card {...props} />);
        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(childrenText)).toBeInTheDocument();
    });

});