import { useState } from 'react';
import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import Amount from '../Amount/Amount';
import InputNumber from '../InputNumber/InputNumber';
import ToolTip from '../ToolTip';

export type WithoutBoxInputProps = {
    amount: number,
    caption?: string,
    hideCents?: boolean,
    negativeRed?: boolean,
    value: number,
    minLimit: number,
    maxLimit: number,
    step?: number,
    onChange: Function,
    dark?: boolean,
};

const WithoutInputBox = (
    props: {
        amount: number,
        caption?: string,
        hideCents?: boolean,
        negativeRed?: boolean,
        value: number,
        minLimit: number,
        maxLimit: number,
        step: number,
        onChange: Function,
        dark?: boolean,
    }
): JSX.Element => {
    const [showTT, setShowTT] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    const onClickMinus = (): void => {
        if (props.value > props.minLimit) {
            const subs: number = props.value - props.step;
            props.onChange(subs < props.minLimit ? props.minLimit: subs);
        };
    };
    const onClickPlus = (): void => {
        if (props.value < props.maxLimit) {
            const add: number = props.value + props.step;
            props.onChange(add > props.maxLimit ? props.maxLimit : add);
            setClicked(true)
            if (add === props.maxLimit) setShowTT(true);
        } else {
            setShowTT(true);
        };
    };

    const handleCloseToolTip = (): void => {
        setShowTT(false);
    };

    return (
        <div className={props.dark ? styles.containerDark : styles.containerLight}>
            <Amount
                amount={props.amount}
                caption={props.caption || ''}
                hideCents={props.hideCents}
                negativeRed={props.negativeRed}
                dark={props.dark}
            />
            <ToolTip
                id='in1'
                label='¡Máximo 3 unidades!'
                position='top'
                show={showTT && clicked}
                onClickClose={handleCloseToolTip}
            >
                <InputNumber
                    value={props.value}
                    onClickMinus={onClickMinus}
                    onClickPlus={onClickPlus}
                    dark={props.dark}
                />
            </ToolTip>
        </div>
    );
};

export default WithoutInputBox;

const styles = {
    containerLight: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: colors.backgroundLight,
        border: '1px solid ' + colors.cardBorder,
        borderRadius: '4px',
        padding: '8px',
    }),
    containerDark: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: colors.backgroundDark,
        border: '1px solid ' + colors.cardBorder,
        borderRadius: '4px',
        padding: '8px',
    }),
    button: style({
        height: '24px',
        width: '24px',
    }),
    value: style({
        padding: '0px 16px',
    }),
};