export const numberToCurrency = (amount: number, invert: boolean = false): string => {
    const currency: string = '$' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    if (invert) { return currency };
    const integer: string = currency.split('.')[0];
    const cents: string = currency.split('.')[1];
    return integer.replaceAll(',', '.') + ',' + cents
};