import { MouseEventHandler } from 'react';
import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import Dash from '../svg/Dash';
import Plus from '../svg/Plus';

export type InputNumberProps = {
    value: number,
    onClickMinus: Function,
    onClickPlus: Function,
    minusDisabled?: boolean,
    plusDisabled?: boolean,
    dark?: boolean,
};

const InputNumber = (props: InputNumberProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={props.dark ? styles.subContainerDark : styles.subContainerLight}>
                <button
                    className={styles.minusButton}
                    onClick={props.onClickMinus as MouseEventHandler}
                    disabled={props.minusDisabled}
                >
                    <Dash />
                </button>
                <div className={styles.value}>{props.value}</div>
                <button
                    className={styles.plusButton}
                    onClick={props.onClickPlus as MouseEventHandler}
                    disabled={props.plusDisabled}
                >
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default InputNumber;

const styles = {
    container: style({
        padding: '8px',
    }),
    subContainerLight: style({
        height: '32px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.backgroundLight,
        border: '1px solid ',
        borderColor: colors.cardBorderLight,
        borderRadius: '4px',
        justifyContent: 'end',
    }),
    subContainerDark: style({
        height: '32px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.backgroundDark,
        border: '1px solid ',
        borderColor: colors.cardBorderDark,
        borderRadius: '4px',
        justifyContent: 'end',
    }),
    minusButton: style({
        color: colors.telefonica_green_dark,
        backgroundColor: 'inherit',
        fontWeight: '900',
        width: '32px',
        border: '1px solid',
        borderColor: colors.telefonica_green,
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        $nest: {
            '&:disabled': {
                borderColor: colors.cardBorder,
                color: colors.cardBorder,
                opacity: '0.5',
            }
        },
    }),
    value: style({
        border: '1px solid',
        borderColor: colors.telefonica_green,
        color: colors.textPrimaryLight,
        backgroundColor: 'inherit',
        minWidth: '32px',
        width: 'fit-content',
        padding: '0px 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '0px',
    }),
    plusButton: style({
        color: colors.telefonica_green_dark,
        backgroundColor: 'inherit',
        fontWeight: '900',
        width: '32px',
        border: '1px solid',
        borderColor: colors.telefonica_green,
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        $nest: {
            '&:disabled': {
                borderColor: colors.cardBorder,
                color: colors.cardBorder,
                opacity: '0.5',
            }
        },
    }),
};