import React, { forwardRef } from 'react';

import { MultiSelectDropdownProps } from './types';

const MultiSelectDropdown = forwardRef<
    HTMLButtonElement,
    MultiSelectDropdownProps
>(() => <div>MultiSelectDropdown</div>);

export default MultiSelectDropdown;
