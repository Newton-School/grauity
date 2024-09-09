import { StoryFn } from '@storybook/react';
import React, { ReactNode } from 'react';
import AlertBanner, {
    ALERT_BANNER_TYPES_ENUM,
    ALERT_BANNER_VARIANTS_ENUM,
    AlertBannerProps,
} from 'ui/elements/AlertBanner';
import Table from 'ui/elements/Table';
import Typography from 'ui/elements/Typography';

import TokenBlock from '../../helper-components/TokenBlock';

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

interface TableDecoratorProps {
    children: ReactNode;
    alertBannerProps: AlertBannerProps;
}

const TableDecorator: React.FC<TableDecoratorProps> = ({
    children,
    alertBannerProps,
}) => (
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
                                <Table.TableRow
                                    key={`${alertBannerType}-${alertBannerVariant}`}
                                >
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
                                        <AlertBanner
                                            {...alertBannerProps}
                                            type={alertBannerType}
                                            variant={alertBannerVariant}
                                        >
                                            {children}
                                        </AlertBanner>
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
                        {TEXT}
                    </Typography>
                ),
                'Simple example with text only': TEXT,
            },
        },
        actionButtons: {
            options: ['With action buttons', 'Without action buttons'],
            mapping: {
                'With action buttons': [
                    {
                        children: 'Button 1',
                        variant: 'tertiary',
                        size: 'small',
                        onClick: () => {
                            alert('Button 1 clicked');
                        },
                    },
                    {
                        children: 'Button 2',
                        variant: 'secondary',
                        size: 'small',
                        onClick: () => {
                            alert('Button 2 clicked');
                        },
                    },
                ],
                'Without action buttons': null,
            },
        },
    },
    decorators: [
        (Story: StoryFn, context: any) => (
            <TableDecorator alertBannerProps={context.args}>
                {context.args.children}
            </TableDecorator>
        ),
    ],
};

const Template = (args: AlertBannerProps) => <AlertBanner {...args} />;

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
            children: 'Button 1',
            variant: 'tertiary',
            size: 'small',
            onClick: () => {
                alert('Button 1 clicked');
            },
        },
        {
            children: 'Button 2',
            variant: 'secondary',
            size: 'small',
            onClick: () => {
                alert('Button 2 clicked');
            },
        },
    ],
    children: (
        <Typography variant="paragraph-semibold-label" color="inherit">
            {TEXT}
        </Typography>
    ),
};
