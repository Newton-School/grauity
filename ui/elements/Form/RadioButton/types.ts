import React from 'react';

import { StyledInputProps } from '../../../../common/types';

export type RadioButtonSize = 'small' | 'medium' | 'large';
export type RadioButtonState = 'default' | 'error' | 'success';

export interface RadioButtonProps {
    name: string;
    label?: string;
    value?: string | number;
    isRequired?: boolean;
    validationMessage?: string;
    helpMessage?: string;
    errorMessage?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    size?: RadioButtonSize;
    state?: RadioButtonState;
}

export interface StyledRadioButtonInputProps extends StyledInputProps {
    $size?: RadioButtonSize;
    $state?: RadioButtonState;
}
