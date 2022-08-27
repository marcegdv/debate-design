import styles from './FullWidth.styles';

export type FullWidthProps = {
    dark?: boolean,
    children?: JSX.Element | JSX.Element[];
};

const FullWidth = (
    props: {
        dark?: boolean,
        children?: JSX.Element | JSX.Element[];
    }
): JSX.Element => {
    const darkLight: string = props?.dark ? styles.containerDark : styles.containerLight;
    return (
        <div className={styles.defaults + ' ' + darkLight}>
            {props.children}
        </div>
    );
};

export default FullWidth;