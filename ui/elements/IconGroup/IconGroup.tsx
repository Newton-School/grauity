import * as React from 'react';
import classnames from 'classnames';
import { StyledIconGroup } from './IconGroup.styles';
import { IconGroupProps } from './types';
import Icon from '../Icon/Icon';

/**
 * IconGroup is a component that groups multiple Icon components together.
 */
const IconGroup: React.FC<IconGroupProps> = ({
    icons,
    children,
    className,
    size,
    color = 'grey',
    horizontal = true,
    spacing = '8px',
    ...props
}) => {
    const classes = classnames('grauity-icon-group', className);

    // Render icons passed as array or children
    const renderIcons = () => {
        if (icons && icons.length > 0) {
            return icons.map((iconProps: IconGroupProps['icons'][0], index: number) => {
                const { key, ...restProps } = iconProps as any;
                return (
                    <Icon
                        key={key || index}
                        {...restProps}
                        size={iconProps.size || size}
                        color={iconProps.color || color}
                    />
                );
            });
        }
        return children;
    };

    return (
        <StyledIconGroup
            className={classes}
            horizontal={horizontal}
            spacing={spacing}
            {...props}
            data-testid="testid-icon-group"
        >
            {renderIcons()}
        </StyledIconGroup>
    );
};

export default IconGroup;
