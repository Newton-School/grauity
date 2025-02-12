import React from 'react';
import { BaseItemOptionProps } from 'ui/elements/DropdownMenu';
import Typography from 'ui/elements/Typography';
import {
    DropdownMenuBaseItemType,
    NSCheckbox,
    NSDropdownMenu,
    NSDropdownTrigger,
    NSFormRow,
    NSLabel,
    NSOtpInput,
    NSRadioButton,
    NSTextArea,
    NSTextField,
} from 'ui/index';

export default {
    title: 'Elements/Form/FormRow',
    component: NSFormRow,
};

const PIZZA_TOPPINGS = [
    { label: 'Pepperoni', value: 'pepperoni' },
    { label: 'Mushroom', value: 'mushroom' },
    { label: 'Onion', value: 'onion' },
];

const ACCOUNT_TYPES = [
    { label: 'Personal', value: 'personal' },
    { label: 'Business', value: 'business' },
    { label: 'Enterprise', value: 'enterprise' },
];

const PROFESSIONS = [
    { label: 'Doctor', value: 'doctor' },
    { label: 'Engineer', value: 'engineer' },
    { label: 'Teacher', value: 'teacher' },
    { label: 'Lawyer', value: 'lawyer' },
    { label: 'Artist', value: 'artist' },
    { label: 'Farmer', value: 'farmer' },
];

const HOBBIES = [
    { label: 'Reading', value: 'reading' },
    { label: 'Writing', value: 'writing' },
    { label: 'Coding', value: 'coding' },
    { label: 'Singing', value: 'singing' },
    { label: 'Dancing', value: 'dancing' },
];

const Template = () => {
    const [formData, setFormData] = React.useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        phone: '',
        email: '',
        description: '',
        account_type: '',
        otp: '',
        pizza_toppings: [],
        profession: '',
        hobbies: [],
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
    ) => {
        const field = event.target.name as string;
        let value;
        if (field === 'pizza_toppings') {
            if (event.target.checked) {
                value = [...formData[field], event.target.value];
            } else {
                value = formData[field].filter(
                    (item: string) => item !== event.target.value
                );
            }
        } else {
            value = event.target.value;
        }
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const isMobileView = window.innerWidth < 600;

    return (
        <div style={{ display: 'flex', gap: '12px' }}>
            <div
                style={{
                    maxWidth: '800px',
                    gap: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* First Name, Middle Name and Last Name */}
                <NSFormRow column={isMobileView}>
                    <NSTextField
                        name="first_name"
                        label="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        isRequired
                        placeholder="Enter your first name"
                    />
                    <NSTextField
                        name="middle_name"
                        label="Middle Name"
                        value={formData.middle_name}
                        onChange={handleChange}
                        placeholder="Enter your middle name"
                    />
                    <NSTextField
                        name="last_name"
                        label="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                        isRequired
                        placeholder="Enter your last name"
                    />
                </NSFormRow>

                {/* Email and Phone row */}
                <NSFormRow widths="1fr 2fr" column={isMobileView}>
                    <NSTextField
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        isRequired
                        adornments={{
                            end: '@gmail.com',
                        }}
                        placeholder="Enter your email"
                    />
                    <NSTextField
                        name="phone"
                        label="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isRequired
                        adornments={{
                            start: '+91',
                        }}
                        placeholder="Enter your phone"
                    />
                </NSFormRow>

                {/* Email and Phone row */}
                <NSFormRow widths="2fr 1fr" column={isMobileView}>
                    <NSTextField
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        isRequired
                        adornments={{
                            end: '@gmail.com',
                        }}
                        placeholder="Enter your email"
                    />
                    <NSTextField
                        name="phone"
                        label="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isRequired
                        adornments={{
                            start: '+91',
                        }}
                        placeholder="Enter your phone"
                    />
                </NSFormRow>

                {/* Description row */}
                <NSFormRow column={isMobileView}>
                    <NSTextArea
                        name="description"
                        label="Description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description..."
                        rows={4}
                    />
                </NSFormRow>

                <NSFormRow column={isMobileView}>
                    <NSOtpInput
                        length={4}
                        name="otp"
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        label="Enter OTP"
                        isOtpCorrect={false}
                        isOtpWrong={false}
                        isDisabled={false}
                        errorMessage="Wrong otp. Please try again"
                        successMessage="Correct Otp"
                    />
                </NSFormRow>

                {/* Radio buttons row */}
                <NSFormRow column>
                    <NSLabel name="account_type">Account Type</NSLabel>
                    {ACCOUNT_TYPES.map((accountType) => (
                        <NSRadioButton
                            name="account_type"
                            value={accountType.value}
                            label={accountType.label}
                            checked={
                                formData.account_type === accountType.value
                            }
                            onChange={handleChange}
                        />
                    ))}
                </NSFormRow>

                {/* Pizza toppings row, use nscheckbox */}
                <NSFormRow column>
                    <NSLabel name="pizza_toppings">Pizza Toppings</NSLabel>
                    <NSCheckbox
                        name="pizza_toppings"
                        label="Select All"
                        isChecked={
                            formData.pizza_toppings.length ===
                            PIZZA_TOPPINGS.length
                        }
                        isIndeterminate={
                            formData.pizza_toppings.length > 0 &&
                            formData.pizza_toppings.length <
                                PIZZA_TOPPINGS.length
                        }
                        onChange={(e) => {
                            if (e.target.checked) {
                                setFormData({
                                    ...formData,
                                    pizza_toppings: PIZZA_TOPPINGS.map(
                                        (topping) => topping.value
                                    ),
                                });
                            } else {
                                setFormData({
                                    ...formData,
                                    pizza_toppings: [],
                                });
                            }
                        }}
                        value="__all__"
                    />
                    <NSFormRow>
                        {PIZZA_TOPPINGS.map((pizzaTopping) => (
                            <NSCheckbox
                                name="pizza_toppings"
                                label={pizzaTopping.label}
                                isChecked={formData.pizza_toppings.includes(
                                    pizzaTopping.value
                                )}
                                onChange={handleChange}
                                value={pizzaTopping.value}
                            />
                        ))}
                    </NSFormRow>
                </NSFormRow>

                {/* Dropdown Menu */}
                <NSFormRow widths="2fr 3fr">
                    <NSDropdownMenu
                        trigger={
                            <NSDropdownTrigger>
                                {formData.profession || 'Select Profession'}
                            </NSDropdownTrigger>
                        }
                        items={PROFESSIONS.map((profession) => {
                            return {
                                ...profession,
                                type: DropdownMenuBaseItemType.OPTION,
                            };
                        })}
                        selectedValues={[formData.profession]}
                        onApply={(selectedValue: BaseItemOptionProps) =>
                            setFormData({
                                ...formData,
                                profession: selectedValue.value as string,
                            })
                        }
                    />
                    <NSDropdownMenu
                        multiple
                        trigger={
                            <NSDropdownTrigger>
                                Select Hobbies
                            </NSDropdownTrigger>
                        }
                        items={HOBBIES.map((hobby) => {
                            return {
                                ...hobby,
                                type: DropdownMenuBaseItemType.OPTION,
                            };
                        })}
                        selectedValues={formData.hobbies}
                        onApply={(selectedValues: BaseItemOptionProps[]) =>
                            setFormData({
                                ...formData,
                                hobbies: selectedValues.map(
                                    (value) => value.value as string
                                ),
                            })
                        }
                        showActionButtons
                    />
                </NSFormRow>
            </div>
            <div
                style={{
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            >
                <Typography>Form State:</Typography>
                <Typography>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </Typography>
            </div>
        </div>
    );
};

export const ExampleForm = Template.bind({});
