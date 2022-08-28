import { render } from '@testing-library/react';

import Plus, { PlusProps } from '../Plus';

const baseProps: PlusProps = {
    lg: undefined,
};

let props: PlusProps;

describe('Close tests:', () => {

    beforeEach(() => {
        props = Object.assign({}, baseProps);
    });

    it('Render label props', () => {
        expect(render(<Plus {...props} />).container).toBeInTheDocument();
    });
    
    it('Render label props', () => {
        props.lg = true;
        expect(render(<Plus {...props} />).container).toBeInTheDocument();
    });

});