import { useState } from 'react';
import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import WithoutInputBox from './WithoutInputBox';
import PrimaryButton from '../Buttons/Primary';
import SecondaryButton from '../Buttons/Secondary';

const ZComponent = (
    props: {
        dark?: boolean,
    }
): JSX.Element => {
    const [quantity, setQuantity] = useState<number>(0);
    const [amount, setAmount] = useState<number>(9999.456);
    const minLimit = 0;
    const maxLimit = 3;

    const setValues = (newAmount: number, newQuantity: number): void => {
        setQuantity(newAmount);
        setAmount(newQuantity);
    };

    const onClickMinus = (): void => {
        if (quantity > minLimit) {
            setValues(quantity + 1, amount * quantity);
        };
    };
    const onClickPlus = (): void => {
        if (quantity < maxLimit) {
            setValues(quantity + 1, amount * quantity);
        };
    };
    const onClickAddAndContinue = (): void => {
        window.alert('Add and Continue!');
    };
    const onClickContinueWithout = (): void => {
        window.alert('Continue without adding!');
    };

    console.log(amount, quantity);

    return (
        <div className={props?.dark ? styles.containerDark : styles.containerLight}>
            <WithoutInputBox
                amount={9999.456} caption='por mes' hideCents={true} negativeRed={false}
                value={quantity} minLimit={minLimit} maxLimit={maxLimit} dark={props.dark}
            />
            <PrimaryButton label='Agregar y continuar' onClick={onClickAddAndContinue} disabled={quantity === 0} dark={props.dark}/>
            <SecondaryButton label='Continuar sin agregar' onClick={onClickContinueWithout} dark={props.dark}/>
        </div>
    );
};

export default ZComponent;

const styles = {
    containerLight: style({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
        backgroundColor: colors.backgroundLight,
    }),
    containerDark: style({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
        backgroundColor: colors.backgroundDark,
    }),
};