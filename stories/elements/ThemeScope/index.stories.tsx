import React from 'react';
import Button from 'ui/elements/Button';
import Modal from 'ui/elements/Modal';
import ThemeScope from 'ui/elements/ThemeScope/ThemeScope';

import { StyledCard } from './index.styles';

export default {
    title: 'Elements/ThemeScope',
    component: ThemeScope,
};

const Template = () => {
    return (
        <div style={{ width: '300px' }}>
            <ThemeScope invert>
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

const NestedOverlayTemplate = () => {
    const [firstModalOpen, setFirstModalOpen] = React.useState(false);
    const [secondModalOpen, setSecondModalOpen] = React.useState(false);

    return (
        <div style={{ width: '300px' }}>
            <ThemeScope
                invert
                as={StyledCard}
                className='custom-class-1'
            >
                <Button onClick={() => setFirstModalOpen(true)}>
                    Open Modal 1
                </Button>
                <Modal
                    isOpen={firstModalOpen}
                    onClose={() => setFirstModalOpen(false)}
                    hideOnClickAway
                >
                    Oh hi, I am Modal 1
                </Modal>
                <ThemeScope
                    invert
                    as={StyledCard}
                    className='custom-class-2'
                >
                    <Button onClick={() => setSecondModalOpen(true)}>
                        Open Modal 2
                    </Button>
                    <Modal
                        isOpen={secondModalOpen}
                        onClose={() => setSecondModalOpen(false)}
                        hideOnClickAway
                    >
                        Oh hi, I am Modal 2
                    </Modal>
                </ThemeScope>
            </ThemeScope>
        </div>
    );
};
export const NestedOverlayComponents = NestedOverlayTemplate.bind({});

