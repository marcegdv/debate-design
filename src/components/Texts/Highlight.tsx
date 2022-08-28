import { style } from "typestyle";
import { colors } from "../../styles/colors";

export type fontWeightType = 'bolder' | 'bold' | 'normal' | 'lighter';
export type HighlightProps = {
    label: string,
    color: string,
    backgroundColor: string,
    fontWeight: fontWeightType,
}

const Highlight = (
    props: {
        label: string,
        color: string,
        backgroundColor: string,
        fontWeight?: fontWeightType,
    }
): JSX.Element => {

    const fontWeight = styles[props.fontWeight || 'normal'];
    const color = stylesColor(props.color);
    const backgorundColor = stylesBackgorundColor(props.backgroundColor);

    return (
        <span className={
            fontWeight + ' ' + color + ' ' + backgorundColor + ' ' +
            styles.container
        }>
            {props.label}
        </span>
    );
};

export default Highlight;

const stylesColor = (color: string) => {
    return style({
        color: color,
    });
};
const stylesBackgorundColor = (color: string) => {
    return style({
        backgroundColor: color,
    });
};
const styles = {
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
    container: style({
        padding: '0px 8px',
        width: 'fit-content',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        borderBottomRightRadius: '3px',
    }),
};