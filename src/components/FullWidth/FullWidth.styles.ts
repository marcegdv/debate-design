import { style } from "typestyle";
import { colors } from "../../styles/colors";

const styles = {
    containerLight: style({
        backgroundColor: colors.backgroundLight,
    }),
    containerDark: style({
        backgroundColor: colors.backgroundDark,
    }),
    defaults: style({
        padding: '8px',
        userSelect: 'none',
        cursor: 'default',
    }),
};

export default styles;