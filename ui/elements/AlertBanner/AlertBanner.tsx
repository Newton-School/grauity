import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle } from 'react';

import { Icon } from '../Icon';
import {
    StyledAlertBannerButtonGroup,
    StyledAlertBannerContainer,
    StyledAlertBannerContent,
} from './AlertBanner.styles';
import {
    ALERT_BANNER_TYPES,
    ALERT_BANNER_TYPES_ENUM,
    ALERT_BANNER_VARIANTS,
    ALERT_BANNER_VARIANTS_ENUM,
} from './constants';
import { AlertBannerProps } from './types';
import { getAlertBannerColors, getAlertIconName } from './utils';

const AlertBanner = forwardRef<HTMLDivElement, AlertBannerProps>(
    (
        {
            type,
            variant,
            icon,
            top,
            bottom,
            left,
            right,
            position,
            children,
            justifyContent,
        },
        ref
    ) => {
        const bannerRef = React.useRef<HTMLDivElement>(null);

        useImperativeHandle(ref, () => bannerRef.current);

        const iconName = getAlertIconName(icon, variant);
        const { iconColor, textColor, backgroundColor, borderColor } =
            getAlertBannerColors(variant, type);

        return (
            <StyledAlertBannerContainer
                type={type}
                variant={variant}
                top={top}
                bottom={bottom}
                left={left}
                right={right}
                position={position}
                ref={bannerRef}
                iconColor={iconColor}
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
            >
                {iconName && <Icon name={iconName} color="inherit" />}

                <StyledAlertBannerContent
                    color={textColor}
                    justifyContent={justifyContent}
                >
                    {children}
                </StyledAlertBannerContent>
            </StyledAlertBannerContainer>
        );
    }
) as React.ForwardRefExoticComponent<
    AlertBannerProps & React.RefAttributes<HTMLDivElement>
> & {
    ButtonGroup: typeof StyledAlertBannerButtonGroup;
};

AlertBanner.defaultProps = {
    type: ALERT_BANNER_TYPES_ENUM.DEFAULT,
    variant: ALERT_BANNER_VARIANTS_ENUM.PRIMARY,
    icon: null,
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    children: null,
    justifyContent: 'center',
};

AlertBanner.propTypes = {
    type: PropTypes.oneOf(ALERT_BANNER_TYPES),
    variant: PropTypes.oneOf(ALERT_BANNER_VARIANTS),
    icon: PropTypes.any,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    position: PropTypes.string,
    children: PropTypes.node.isRequired,
    justifyContent: PropTypes.string,
};

AlertBanner.ButtonGroup = StyledAlertBannerButtonGroup;

export default AlertBanner;
