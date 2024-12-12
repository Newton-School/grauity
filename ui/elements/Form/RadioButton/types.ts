import React from 'react';

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
