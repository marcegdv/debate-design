import styles from './TwoButtons.styles'

import Primary, { PrimaryButtonProps } from '../Primary/PrimaryButton';
import Secondary, { SecondaryButtonProps } from '../Secondary/SecondaryButton';

export type TwoButtonsProps = {
    primaryLabel: string,
    secondaryLabel: string,
    primaryOnClick: Function,
    secondaryOnClick: Function,
    primaryOnKeyDown?: Function,
    secondaryOnKeyDown?: Function,
    primaryDisabled?: boolean,
    secondaryDisabled?: boolean,
    dark?: boolean,
};

const TwoButtons = (props: TwoButtonsProps): JSX.Element => {
    const primaryProps: PrimaryButtonProps = {
        label: props.primaryLabel,
        onClick: props.primaryOnClick,
        onKeyDown: props.primaryOnKeyDown,
        disabled: props.primaryDisabled,
        dark: props.dark,
    };
    const secondaryProps: SecondaryButtonProps = {
        label: props.secondaryLabel,
        onClick: props.secondaryOnClick,
        onKeyDown: props.secondaryOnKeyDown,
        disabled: props.secondaryDisabled,
        dark: props.dark,
    };
    return (
        <div className={styles.container}>
            <div className={styles.primaryContainer}>
                <Primary {...primaryProps} />
            </div>
            <div className={styles.secondaryContainer}>
                <Secondary {...secondaryProps} />
            </div>
        </div>
    );
};

export default TwoButtons;