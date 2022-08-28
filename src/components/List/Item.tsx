import { style } from 'typestyle';
import { colors } from '../../styles/colors';

import Check from "../svg/Check";

export type ItemProps = {
    label: string,
};
export type fontWeightType = 'bolder' | 'bold' | 'normal' | 'lighter';

const Item = (
    props: {
        label: string,
        fontWeight?: fontWeightType,
    }
): JSX.Element => {
    const fontWeight = styles[props.fontWeight || 'normal'];

    return (
        <div className={styles.container}>
            <div className={styles.check}>
                <Check name='check1Lg' />
            </div>
            <div className={styles.label + ' ' + fontWeight}>
                {props.label}
            </div>
        </div >
    );
};

export default Item;

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'start',
    }),
    check: style({
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        padding: '4px 4px 0px 0px',
        width: '24px',
        color: colors.green_dark,
    }),
    label: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.text,
    }),
    lighter: style({
        fontWeight: 'lighter',
    }),
    normal: style({
        fontWeight: 'normal',
    }),
    bold: style({
        fontWeight: 'bold',
    }),
    bolder: style({
        fontWeight: 'bolded',
    }),
};