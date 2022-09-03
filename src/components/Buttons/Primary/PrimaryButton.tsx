import React, { MouseEventHandler } from 'react';
import styles from './PrimaryButton.styles';

export type PrimaryButtonProps = {
    label: string,
    onClick: Function,
    onKeyDown?: Function,
    disabled?: boolean,
    dark?: boolean,
};

const PrimaryButton = (
    props: {
        label: string,
        onClick: Function,
        onKeyDown?: Function,
        disabled?: boolean,
        dark?: boolean,
    }
): JSX.Element => {
    const handleClick = (event: React.MouseEvent) => {
        props.onClick();
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        const handleEvent: Function = props.onKeyDown || props.onClick;
        if (event.key === 'Enter' || event.key === ' ') handleEvent();
    };

    return (
        <button
            role='primary-button'
            className={props.dark ? styles.buttonDark : styles.buttonLight}
            onClick={(event) => handleClick(event)}
            onKeyDown={(event) => handleKeyDown(event)}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    );
};

export default PrimaryButton;