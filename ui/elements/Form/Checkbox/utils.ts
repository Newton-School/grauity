import { grauityIconSizeName } from 'ui/core';

import { CheckboxSize } from './types';

export const getIconSize = (size: CheckboxSize): grauityIconSizeName => {
    switch (size) {
        case 'small':
            return '12';
        case 'medium':
            return '16';
        case 'large':
            return '20';
        default:
            return '20';
    }
};
