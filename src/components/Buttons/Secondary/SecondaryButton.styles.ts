import { style } from 'typestyle';
import { colors } from '../../../styles/colors';

const styles = {
    buttonLight: style({
        width: '100%',
        height: '40px',
        backgroundColor: colors.backgroundLight,
        color: colors.telefonica_green,
        fontSize: '20px',
        fontWeight: '500',
        border: '2px solid ' + colors.telefonica_green,
        borderRadius: '4px',
        padding: '0px 16px',
        cursor: 'pointer',
        $nest: {
            '&:hover:enabled': {
                backgroundColor: colors.telefonica_green_dark,
                borderColor: colors.telefonica_green_dark,
                color: colors.textLight,
            },
            '&:focus:enabled': {
                border: '2px solid black',
                backgroundColor: colors.telefonica_green_dark,
                borderColor: colors.telefonica_green_dark,
                color: colors.textLight,
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
        backgroundColor: colors.backgroundDark,
        color: colors.telefonica_green,
        fontSize: '20px',
        fontWeight: '500',
        border: '2px solid ' + colors.telefonica_green,
        borderRadius: '4px',
        padding: '0px 16px',
        cursor: 'pointer',
        $nest: {
            '&:hover:enabled': {
                backgroundColor: colors.telefonica_green_dark,
                borderColor: colors.telefonica_green_dark,
                color: colors.textLight,
            },
            '&:focus:enabled': {
                border: '2px solid black',
                backgroundColor: colors.telefonica_green_dark,
                borderColor: colors.telefonica_green_dark,
                color: colors.textLight,
            },
            '&:disabled': {
                opacity: '0.5',
                cursor: 'not-allowed',
            }
        }
    }),
};

export default styles;