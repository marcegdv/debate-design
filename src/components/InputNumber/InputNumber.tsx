import { MouseEventHandler } from 'react';
import styles from './InputNumber.styles';

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
                    <Dash lg/>
                </button>
                <div className={props.dark ? styles.valueDark : styles.valueLight}>
                    {props.value}
                </div>
                <button
                    className={styles.plusButton}
                    onClick={props.onClickPlus as MouseEventHandler}
                    disabled={props.plusDisabled}
                >
                    <Plus lg/>
                </button>
            </div>
        </div>
    );
};

export default InputNumber;