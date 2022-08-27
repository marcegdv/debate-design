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
    return (
        <div className={props?.dark ? styles.containerDark : styles.containerLight}>
            {props.children}
        </div>
    );
};

export default FullWidth;