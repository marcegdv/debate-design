import { render } from '@testing-library/react';

import Dash, { DashProps } from '../Dash';

const baseProps: DashProps = {
    lg: undefined,
};

let props: DashProps;

describe('Close tests:', () => {

    beforeEach(() => {
        props = Object.assign({}, baseProps);
    });

    it('Render label props', () => {
        expect(render(<Dash {...props} />).container).toBeInTheDocument();
    });
    
    it('Render label props', () => {
        props.lg = true;
        expect(render(<Dash {...props} />).container).toBeInTheDocument();
    });

});