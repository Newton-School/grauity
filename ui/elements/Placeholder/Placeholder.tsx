import React, { forwardRef } from 'react';

import { StyledPlaceholder } from './Placeholder.styles';
import { PlaceholderProps } from './types';

const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
    (props, ref) => {
        const {
            width = '100%',
            height = '100%',
            borderRadius = '0px',
            margin = '0px',
            backgroundColor = 'var(--bg-tertiary, #EDEFF3)',
        } = props;

        return (
            <StyledPlaceholder
                ref={ref}
                $width={width}
                $height={height}
                $borderRadius={borderRadius}
                $margin={margin}
                $backgroundColor={backgroundColor}
            />
        );
    }
);

export default Placeholder;
