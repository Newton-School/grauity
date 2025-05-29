import type { Meta } from '@storybook/react';
import React from 'react';
import Carousel, { CarouselProps } from 'ui/elements/Carousel';

import { getRandomPastelColor } from '../../utils/getRandomPastelColor';

const meta: Meta<CarouselProps> = {
    title: 'Elements/Carousel',
    component: Carousel,
    decorators: [
        (Story: React.FC) => (
            <div style={{ width: '500px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

const Template = (args: CarouselProps) => <Carousel {...args} />;

const DummyItem = () => {
    const { color, borderColor } = getRandomPastelColor();
    return (
        <div
            style={{
                width: '132px',
                height: '132px',
                backgroundColor: color,
                borderRadius: '8px',
                outline: `3px solid ${borderColor}`,
            }}
        />
    );
};

const defaultArgs: CarouselProps = {
    items: Array.from({ length: 10 }).map(() => <DummyItem />),
    title: 'Slide to see',
    fullWidthItems: false,
    scrollAmount: 150,
    hideIconsOnLessItems: true,
    iconPosition: 'right',
    leftIcon: 'chevron-left',
    rightIcon: 'chevron-right',
    iconGap: 12,
    iconButtonVariant: 'secondary',
    iconButtonColor: 'neutral',
    onLeftClick: () => {},
    onRightClick: () => {},
    onScrollEnd: () => {},
    headerGap: 30,
    gap: 20,
    style: {},
    className: '',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

const FullWidthDummyItem = () => {
    const { color, borderColor } = getRandomPastelColor();
    return (
        <div
            style={{
                width: '100%',
                height: '132px',
                backgroundColor: color,
                borderRadius: '8px',
                outline: `3px solid ${borderColor}`,
            }}
        />
    );
};

export const FullWidthCarousel = Template.bind({});

FullWidthCarousel.args = {
    ...defaultArgs,
    items: Array.from({ length: 10 }).map(() => <FullWidthDummyItem />),
    fullWidthItems: true,
};
