import React from 'react';
import RadioButton, { RadioButtonProps } from 'ui/elements/Form/RadioButton';
import {
    RadioButtonSize,
    RadioButtonState,
} from 'ui/elements/Form/RadioButton/types';
import Table from 'ui/elements/Table';

import TokenBlock from '../../../helper-components/TokenBlock';

export default {
    title: 'Elements/Form/RadioButton/Gallery',
    component: RadioButton,
    tags: ['!autodocs'],
};

const Template = (args: RadioButtonProps) => <RadioButton {...args} />;

const defaultArgs: RadioButtonProps = {
    name: 'radio',
    value: 1,
    label: 'Radio button',
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
    const sizes: Array<RadioButtonSize> = [
        'small',
        'medium',
        'large',
    ] as any as Array<RadioButtonSize>;
    const states: Array<RadioButtonState> = [
        'default',
        'error',
        'success',
    ] as any as Array<RadioButtonState>;

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
                        </Table.TableRow>
                    ))
                )}
            </Table.TableBody>
        </Table.Table>
    );
};
