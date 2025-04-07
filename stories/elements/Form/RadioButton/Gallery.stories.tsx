import React from 'react';
import { ACTION_COLORS } from 'ui/core';
import RadioButton, { RadioButtonProps } from 'ui/elements/Form/RadioButton';
import {
    RadioButtonSize,
} from 'ui/elements/Form/RadioButton/types';
import Table from 'ui/elements/Table';

import TokenBlock from '../../../helper-components/TokenBlock';

export default {
    title: 'Elements/Form/RadioButton/Gallery',
    component: RadioButton,
    tags: ['!autodocs'],
};

const generateCodeString = (args: RadioButtonProps) => {
    const {
        name,
        value,
        label,
        isRequired,
        size,
        color,
        helpMessage,
        errorMessage,
        checked,
        isDisabled,
    } = args;

    return `<RadioButton
    name="${name}"
    value={${value}}
    label="${label}"
    isRequired={${isRequired}}
    size="${size}"
    color="${color}"
    helpMessage="${helpMessage}"
    errorMessage="${errorMessage}"
    checked={${checked}}
    disabled={${isDisabled}}
    onChange={() => {}} />`;
};

const Template = (args: RadioButtonProps) => <RadioButton {...args} />;

const defaultArgs: RadioButtonProps = {
    name: 'radio',
    value: 1,
    label: 'Radio button',
    isRequired: false,
    size: 'medium',
    helpMessage: '',
    errorMessage: '',
    onChange: () => {},
    checked: false,
    isDisabled: false,
    className: null,
};

export const Gallery = () => {
    const sizes: Array<RadioButtonSize> = [
        'small',
        'medium',
        'large',
    ] as any as Array<RadioButtonSize>;

    const colors = Object.values(ACTION_COLORS);

    return (
        <Table.Table borderAround={false} borderVertical={false}>
            <Table.TableHead highlightHeaders={false}>
                <Table.TableRow condensed>
                    <Table.TableHeadingCell align="left">
                        Color
                    </Table.TableHeadingCell>
                    <Table.TableHeadingCell align="left">
                        Size
                    </Table.TableHeadingCell>
                    <Table.TableHeadingCell align="left">
                        Element
                    </Table.TableHeadingCell>
                    <Table.TableHeadingCell align="left">
                        Code
                    </Table.TableHeadingCell>
                </Table.TableRow>
            </Table.TableHead>
            <Table.TableBody>
                {colors.map((color) =>
                    sizes.map((size) => (
                        <Table.TableRow condensed>
                            <Table.TableDataCell>
                                <TokenBlock copy>{color}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <TokenBlock copy>{size}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <Template
                                    {...defaultArgs}
                                    size={size}
                                    color={color}
                                />
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <TokenBlock
                                    copy
                                    contentToCopy={generateCodeString({
                                        ...defaultArgs,
                                        size,
                                        color,
                                    })}
                                >
                                    Copy Code
                                </TokenBlock>
                            </Table.TableDataCell>
                        </Table.TableRow>
                    ))
                )}
            </Table.TableBody>
        </Table.Table>
    );
};
