import { useState } from 'react';
import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import Highlight from '../Texts/Highlight';
import Item from '../List/Item';
import Texts from '../Texts/Texts';
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

    return (
        <div className={props?.dark ? styles.containerDark : styles.containerLight}>
            <Highlight label='¡PROMO DIPONIBLE!' color='white'
                backgroundColor={colors.textWarning} fontWeight='normal'
            />
            <div className={styles.benefits}>
                <Item label='Un texto random...?' fontWeight='bold' />
                <Item label='Lorem ipsum dolor sit amet!' fontWeight='normal' />
                <Texts
                    label='Excepteur sint occaecat cupidatat non proident.'
                    color={colors.textWarning} fontWeight='normal'
                />
            </div>
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
    benefits: style({
        display: 'flex',
        flexDirection: 'column',
    }),
};