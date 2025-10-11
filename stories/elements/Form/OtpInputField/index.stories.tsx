import React from 'react';
import OtpInputField from 'ui/elements/Form/OtpInputField';
import { OtpInputFieldProps } from 'ui/elements/Form/OtpInputField/types';

export default {
    title: 'Elements/Form/OtpInputField',
    component: OtpInputField,
};

const Template = (args: OtpInputFieldProps) => <OtpInputField {...args} />;

const defaultArgs: OtpInputFieldProps = {
    value: '',
    length: 4,
    onChange: () => {},
    onBlur: () => {},
    style: {},
    name: 'otp',
    isOtpCorrect: false,
    isOtpWrong: false,
    isDisabled: false,
    errorMessage: 'Wrong OTP. Please try again',
    successMessage: 'OTP is correct',
    label: 'Enter OTP',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};
