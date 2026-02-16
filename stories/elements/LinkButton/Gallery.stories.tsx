import React from 'react';
import styled, { css } from 'styled-components';
import LinkButton from 'ui/elements/LinkButton';
import ThemeScope from 'ui/elements/ThemeScope/ThemeScope';

type PreviewState = 'default' | 'hover' | 'focus-visible' | 'pressed' | 'disabled';

const PREVIEW_STATES: PreviewState[] = [
    'default',
    'hover',
    'focus-visible',
    'pressed',
    'disabled',
];

const StyledGalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-24px, 24px);

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const StyledThemeCard = styled.div`
    border: 1px solid var(--border-subtle-primary-default);
    border-radius: var(--corner-radius-16px, 16px);
    padding: var(--spacing-24px, 24px);
    background: var(--bg-subtle-primary-default);
`;

const StyledThemeHeading = styled.p`
    margin: 0 0 var(--spacing-16px, 16px);
    color: var(--text-emphasis-primary-default);
    font-size: var(--font-size-fs-40, 18px);
    font-weight: var(--font-weight-fw-20, 550);
    line-height: var(--line-height-lh-80, 28px);
    letter-spacing: var(--letter-spacing-ls-30, 0.1px);
`;

const StyledStateGrid = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr 1fr;
    gap: var(--spacing-12px, 12px);
    align-items: center;
`;

const StyledColumnHeading = styled.span`
    color: var(--text-emphasis-secondary-default);
    font-size: var(--font-size-fs-10, 12px);
    font-weight: var(--font-weight-fw-20, 550);
    line-height: var(--line-height-lh-30, 18px);
    letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    text-transform: uppercase;
`;

const StyledStateLabel = styled.span`
    color: var(--text-emphasis-secondary-default);
    font-size: var(--font-size-fs-20, 14px);
    font-weight: var(--font-weight-fw-10, 450);
    line-height: var(--line-height-lh-50, 22px);
    letter-spacing: var(--letter-spacing-ls-30, 0.1px);
`;

const StyledPreviewButton = styled(LinkButton)<{ $previewState: PreviewState }>`
    ${({ $previewState }) =>
        $previewState === 'focus-visible' &&
        css`
            outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
        `}

    ${({ $previewState }) =>
        $previewState === 'pressed' &&
        css`
            transform: scale(0.99);
        `}
`;

const ThemeSection = ({ title, theme }: { title: string; theme: 'light' | 'dark' }) => (
    <ThemeScope applyTheme={theme} as={StyledThemeCard}>
        <StyledThemeHeading>{title}</StyledThemeHeading>
        <StyledStateGrid>
            <span />
            <StyledColumnHeading>Large</StyledColumnHeading>
            <StyledColumnHeading>Small</StyledColumnHeading>
            {PREVIEW_STATES.map((previewState) => (
                <React.Fragment key={previewState}>
                    <StyledStateLabel>{previewState}</StyledStateLabel>
                    <StyledPreviewButton
                        $previewState={previewState}
                        size="large"
                        disabled={previewState === 'disabled'}
                    >
                        Link
                    </StyledPreviewButton>
                    <StyledPreviewButton
                        $previewState={previewState}
                        size="small"
                        disabled={previewState === 'disabled'}
                    >
                        Link
                    </StyledPreviewButton>
                </React.Fragment>
            ))}
        </StyledStateGrid>
    </ThemeScope>
);

export default {
    title: 'Elements/LinkButton',
    component: LinkButton,
    tags: ['!autodocs'],
};

export const Gallery = () => (
    <StyledGalleryWrapper>
        <ThemeSection title="Light Mode" theme="light" />
        <ThemeSection title="Dark Mode" theme="dark" />
    </StyledGalleryWrapper>
);
