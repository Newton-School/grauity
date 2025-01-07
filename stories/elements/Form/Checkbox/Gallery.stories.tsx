import React from 'react';
import Checkbox, { CheckboxProps } from 'ui/elements/Form/Checkbox';
import { CheckboxSize, CheckboxState } from 'ui/elements/Form/Checkbox/types';
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
        value,
        label,
        isRequired,
        size,
        state,
        helpMessage,
        errorMessage,
        checked,
        disabled,
    } = args;

    return `<Checkbox
    name="${name}"
    value={${value}}
    label="${label}"
    isRequired={${isRequired}}
    size="${size}"
    state="${state}"
    helpMessage="${helpMessage}"
    errorMessage="${errorMessage}"
    checked={${checked}}
    disabled={${disabled}}
    onChange={() => {}} />`;
};

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

const defaultArgs: CheckboxProps = {
    name: 'checkbox',
    value: 1,
    label: 'Checkbox',
    isRequired: false,
    size: 'medium',
    state: 'default',
    helpMessage: '',
    errorMessage: '',
    onChange: () => {},
    checked: false,
    disabled: false,
};

export const Gallery = () => {
    const sizes: Array<CheckboxSize> = [
        'small',
        'medium',
        'large',
    ] as any as Array<CheckboxSize>;
    const states: Array<CheckboxState> = [
        'default',
        'error',
        'success',
    ] as any as Array<CheckboxState>;

    return (
        <Table.Table borderAround={false} borderVertical={false}>
            <Table.TableHead highlightHeaders={false}>
                <Table.TableRow condensed>
                    <Table.TableHeadingCell align="left">
                        Size
                    </Table.TableHeadingCell>
                    <Table.TableHeadingCell align="left">
                        State
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
                {sizes.map((size) =>
                    states.map((state) => (
                        <Table.TableRow condensed>
                            <Table.TableDataCell>
                                <TokenBlock copy>{size}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <TokenBlock copy>{state}</TokenBlock>
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <Template
                                    {...defaultArgs}
                                    size={size}
                                    state={state}
                                />
                            </Table.TableDataCell>
                            <Table.TableDataCell>
                                <TokenBlock
                                    copy
                                    contentToCopy={generateCodeString({
                                        ...defaultArgs,
                                        size,
                                        state,
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
