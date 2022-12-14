import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FullWidth, { FullWidthProps } from './FullWidth';

const childrenText: string = 'Children text';
const baseProps: FullWidthProps = {
    dark: false,
    children: <div>{childrenText}</div>,
};

describe('FullWidth tests:', () => {
    
    let props: FullWidthProps;
    beforeEach(() => {
        props = Object.assign({}, baseProps);
    });

    it('Render children', () => {
        render(<FullWidth {...props} />);
        expect(screen.getByText(childrenText)).toBeInTheDocument();
    });

    it('Render in dark mode with children', () => {
        props.dark = true;
        render(<FullWidth {...props} />);
        expect(screen.getByText(childrenText)).toBeInTheDocument();
    });

});