import { style } from 'typestyle';
import { colors } from '../../styles/colors';

const styles = {
    containerLight: style({
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.backgroundLight,
        justifyContent: 'start',
        padding: '8px',
    }),
    containerDark: style({
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.backgroundDark,
        justifyContent: 'start',
        padding: '8px',
    }),
    amount: style({
        fontSize: '24px',
        fontWeight: '500',
    }),
    amountColorLight: style({
        color: colors.textDark,
    }),
    amountColorDark: style({
        color: colors.textLight,
    }),
    amountNegative: style({
        color: colors.textDanger,
    }),
    caption: style({
        paddingLeft: '4px',
        paddingTop: '8px',
        fontSize: '16px',
        fontWeight: '200',
        color: colors.textSecondary,
    }),
};

export default styles;