import React from 'react';

import { StyledFormRow } from './index.styles';
import { FormRowProps } from './types';

/**
 * FormRow component is used to render an inline form row. It takes children and widths (treat as `grid-template-columns`) as props.
 * @param props 
 * @returns 
 */
const FormRow = (props: FormRowProps) => {
    const { children, widths = 'equal', column = false, width = '100%' } = props;

    const childrenCount = React.Children.count(children);
    const gridTemplateColumns =
        (!widths || widths === 'equal')
            ? Array.from({ length: childrenCount })
                .map(() => '1fr')
                .join(' ')
            : widths;

    return (
        <StyledFormRow $gridTemplateColumns={gridTemplateColumns} $column={column} $width={width}>
            {children}
        </StyledFormRow>
    );
};

export default FormRow;
