import styles from './SecondaryButton.styles';
import { MouseEventHandler } from 'react';

export type SecondaryButtonProps = {
    label: string,
    onClick: Function,
    disabled?: boolean,
    dark?: boolean,
};

const SecondaryButton = (
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

export default SecondaryButton;