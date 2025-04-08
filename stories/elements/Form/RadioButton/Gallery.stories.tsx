import React from 'react';
import { ACTION_COLORS } from 'ui/core';
import RadioButton, { RadioButtonProps } from 'ui/elements/Form/RadioButton';
import { RadioButtonSize } from 'ui/elements/Form/RadioButton/types';
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

    const [checkedValue, setCheckedValue] = React.useState<string>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedValue(event.target.value);
    };

    return (
        <Table.Table borderAround={false} borderVertical={false}>
            <Table.TableHead highlightHeaders={false}>
                <Table.TableRow condensed>
                    <Table.TableHeadingCell align="left">
                        Size
                    </Table.TableHeadingCell>
                    <Table.TableHeadingCell align="left">
                        Color
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
                {sizes.map((size, sizeIndex) =>
                    colors.map((color, colorIndex) => (
                        <Table.TableRow condensed>
                            <Table.TableDataCell>
                                <TokenBlock copy>{size}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <TokenBlock copy>{color}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <RadioButton
                                    {...defaultArgs}
                                    size={size}
                                    color={color}
                                    value={`radio-button-${sizeIndex}-${colorIndex}`}
                                    checked={checkedValue === `radio-button-${sizeIndex}-${colorIndex}`}
                                    onChange={handleChange}
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
