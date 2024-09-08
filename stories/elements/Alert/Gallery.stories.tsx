import React from 'react';
import Alert, {
    ALERT_TYPES_ENUM,
    ALERT_VARIANTS_ENUM,
    AlertProps,
} from 'ui/elements/Alert';
import Table from 'ui/elements/Table';
import Typography from 'ui/elements/Typography';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/Alert',
    component: Alert,
    tags: ['!autodocs'],
    argTypes: {
        title: {
            options: [
                'Simple example using Typography',
                'Simple example with text only',
            ],
            mapping: {
                'Simple example using Typography': (
                    <Typography
                        variant="paragraph-semibold-label"
                        color="inherit"
                    >
                        An Alert using Typography
                    </Typography>
                ),
                'Simple example with text only':
                    'An Alert Banner using simple text',
            },
        },
        actionButtons: {
            options: ['With action buttons', 'Without action buttons'],
            mapping: {
                'With action buttons': [
                    {
                        children: 'Button',
                        variant: 'secondary',
                        size: 'small',
                    },
                    {
                        children: 'Button',
                        variant: 'tertiary',
                        size: 'small',
                    },
                ],
                'Without action buttons': null,
            },
        },
    },
};

const Template = (args: AlertProps) => (
    <Table.Table borderAround={false} borderVertical={false}>
        <Table.TableHead highlightHeaders={false}>
            <Table.TableRow>
                <Table.TableHeadingCell align="left">
                    Type
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Variant
                </Table.TableHeadingCell>
                <Table.TableHeadingCell align="left">
                    Alert
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {Object.entries(ALERT_TYPES_ENUM).map(([, alertBannerType]) => (
                <>
                    {Object.entries(ALERT_VARIANTS_ENUM).map(
                        ([, alertBannerVariant]) => (
                            <Table.TableRow>
                                <Table.TableDataCell>
                                    <TokenBlock copy>
                                        {alertBannerType}
                                    </TokenBlock>
                                </Table.TableDataCell>
                                <Table.TableDataCell>
                                    <TokenBlock copy>
                                        {alertBannerVariant}
                                    </TokenBlock>
                                </Table.TableDataCell>
                                <Table.TableDataCell>
                                    <Alert
                                        {...args}
                                        type={alertBannerType}
                                        variant={alertBannerVariant}
                                    />
                                </Table.TableDataCell>
                            </Table.TableRow>
                        )
                    )}
                </>
            ))}
        </Table.TableBody>
    </Table.Table>
);

export const Gallery = Template.bind({});

Gallery.args = {
    icon: 'auto',
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    onClose: null,
    showCloseButton: true,
    actionButtons: [
        {
            children: 'Button',
            variant: 'secondary',
            size: 'small',
        },
        {
            children: 'Button',
            variant: 'tertiary',
            size: 'small',
        },
    ],
    inlineButtons: false,
    title: (
        <Typography variant="paragraph-semibold-label" color="inherit">
            This is an alert banner with buttons
        </Typography>
    ),
    description:
        'We all step into this design world full of passion and enthusiasm.But over time, something changes without us even noticing.',
};
