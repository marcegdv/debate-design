import { style } from "typestyle";
import { colors } from "../../styles/colors";

export type CloseProps = {
    color?: string,
    backgroundColor?: string,
    hoverColor?: string,
};

const Close = (
    props: {
        color?: string,
        backgroundColor?: string,
        hoverColor?: string,
    },
): JSX.Element => {
    const color = (
        color: string = colors.textDark,
        backgroundColor: string = 'inherit',
        hoverColor: string = 'revert',
    ) => {
        return style({
            // borderWidth: '1px',
            // borderStyle: 'solid',
            // borderColor: colors.cardBorderLight,
            color: color,
            backgroundColor: backgroundColor,
            $nest: {
                '&:hover': {
                    color: hoverColor,
                },
            },
        });
    };

    return (
        <svg className={color(props?.color, props?.backgroundColor)}
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    );
};

export default Close;
