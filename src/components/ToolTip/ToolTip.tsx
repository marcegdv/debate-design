import { MouseEventHandler } from "react";
import { style } from "typestyle";
import { colors } from "../../styles/colors";

import Close from "../svg/Close";

export type ToolTipPositionType = 'top' | 'right' | 'bottom' | 'left';
export type ToolTipProps = {
    id: string,
    label: string,
    position: ToolTipPositionType,
    onClickClose: Function,
    show: boolean,
    children?: JSX.Element,
};

const ToolTip = (
    props: {
        id: string,
        label: string,
        position: ToolTipPositionType,
        onClickClose: Function,
        show: boolean,
        children?: JSX.Element,
    }
) => {
    const getPosition = () => {
        const top: number | undefined = document.getElementById(props.id)?.offsetTop;
        const left: number | undefined = document.getElementById(props.id)?.offsetLeft;
        const height: number | undefined = document.getElementById(props.id)?.offsetHeight;
        // const width: number | undefined = document.getElementById(props.id)?.offsetWidth;
        // console.log(top, left);
        return style({
            position: 'absolute',
            top: (top || 0) - (height || 0) + 6,
            left: (left || 0) - 14,
        });
    }

    return (
        <>
            <div id={props.id}>
                {props.children}
            </div>
            {props.show && <div className={styles.container + ' ' + getPosition()}>
                {props.label}
                <div
                    className={styles.close}
                    onClick={props.onClickClose as MouseEventHandler}
                >
                    <Close />
                </div>
            </div>}
        </>
    );
};

export default ToolTip;

const styles: any = {
    container: style({
        borderRadius: '3px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: colors.cardBorder,
        backgroundColor: colors.backgroundLight,
        fontSize: '14px',
        fontWeight: 'normal',
        padding: '20px 4px 4px 4px',
    }),
    edge: style({

    }),
    close: style({
        height: '20px',
        width: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '2px',
        right: '2px',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: colors.textSecondary,
    }),
};