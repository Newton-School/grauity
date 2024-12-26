import React from 'react';
import { Corousel, CorouselProps } from 'ui/elements/Corousel';

export default {
    title: 'Elements/Corousel',
    component: Corousel,
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
<Corousel
  gap={12}
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

const Template = (args: CorouselProps) => <Corousel {...args} />;

const defaultArgs: CorouselProps = {
    items: [
        <div>Item 1</div>,
        <div>Item 2</div>,
        <div>Item 3</div>,
        <div>Item 4</div>,
        <div>Item 5</div>,
        <div>Item 6</div>,
        <div>Item 7</div>,
        <div>Item 8</div>,
        <div>Item 9</div>,
        <div>Item 10</div>,
        <div>Item 11</div>,
        <div>Item 12</div>,
    ],
    title: 'Slide to see',
    leftIcon: 'chevron-left',
    rightIcon: 'chevron-right',
    scrollAmount: 100,
    onLeftClick: () => {},
    onRightClick: () => {},
    onScrollEnd: () => {},
    gap: 12,
    style: {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
