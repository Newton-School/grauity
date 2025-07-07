import React, { forwardRef } from 'react';

import { StyledPlaceholder } from './Placeholder.styles';
import { PlaceholderProps } from './types';

const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
    (props, ref) => {
        const {
            width = '100%',
            height = '100%',
            border = 'none',
            borderRadius = '0px',
            margin = '0px',
            backgroundColor = 'var(--bg-tertiary, #EDEFF3)',
            className = '',
        } = props;

        return (
            <StyledPlaceholder
                ref={ref}
                data-testid="data-testid-placeholder"
                className={className}
                $width={width}
                $height={height}
                $border={border}
                $borderRadius={borderRadius}
                $margin={margin}
                $backgroundColor={backgroundColor}
            />
        );
    }
);

export default Placeholder;
