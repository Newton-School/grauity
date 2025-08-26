import React from 'react';

import THEMES from '../../ui/themes/constants';
import TokenBlock from '../helper-components/TokenBlock';
import { CategoryToken } from '../types';
import { createCategoryTokens } from './createCategoryTokens';

/**
 * Extracts theme tokens in a type (like 'colors') and
 * category (like 'text' or 'background') from the theme object.
 *
 *
 * For a given type, token objects returned by this function will
 * have the following keys:
 * - token: The token name
 * - value: The value of the token
 * - [type]: For visual representation of the token
 *
 * @param categories The categories of tokens to create, e.g. text, background, etc. If not provided, all categories will be created.
 * @param theme The theme to use for the token values
 * @param type The type of tokens to create, e.g. colors, font, spacing, etc.
 * @param render A function which returns a component to render the token visually
 * @returns
 */
export const extractTokensFromTheme = ({
    categories = [],
    currentTheme = THEMES.LIGHT,
    type,
    render = () => null,
}: {
    categories?: string[];
    currentTheme?: string;
    type?: string;
    render?: (token: CategoryToken) => React.ReactNode;
}) => {
    const colorTokens = createCategoryTokens({ type, categories });

    return colorTokens.map((token) => ({
        token: {
            render: () => <TokenBlock copy>{token.token}</TokenBlock>,
        },
        value: {
            render: () => (
                <TokenBlock
                    copy
                    color={`var(${token.token})`}
                    background={type === 'colors' ? 'var(--bg-subtle-primary-default, #ffffff)' : ''}
                >
                    {token[currentTheme as keyof CategoryToken]}
                </TokenBlock>
            ),
        },
        light: {
            render: () => (
                <div className="grauity-theme-light">
                    <TokenBlock
                        copy
                        color={token.light}
                        background={
                            type === 'colors' ? 'var(--bg-subtle-primary-default, #ffffff)' : ''
                        }
                    >
                        {token.light}
                    </TokenBlock>
                </div>
            ),
        },
        dark: {
            render: () => (
                <div className="grauity-theme-dark">
                    <TokenBlock
                        copy
                        color={token.dark}
                        background={
                            type === 'colors' ? 'var(--bg-subtle-primary-default, #ffffff)' : ''
                        }
                    >
                        {token.dark}
                    </TokenBlock>
                </div>
            ),
        },
        ...(type &&
            typeof render === 'function' && {
            [type]: {
                render: () => render(token),
            },
        }),
    }));
};
