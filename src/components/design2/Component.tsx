import { useEffect, useState } from 'react';
import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import WithoutInputBox from './WithoutInputBox';
import TwoButtons from '../Buttons/TwoButtons/TwoButtons';

const ZComponent = (
    props: {
        dark?: boolean,
    }
): JSX.Element => {
    const [quantity, setQuantity] = useState<number>(0);
    const amount = 1234.567;
    const minLimit = 0;
    const maxLimit = 3;

    const onClickAddAndContinue = (): void => {
        window.alert(`Design nº 2 - Add ${quantity} and Continue!`);
    };
    const onClickContinueWithout = (): void => {
        window.alert('Design nº 2 - Continue without adding!');
    };
    
    console.log(quantity);

    return (
        <div className={props?.dark ? styles.containerDark : styles.containerLight}>
            <WithoutInputBox
                amount={amount} caption='por mes' hideCents={true} negativeRed={false}
                value={quantity} minLimit={minLimit} maxLimit={maxLimit} dark={props.dark}
                onChange={setQuantity}
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