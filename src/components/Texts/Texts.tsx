import { style } from "typestyle";
import { colors } from "../../styles/colors";

export type fontWeightType = 'bolder' | 'bold' | 'normal' | 'lighter';
export type TextsProps = {
    label: string,
    color: string,
    fontWeight: fontWeightType,
}

const Texts = (
    props: {
        label: string,
        color?: string,
        fontWeight?: fontWeightType,
    }
): JSX.Element => {

    const fontWeight = styles[props.fontWeight || 'normal'];
    const color = stylesColor(props.color || colors.text);

    return (
        <span className={fontWeight + ' ' + color}>
            {props.label}
        </span>
    );
};

export default Texts;

const stylesColor = (color: string) => {
    return style({
        color: color,
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
};