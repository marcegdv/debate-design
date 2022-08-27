import { style } from 'typestyle';

const styles = {
    container: style({
        gap: '16px',
        $nest: {
            '@media screen and (max-width: 767px)': {
                display: 'flex',
                flexDirection: 'column',
            },
            '@media screen and (min-width: 768px)': {
                display: 'flex',
                flexDirection: 'row-reverse',
            },
        },
    }),
    primaryContainer: style({
        $nest: {
            '@media screen and (max-width: 767px)': {
                width: '100%',
            },
            '@media screen and (min-width: 768px)': {
                width: 'fit-content',
            },
        },
    }),
    secondaryContainer: style({
        $nest: {
            '@media screen and (max-width: 767px)': {
                width: '100%',
            },
            '@media screen and (min-width: 768px)': {
                width: 'fit-content',
            },
        },
    }),
};

export default styles;