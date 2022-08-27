import { useState } from 'react';
import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import TwoButtons from '../Buttons/TwoButtons/TwoButtons';
import WithoutInputBox from './WithoutInputBox';

const ZComponent = (
    props: {
        dark?: boolean,
    }
): JSX.Element => {
    const [quantity, setQuantity] = useState<number>(0);
    const minLimit = 0;
    const maxLimit = 3;

    const onClickMinus = (): void => {
        if (quantity > minLimit) {
            setQuantity((prev) => prev - 1);
        };
    };
    const onClickPlus = (): void => {
        if (quantity < maxLimit) {
            setQuantity((prev) => prev + 1);
        };
    };
    const onClickAddAndContinue = (): void => {
        window.alert(`Design nº 1 - Add ${quantity} and Continue!`);
    };
    const onClickContinueWithout = (): void => {
        window.alert('Design nº 1 - Continue without adding!');
    };

    return (
        <div className={props?.dark ? styles.containerDark : styles.containerLight}>
            <WithoutInputBox
                amount={1234.567 * quantity}  hideCents={true} negativeRed={false}
                value={quantity} caption='por mes'
                onClickMinus={onClickMinus} onClickPlus={onClickPlus}
                plusDisabled={quantity === maxLimit}
                dark={props?.dark}
            />
            <TwoButtons
                primaryLabel='Agregar y continuar'
                primaryOnClick={onClickAddAndContinue}
                primaryDisabled={quantity === 0}
                secondaryLabel='Continuar sin agregar'
                secondaryOnClick={onClickContinueWithout}
                dark={props?.dark}
            />
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