import { ComponentStory, ComponentMeta } from '@storybook/react';
import Amount, { AmountProps } from './Amount';

export default {
    title: 'Amount',
    component: Amount,
    argTypes: {
        backgroundColor: { control: 'color' },
        amount: { control: 'number' },
        caption: { control: 'text' },
        hideCents: { control: 'boolean' },
        negativeRed: { control: 'boolean' },
        dark: { control: 'boolean' },
    },
} as ComponentMeta<typeof Amount>;

const Template: ComponentStory<typeof Amount> = (args: AmountProps) => <Amount {...args} />;

export const Positive = Template.bind({});
Positive.args = {
    amount: 1234.567,
    caption: 'por mes',
    hideCents: false,
    negativeRed: false,
    dark: false,
};

export const Negative = Template.bind({});
Negative.args = {
    amount: -1234.567,
    caption: 'por mes',
    hideCents: false,
    negativeRed: false,
    dark: false,
};

export const NegativeRed = Template.bind({});
NegativeRed.args = {
    amount: -1234.567,
    caption: 'por mes',
    hideCents: false,
    negativeRed: true,
    dark: false,
};

export const DarkPositive = Template.bind({});
DarkPositive.args = {
    amount: 1234.567,
    caption: 'por mes',
    hideCents: false,
    negativeRed: false,
    dark: true,
};

export const DarkNegative = Template.bind({});
DarkNegative.args = {
    amount: -1234.567,
    caption: 'por mes',
    hideCents: false,
    negativeRed: false,
    dark: true,
};

export const DarkNegativeRed = Template.bind({});
DarkNegativeRed.args = {
    amount: -1234.567,
    caption: 'por mes',
    hideCents: false,
    negativeRed: true,
    dark: true,
};