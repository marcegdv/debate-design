import { numberToCurrency } from '../functions';

describe('numberToCurrency() tests:', () => {

    const value: number = 1234.567;

    test('Return the currency for a number', () => {
        const currency: string = numberToCurrency(value);
        const expected: string = '$1.234,57';
        expect(currency).toEqual(expected);
    });

    test('Return the currency for a number, with inverted mode', () => {
        const currency: string = numberToCurrency(value, true);
        const expected: string = '$1,234.57';
        expect(currency).toEqual(expected);
    });

});