import { MouseEventHandler } from 'react';
import styles from './PrimaryButton.styles';

export type PrimaryButtonProps = {
    label: string,
    onClick: Function,
    disabled?: boolean,
    dark?: boolean,
};

const PrimaryButton = (
    props: {
        label: string,
        onClick: Function,
        disabled?: boolean,
        dark?: boolean,
    }
): JSX.Element => {
    return (
        <button
            className={props.dark ? styles.buttonDark : styles.buttonLight}
            onClick={props.onClick as MouseEventHandler}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
};

export default PrimaryButton;