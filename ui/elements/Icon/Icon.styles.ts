import styled, { css, keyframes } from 'styled-components';

import { IconProps } from './types';

const iconLoading = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledIcon = styled.i.attrs((props: any) => ({
    as: props.as || 'i',
}))<IconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    line-height: 1em;
    backface-visibility: hidden;
    speak: none;
    text-decoration: inherit;
    opacity: 1;
    text-align: center;

    ${({ size }) => css`
        font-size: ${size}px;
    `}

    ${({ color }) => css`
        color: ${color};

        &.bordered,
        &.circular {
            box-shadow: 0 0 0 0.1em ${color} inset;
            height: 1em;
            width: 1em;

            &.inverted {
                color: var(--icon-color-white);
                background-color: ${color};
            }
        }

        &.disabled {
            color: ${color};

            &.bordered,
            &.circular {
                box-shadow: 0 0 0 0.1em ${color} inset;
                height: 1em;
                width: 1em;

                &.inverted {
                    color: var(--disabled-icon-color-white);
                    background-color: ${color};
                }
            }
        }
    `}


    &.loading {
        animation: ${iconLoading} 2s linear infinite;
    }

    &.fitted {
        width: auto;
        margin: 0 !important;
    }

    &.horizontally-flipped {
        transform: scaleX(-1);
    }

    &.vertically-flipped {
        transform: scaleY(-1);
    }

    &.clockwise-rotated {
        transform: rotate(90deg);
    }

    &.counterclockwise-rotated {
        transform: rotate(-90deg);
    }

    &.link {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.1s ease-in-out;

        &:hover {
            opacity: 1;
        }
    }

    &.circular {
        border-radius: 50%;
    }
`;
