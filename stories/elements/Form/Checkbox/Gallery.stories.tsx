import React from 'react';
import { ACTION_COLORS } from 'ui/core';
import Checkbox, { CheckboxProps } from 'ui/elements/Form/Checkbox';
import { CheckboxSize } from 'ui/elements/Form/Checkbox/types';
import Table from 'ui/elements/Table';

import TokenBlock from '../../../helper-components/TokenBlock';

export default {
    title: 'Elements/Form/Checkbox/Gallery',
    component: Checkbox,
    tags: ['!autodocs'],
};

const generateCodeString = (args: CheckboxProps) => {
    const {
        name,
        label,
        isRequired,
        size,
        color,
        helpMessage,
        errorMessage,
        isChecked,
        isDisabled,
        isIndeterminate,
    } = args;

    return `<Checkbox
    name="${name}"
    label="${label}"
    isRequired={${isRequired}}
    size="${size}"
    color="${color}"
    helpMessage="${helpMessage}"
    errorMessage="${errorMessage}"
    isChecked={${isChecked}}
    disabled={${isDisabled}}
    isIndeterminate={${isIndeterminate}}
    onChange={() => {}} />`;
};

const defaultArgs: CheckboxProps = {
    name: 'checkbox',
    label: 'Checkbox',
    isRequired: false,
    size: 'medium',
    helpMessage: '',
    errorMessage: '',
    onChange: () => {},
    isChecked: false,
    isDisabled: false,
    isIndeterminate: false,
    className: null,
};

export const Gallery = () => {
    const sizes: Array<CheckboxSize> = [
        'small',
        'medium',
        'large',
    ] as any as Array<CheckboxSize>;

    const colors = Object.values(ACTION_COLORS);

    const [checkedValues, setCheckedValues] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setCheckedValues((prev) =>
            checked
                ? [...prev, value]
                : prev.filter((item) => item !== value),
        );
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
                                <Checkbox
                                    {...defaultArgs}
                                    size={size}
                                    color={color}
                                    value={`radio-button-${sizeIndex}-${colorIndex}`}
                                    isChecked={checkedValues.includes(
                                        `radio-button-${sizeIndex}-${colorIndex}`,
                                    )}
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
