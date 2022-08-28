import { render } from '@testing-library/react';

import Close, { CloseProps } from '../Close';

const baseProps: CloseProps = {
    color: undefined,
    backgroundColor: undefined,
    hoverColor: undefined,
};
let props: CloseProps;

describe('Close tests:', () => {

    beforeEach(() => {
        props = Object.assign({}, baseProps);
    });

    it('Render component', () => {
        const component = render(<Close {...props} />).container;
        expect(component).toBeInTheDocument();
    });

});