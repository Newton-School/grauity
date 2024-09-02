import React from 'react';
import NSAlertBanner, {
    ALERT_BANNER_TYPES_ENUM,
    ALERT_BANNER_VARIANTS_ENUM,
    AlertBannerProps,
} from 'ui/elements/AlertBanner';
import NSTable from 'ui/elements/Table';
import NSTypography from 'ui/elements/Typography';

import TokenBlock from '../../helper-components/TokenBlock';

export default {
    title: 'Elements/NSAlertBanner',
    component: NSAlertBanner,
};

const Template = (args: AlertBannerProps) => (
    <NSTable.Table borderAround={false} borderVertical={false}>
        <NSTable.TableHead highlightHeaders={false}>
            <NSTable.TableRow>
                <NSTable.TableHeadingCell align="left">
                    Type
                </NSTable.TableHeadingCell>
                <NSTable.TableHeadingCell align="left">
                    Variant
                </NSTable.TableHeadingCell>
                <NSTable.TableHeadingCell align="left">
                    NSAlertBanner
                </NSTable.TableHeadingCell>
            </NSTable.TableRow>
        </NSTable.TableHead>
        <NSTable.TableBody>
            {Object.entries(ALERT_BANNER_TYPES_ENUM).map(
                ([, alertBannerType]) => (
                    <>
                        {Object.entries(ALERT_BANNER_VARIANTS_ENUM).map(
                            ([, alertBannerVariant]) => (
                                <NSTable.TableRow>
                                    <NSTable.TableDataCell>
                                        <TokenBlock copy>{alertBannerType}</TokenBlock>
                                    </NSTable.TableDataCell>
                                    <NSTable.TableDataCell>
                                        <TokenBlock copy>
                                            {alertBannerVariant}
                                        </TokenBlock>
                                    </NSTable.TableDataCell>
                                    <NSTable.TableDataCell>
                                        <NSAlertBanner
                                            {...args}
                                            type={alertBannerType}
                                            variant={alertBannerVariant}
                                        />
                                    </NSTable.TableDataCell>
                                </NSTable.TableRow>
                            )
                        )}
                    </>
                )
            )}
        </NSTable.TableBody>
    </NSTable.Table>
);

const defaultArgs: AlertBannerProps = {
    icon: 'bell',
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
        },
        {
            children: 'Button 2',
            variant: 'secondary',
            size: 'small',
        },
        {
            children: 'Disabled Button',
            variant: 'primary',
            size: 'small',
            disabled: true,
        },
    ],
    children: (
        <NSTypography variant="paragraph-semibold-label" color="inherit">
            This is an alert banner with buttons
        </NSTypography>
    ),
};

export const AlertBannerGallery = Template.bind({});

AlertBannerGallery.args = {
    ...defaultArgs,
};
