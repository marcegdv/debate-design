import { style, keyframes } from "typestyle";

export type RotateProps = {
    seconds?: number,
    children?: JSX.Element | JSX.Element[];
};

const Rotate = (
    props: {
        seconds?: number,
        children?: JSX.Element | JSX.Element[];
    }
): JSX.Element => {
    return (
        <div className={styles.container(props.seconds)}>
            {props.children}
        </div>
    );
};

export default Rotate;

const rotationAnimation = keyframes({
    from: {
        transform: 'rotate(0deg)',
    },
    to: {
        transform: 'rotate(359deg)',
    }
});

const styles = {
    container: (seconds: number = 0) => {
        return style({
            animationName: rotationAnimation,
            animation: `rotation ${seconds}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
        })
    }
};