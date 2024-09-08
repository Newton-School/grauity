import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Icon } from 'ui/elements/Icon';

// import DocPageWithPlayground from '../../helper-components/DocPageWithPlayground';
// import exampleSourceCode from './example.source?raw';

export default {
    title: 'Elements/Icon',
    component: Icon,
    argTypes: {
        as: {
            control: {
                disable: true,
            },
        },
        name: {
            control: {
                type: 'select',
            },
        },
    },
    // parameters: {
    //     docs: {
    //         page: () => (
    //             <DocPageWithPlayground exampleSourceCode={exampleSourceCode} />
    //         ),
    //     },
    // },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

const defaultArgs = {
    name: 'sparkle',
    color: 'var(--text-primary)',
    size: '32',
};

export const Default = Template.bind({});
Default.args = {
    ...defaultArgs,
};
Default.parameters = {
    docs: {
        description: {
            story: 'An icon in the default format with color and size.',
        },
    },
};

export const NormalIcon = Template.bind({});
NormalIcon.args = {
    ...defaultArgs,
};
NormalIcon.parameters = {
    docs: {
        description: {
            story: 'An icon in the default format with color and size.',
        },
    },
};

export const DisabledIcon = Template.bind({});
DisabledIcon.args = {
    ...defaultArgs,
    disabled: true,
};
DisabledIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can show if it is in a disabled state.',
        },
    },
};

export const LoadingIcon = Template.bind({});
LoadingIcon.args = {
    ...defaultArgs,
    loading: true,
};
LoadingIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can be used as a simple loader directly.',
        },
    },
};

export const IconsSize = Template.bind({});
IconsSize.args = {
    ...defaultArgs,
    size: '12',
};
IconsSize.parameters = {
    docs: {
        description: {
            story: 'An icon can vary in size.',
        },
    },
};

export const FlippedIcon = Template.bind({});
FlippedIcon.args = {
    ...defaultArgs,
    flipped: 'vertically',
};
FlippedIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can be flipped.',
        },
    },
};

export const RotatedIcon = Template.bind({});
RotatedIcon.args = {
    ...defaultArgs,
    rotated: 'clockwise',
};
RotatedIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can be rotated.',
        },
    },
};

export const BorderIcon = Template.bind({});
BorderIcon.args = {
    ...defaultArgs,
    bordered: true,
};
BorderIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can be formatted to appear bordered.',
        },
    },
};

export const CircularIcon = Template.bind({});
CircularIcon.args = {
    ...defaultArgs,
    circular: true,
};
CircularIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can be formatted to appear circular.',
        },
    },
};

export const InvertedBorderedIcon = Template.bind({});
InvertedBorderedIcon.args = {
    ...defaultArgs,
    bordered: true,
    inverted: true,
};
InvertedBorderedIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can have its colors inverted.',
        },
    },
};

export const InvertedCircularIcon = Template.bind({});
InvertedCircularIcon.args = {
    ...defaultArgs,
    circular: true,
    inverted: true,
};
InvertedCircularIcon.parameters = {
    docs: {
        description: {
            story: 'An icon can have its colors inverted.',
        },
    },
};
