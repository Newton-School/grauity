import PropTypes from 'prop-types';
import React from 'react';

import { Icon } from '../Icon';
import {
    StyledAlertBannerContainer,
    StyledAlertBannerText,
} from './AlertBanner.styles';
import {
    ALERT_BANNER_TYPES,
    ALERT_BANNER_TYPES_ENUM,
    ALERT_BANNER_VARIANTS,
    ALERT_BANNER_VARIANTS_ENUM,
} from './constants';
import { AlertBannerProps } from './types';
import { getAlertIconName } from './utils';

const AlertBanner = ({
    type,
    variant,
    icon,
    top,
    bottom,
    left,
    right,
    position,
    children,
    alertRef,
}: AlertBannerProps) => {
    const iconName = getAlertIconName(icon, variant);

    return (
        <StyledAlertBannerContainer
            type={type}
            variant={variant}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            position={position}
            ref={alertRef}
        >
            {iconName && <Icon name={iconName} color="inherit" />}

            <StyledAlertBannerText>{children}</StyledAlertBannerText>
        </StyledAlertBannerContainer>
    );
};

export default AlertBanner;

AlertBanner.defaultProps = {
    type: ALERT_BANNER_TYPES_ENUM.DEFAULT,
    variant: ALERT_BANNER_VARIANTS_ENUM.PRIMARY,
    icon: null,
    top: null,
    bottom: null,
    left: null,
    right: null,
    position: 'static',
    alertRef: null,
};

AlertBanner.propTypes = {
    type: PropTypes.oneOf(ALERT_BANNER_TYPES),
    variant: PropTypes.oneOf(ALERT_BANNER_VARIANTS),
    icon: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    position: PropTypes.string,
    children: PropTypes.node.isRequired,
    alertRef: PropTypes.object,
};
