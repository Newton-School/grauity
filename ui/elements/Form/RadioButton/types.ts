import React from 'react';

import { StyledInputProps } from '../../../../common/types';

export type RadioButtonSize = 'small' | 'medium' | 'large';
export type RadioButtonState = 'default' | 'error' | 'success';

export interface RadioButtonProps {
    name: string;
    value: string | number;
    label?: string;
    isRequired?: boolean;
    size?: RadioButtonSize;
    state?: RadioButtonState;
    helpMessage?: string;
    errorMessage?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    disabled?: boolean;
}

export interface StyledRadioButtonInputProps extends StyledInputProps {
    $size?: RadioButtonSize;
    $state?: RadioButtonState;
}
