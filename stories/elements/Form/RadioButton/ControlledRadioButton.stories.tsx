import React, { useState } from 'react';
import RadioButton from 'ui/elements/Form/RadioButton';
import { NSButton, NSTable } from 'ui/index';

export default {
    title: 'Elements/Form/RadioButton',
    component: RadioButton,
};

export const ControlledRadioButton = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(parseInt(event.target.value, 10));
    };

    return (
        <NSTable.Table>
            <NSTable.TableHead>
                <NSTable.TableHeadingCell colSpan={2} align="left">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '8px',
                        }}
                    >
                        What would you like to eat?
                        <NSButton
                            variant="secondary"
                            color="neutral"
                            size="small"
                            icon="close-circle"
                            onClick={() => setSelectedValue(null)}
                        >
                            Clear
                        </NSButton>
                    </div>
                </NSTable.TableHeadingCell>
            </NSTable.TableHead>
            <NSTable.TableBody>
                <NSTable.TableRow>
                    <NSTable.TableDataCell>
                        <RadioButton
                            name="radio-1"
                            value={1}
                            label="🍕 Pizza"
                            checked={selectedValue === 1}
                            onChange={handleChange}
                        />
                        <RadioButton
                            name="radio-1"
                            value={2}
                            label="🍔 Burger"
                            checked={selectedValue === 2}
                            onChange={handleChange}
                        />
                        <RadioButton
                            name="radio-1"
                            value={3}
                            label="🍟 Fries"
                            checked={selectedValue === 3}
                            onChange={handleChange}
                        />
                    </NSTable.TableDataCell>
                    <NSTable.TableDataCell>
                        <RadioButton
                            name="radio-2"
                            value={1}
                            label="🍕 Pizza"
                            checked={selectedValue === 1}
                            onChange={handleChange}
                        />
                        <RadioButton
                            name="radio-2"
                            value={2}
                            label="🍔 Burger"
                            checked={selectedValue === 2}
                            onChange={handleChange}
                        />
                        <RadioButton
                            name="radio-2"
                            value={3}
                            label="🍟 Fries"
                            checked={selectedValue === 3}
                            onChange={handleChange}
                        />
                    </NSTable.TableDataCell>
                </NSTable.TableRow>
            </NSTable.TableBody>
        </NSTable.Table>
    );
};
