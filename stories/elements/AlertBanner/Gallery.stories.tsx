import React from 'react';
import AlertBanner, {
    ALERT_BANNER_TYPES_ENUM,
    ALERT_BANNER_VARIANTS_ENUM,
    AlertBannerProps,
} from 'ui/elements/AlertBanner';
import Table from 'ui/elements/Table';
import Typography from 'ui/elements/Typography';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/AlertBanner',
    component: AlertBanner,
    tags: ['!autodocs'],
    argTypes: {
        children: {
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
                        An Alert Banner using Typography
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
                        variant: 'tertiary',
                        size: 'small',
                    },
                    {
                        children: 'Button',
                        variant: 'secondary',
                        size: 'small',
                    },
                ],
                'Without action buttons': null,
            },
        },
    },
};

const Template = (args: AlertBannerProps) => (
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
                    AlertBanner
                </Table.TableHeadingCell>
            </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
            {Object.entries(ALERT_BANNER_TYPES_ENUM).map(
                ([, alertBannerType]) => (
                    <>
                        {Object.entries(ALERT_BANNER_VARIANTS_ENUM).map(
                            ([, alertBannerVariant]) => (
                                <Table.TableRow>
                                    <Table.TableDataCell>
                                        <TokenBlock copy>{alertBannerType}</TokenBlock>
                                    </Table.TableDataCell>
                                    <Table.TableDataCell>
                                        <TokenBlock copy>
                                            {alertBannerVariant}
                                        </TokenBlock>
                                    </Table.TableDataCell>
                                    <Table.TableDataCell>
                                        <AlertBanner
                                            {...args}
                                            type={alertBannerType}
                                            variant={alertBannerVariant}
                                        />
                                    </Table.TableDataCell>
                                </Table.TableRow>
                            )
                        )}
                    </>
                )
            )}
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
    justifyContent: 'space-between',
    onClose: null,
    showCloseButton: true,
    actionButtons: [
        {
            children: 'Button',
            variant: 'tertiary',
            size: 'small',
        },
        {
            children: 'Button',
            variant: 'secondary',
            size: 'small',
        },
    ],
    children: (
        <Typography variant="paragraph-semibold-label" color="inherit">
            This is an alert banner with buttons
        </Typography>
    ),

};
