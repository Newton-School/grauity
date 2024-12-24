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
  leftIcon={null}
  onLeftClick={() => {}}
  onRightClick={() => {}}
  rightIcon={null}
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
    ],
    title: 'Slide to see',
    leftIcon: null,
    rightIcon: null,
    onLeftClick: () => {},
    onRightClick: () => {},
    gap: 12,
    style: {},
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
