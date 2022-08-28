import { style } from 'typestyle';
import { colors } from '../../../styles/colors';

const styles = {
    buttonLight: style({
        width: '100%',
        height: '40px',
        backgroundColor: colors.green,
        color: colors.textLight,
        fontSize: '20px',
        fontWeight: '500',
        border: '2px solid ' + colors.green,
        borderRadius: '4px',
        padding: '0px 16px',
        cursor: 'pointer',
        $nest: {
            '&:hover:enabled': {
                backgroundColor: colors.green_dark,
                borderColor: colors.green_dark,
                color: colors.textLight
            },
            '&:focus': {
                border: '2px solid black',
                backgroundColor: colors.green_dark,
            },
            '&:disabled': {
                opacity: '0.5',
                cursor: 'not-allowed',
            }
        }
    }),
    buttonDark: style({
        width: '100%',
        height: '40px',
        backgroundColor: colors.green,
        color: colors.textLight,
        fontSize: '20px',
        fontWeight: '500',
        border: '2px solid ' + colors.green,
        borderRadius: '4px',
        padding: '0px 16px',
        cursor: 'pointer',
        $nest: {
            '&:hover:enabled': {
                backgroundColor: colors.green_dark,
                borderColor: colors.green_dark,
                color: colors.textLight
            },
            '&:focus': {
                border: '2px solid black',
                backgroundColor: colors.green_dark,
            },
            '&:disabled': {
                opacity: '0.5',
                cursor: 'not-allowed',
            }
        }
    }),
};

export default styles;