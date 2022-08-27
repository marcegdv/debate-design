import styles from './Card.styles';

export type CardProps = {
    title: string,
    dark?: boolean,
    children?: JSX.Element | JSX.Element[],
};

const Card = (
    props: {
        title: string,
        dark?: boolean,
        children?: JSX.Element | JSX.Element[],
    }
): JSX.Element => {
    return (
        <div className={props.dark ? styles.containerDark : styles.containerLight}>
            <div className={props.dark ? styles.titleDark : styles.titleLight}>
                {props.title}
            </div>
            <div className={props.dark ? styles.bodyDark : styles.bodyLight}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;