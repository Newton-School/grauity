import React from 'react';
import Carousel, { CarouselProps } from 'ui/elements/Carousel';
import Placeholder from 'ui/elements/Placeholder';

export default {
    title: 'Elements/Carousel',
    component: Carousel,
    decorators: [
        (Story: React.FC) => (
            <div style={{ width: '500px' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        docs: {
            source: {
                code: `
<Carousel
  fullWidthItems={false}
  hideIconsOnLessItems
  gap={12}
  iconGap={12}
  iconPosition="right"
  items={[]}
  leftIcon="chevron-left"
  onLeftClick={() => {}}
  onRightClick={() => {}}
  onScrollEnd={() => {}}
  rightIcon="chevron-right"
  scrollAmount={100}
  style={{}}
  title="Slide to see"
/>`,
            },
        },
    },
};

const Template = (args: CarouselProps) => <Carousel {...args} />;

const DummyItem = () => (
    <div style={{ width: '88px', height: '88px' }}>
        <Placeholder />
    </div>
);

const defaultArgs: CarouselProps = {
    items: Array.from({ length: 10 }).map(() => <DummyItem />),
    title: 'Slide to see',
    fullWidthItems: false,
    scrollAmount: 100,
    hideIconsOnLessItems: true,
    iconPosition: 'right',
    leftIcon: 'chevron-left',
    rightIcon: 'chevron-right',
    iconGap: 12,
    onLeftClick: () => {},
    onRightClick: () => {},
    onScrollEnd: () => {},
    gap: 12,
    style: {},
    className: '',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

const FullWidthDummyItem = () => (
    <div style={{ width: '100%', height: '88px' }}>
        <Placeholder />
    </div>
);

export const FullWidthCarousel = Template.bind({});

FullWidthCarousel.args = {
    ...defaultArgs,
    items: Array.from({ length: 10 }).map(() => <FullWidthDummyItem />),
    fullWidthItems: true,
};
