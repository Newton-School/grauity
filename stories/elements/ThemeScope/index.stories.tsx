import React from 'react';
import ThemeScope from 'ui/elements/ThemeScope/ThemeScope';

import { StyledCard } from './index.styles';

export default {
    title: 'Elements/ThemeScope',
    component: ThemeScope,
};

const Template = () => {
    return (
        <div style={{width: '300px'}}>
            <ThemeScope invert as={StyledCard}>
                <ThemeScope invert as={StyledCard}>
                    <ThemeScope invert as={StyledCard}>
                        <ThemeScope invert as={StyledCard}>
                            <ThemeScope invert as={StyledCard}>
                                <ThemeScope invert as={StyledCard}>
                                    <ThemeScope invert as={StyledCard} />
                                </ThemeScope>
                            </ThemeScope>
                        </ThemeScope>
                    </ThemeScope>
                </ThemeScope>
            </ThemeScope>
        </div>
    );
};
export const Component = Template.bind({});

const SameTheme = () => {
    return (
        <>
            <div style={{ width: '300px' }}>
                <ThemeScope applyTheme="light" as={StyledCard}>
                    <StyledCard>
                        <StyledCard />
                    </StyledCard>
                </ThemeScope>
            </div>
            <br />
            <div style={{ width: '300px' }}>
                <ThemeScope applyTheme="dark" as={StyledCard}>
                    <StyledCard>
                        <StyledCard />
                    </StyledCard>
                </ThemeScope>
            </div>
        </>
    );
};
export const SameThemeAsParent = SameTheme.bind({});

const InvertTheme = () => {
    return (
        <>
            <div style={{ width: '300px' }}>
                <ThemeScope applyTheme="light" as={StyledCard}>
                    <ThemeScope invert as={StyledCard}>
                        <ThemeScope invert as={StyledCard} />
                    </ThemeScope>
                </ThemeScope>
            </div>
            <br />
            <div style={{ width: '300px' }}>
                <ThemeScope applyTheme="dark" as={StyledCard}>
                    <ThemeScope invert as={StyledCard}>
                        <ThemeScope invert as={StyledCard} />
                    </ThemeScope>
                </ThemeScope>
            </div>
        </>
    );
};
export const InvertThemeFromParent = InvertTheme.bind({});

const ApplyTheme = () => {
    return (
        <>
            <div style={{ width: '300px' }}>
                <ThemeScope applyTheme="light" as={StyledCard}>
                    <ThemeScope applyTheme="dark" as={StyledCard} />
                </ThemeScope>
            </div>
            <br />
            <div style={{ width: '300px' }}>
                <ThemeScope applyTheme="dark" as={StyledCard}>
                    <ThemeScope applyTheme="light" as={StyledCard} />
                </ThemeScope>
            </div>
        </>
    );
};
export const ApplyThemeManually = ApplyTheme.bind({});