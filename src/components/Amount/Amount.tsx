import styles from './Amount.styles';
import { numberToCurrency } from '../../utils/functions';

export type AmountProps = {
    amount: number,
    caption: string,
    hideCents?: boolean,
    negativeRed?: boolean,
    dark?: boolean,
};

const Amount = (
    props: {
        amount: number,
        caption: string,
        hideCents?: boolean,
        negativeRed?: boolean,
        dark?: boolean,
    }
): JSX.Element => {
    const amount = props.hideCents ?
        numberToCurrency(props.amount).split(',')[0] : numberToCurrency(props.amount);
    const amountColor =
        props.negativeRed === true && props.amount < 0 ?
            styles.amountNegative
            :
            props.dark ?
                styles.amountColorDark
                :
                styles.amountColorLight;

    return (
        <div className={props.dark ? styles.containerDark : styles.containerLight}>
            <span className={styles.amount + ' ' + amountColor}>{amount}</span>
            <span className={styles.caption}>{props.caption}</span>
        </div>
    );
};

export default Amount;