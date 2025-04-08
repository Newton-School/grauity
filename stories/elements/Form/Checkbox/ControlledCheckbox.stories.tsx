import React, { useState } from 'react';
import Checkbox from 'ui/elements/Form/Checkbox';
import { NSButton, NSTable } from 'ui/index';

export default {
    title: 'Elements/Form/Checkbox',
    component: Checkbox,
    tags: ['!autodocs'], 
};

export const ControlledCheckbox = () => {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        const newSelectedValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];

        setSelectedValues(newSelectedValues);
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
                            onClick={() => setSelectedValues([])}
                        >
                            Clear
                        </NSButton>
                    </div>
                </NSTable.TableHeadingCell>
            </NSTable.TableHead>
            <NSTable.TableBody>
                <NSTable.TableRow>
                    <NSTable.TableDataCell>
                        <Checkbox
                            name="radio-1"
                            value={1}
                            label="🍕 Pizza"
                            isChecked={selectedValues.includes(1)}
                            onChange={handleChange}
                        />
                        <Checkbox
                            name="radio-1"
                            value={2}
                            label="🍔 Burger"
                            isChecked={selectedValues.includes(2)}
                            onChange={handleChange}
                        />
                        <Checkbox
                            name="radio-1"
                            value={3}
                            label="🍟 Fries"
                            isChecked={selectedValues.includes(3)}
                            onChange={handleChange}
                        />
                    </NSTable.TableDataCell>
                    <NSTable.TableDataCell>
                        <Checkbox
                            name="radio-2"
                            value={1}
                            label="🍕 Pizza"
                            isChecked={selectedValues.includes(1)}
                            onChange={handleChange}
                        />
                        <Checkbox
                            name="radio-2"
                            value={2}
                            label="🍔 Burger"
                            isChecked={selectedValues.includes(2)}
                            onChange={handleChange}
                        />
                        <Checkbox
                            name="radio-2"
                            value={3}
                            label="🍟 Fries"
                            isChecked={selectedValues.includes(3)}
                            onChange={handleChange}
                        />
                    </NSTable.TableDataCell>
                </NSTable.TableRow>
            </NSTable.TableBody>
        </NSTable.Table>
    );
};
