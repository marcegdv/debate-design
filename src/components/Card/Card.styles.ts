import { style } from "typestyle";
import { colors } from "../../styles/colors";

const styles = {
    containerLight: style({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.backgroundLight,
    }),
    containerDark: style({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.backgroundDark,
    }),
    titleLight: style({
        border: '2px solid',
        borderColor: colors.telefonica_sky,
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        fontFamily: 'Verdana',
        backgroundColor: colors.telefonica_sky,
        color: colors.textLight,
        padding: '8px',
    }),
    titleDark: style({
        border: '2px solid',
        borderColor: colors.telefonica_sky,
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        fontFamily: 'Verdana',
        backgroundColor: colors.telefonica_sky,
        color: colors.textDark,
        padding: '8px',
    }),
    bodyLight: style({
        border: '2px solid',
        borderColor: colors.telefonica_sky,
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        backgroundColor: colors.backgroundLight,
        padding: '4px',
    }),
    bodyDark: style({
        border: '2px solid',
        borderColor: colors.telefonica_sky,
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        backgroundColor: colors.backgroundDark,
        padding: '4px',
    }),
};

export default styles;