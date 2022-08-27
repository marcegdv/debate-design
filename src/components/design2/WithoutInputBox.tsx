import { useState } from 'react';
import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import Amount, { AmountProps } from '../Amount/Amount';
import InputNumber, { InputNumberProps } from '../InputNumber/InputNumber';

export type WithoutBoxInputProps = {
    amount: number,
    caption?: string,
    hideCents?: boolean,
    negativeRed?: boolean,
    value: number,
    minLimit: number,
    maxLimit: number,
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
        onChange: Function,
        dark?: boolean,
    }
): JSX.Element => {
    const onClickMinus = (): void => {
        if (props.value > props.minLimit) {
            props.onChange(props.value - 1);
        };
    };
    const onClickPlus = (): void => {
        if (props.value < props.maxLimit) {
            props.onChange(props.value + 1);
        };
    };

    const amountProps: AmountProps = {
        amount: props.amount,
        caption: props.caption || '',
        hideCents: props.hideCents,
        negativeRed: props.negativeRed,
        dark: props.dark,
    };
    const inputNumberProps: InputNumberProps = {
        value: props.value,
        onClickMinus: onClickMinus,
        onClickPlus: onClickPlus,
        minusDisabled: false,
        plusDisabled: props.value === props.maxLimit,
        dark: props.dark,
    };

    return (
        <div className={props.dark ? styles.containerDark : styles.containerLight}>
            <Amount {...amountProps} />
            <InputNumber {...inputNumberProps} />
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