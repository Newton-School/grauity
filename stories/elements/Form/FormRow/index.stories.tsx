import React from 'react';
import { NSFormRow, NSLabel, NSRadioButton, NSTextArea, NSTextField } from 'ui/index';

export default {
    title: 'Elements/Form/FormRow',
    component: NSFormRow,
};

const Template = () => {
    const [formData, setFormData] = React.useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        phone: '',
        email: '',
        description: '',
        type: '1'
    });

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    };

    return (
        <div style={{ maxWidth: '800px', gap: '20px', display: 'flex', flexDirection: 'column' }}>
            {/* First Name, Middle Name and Last Name */}
            <NSFormRow>
                <NSTextField
                    name="first_name"
                    label="First Name"
                    value={formData.first_name}
                    onChange={handleChange('first_name')}
                    isRequired
                    placeholder="Enter your first name"
                />
                <NSTextField
                    name="middle_name"
                    label="Middle Name"
                    value={formData.middle_name}
                    onChange={handleChange('middle_name')}
                    placeholder="Enter your middle name"
                />
                <NSTextField
                    name="email"
                    label="Last Name"
                    value={formData.last_name}
                    onChange={handleChange('last_name')}
                    isRequired
                    placeholder="Enter your last name"
                />
            </NSFormRow>

            {/* Email and Phone row */}
            <NSFormRow widths="1fr 2fr">
                <NSTextField
                    name="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    isRequired
                    adornments={{
                        end: '@gmail.com'
                    }}
                    placeholder="Enter your email"
                />
                <NSTextField
                    name="phone"
                    label="Phone"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    isRequired
                    adornments={{
                        start: '+91'
                    }}
                    placeholder="Enter your phone"
                />
            </NSFormRow>

            {/* Email and Phone row */}
            <NSFormRow widths="2fr 1fr">
                <NSTextField
                    name="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    isRequired
                    adornments={{
                        end: '@gmail.com'
                    }}
                    placeholder="Enter your email"
                />
                <NSTextField
                    name="phone"
                    label="Phone"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    isRequired
                    adornments={{
                        start: '+91'
                    }}
                    placeholder="Enter your phone"
                />
            </NSFormRow>

            {/* Description row */}
            <NSFormRow>
                <NSTextArea
                    name="description"
                    label="Description"
                    value={formData.description}
                    onChange={handleChange('description')}
                    placeholder="Enter description..."
                    rows={4}
                />
            </NSFormRow>

            {/* Radio buttons row */}
            <NSFormRow>
                <div>
                    <NSLabel name='account_type'>Account Type</NSLabel>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <NSRadioButton
                            name="type"
                            value="1"
                            label="Personal"
                            checked={formData.type === '1'}
                            onChange={handleChange('type')}
                        />
                        <NSRadioButton
                            name="type"
                            value="2"
                            label="Business"
                            checked={formData.type === '2'}
                            onChange={handleChange('type')}
                        />
                    </div>
                </div>
            </NSFormRow>
        </div>
    );
};

export const ExampleForm = Template.bind({});