import kebabCase from 'lodash/kebabCase';
import React from 'react';
import { extractColorVariables } from 'ui/themes/utils';

import THEMES from '../../ui/themes/constants';
import DARK_THEME_CONFIG from '../../ui/themes/darkThemeConstants';
import LIGHT_THEME_CONFIG from '../../ui/themes/lightThemeConstants';
import TokenBlock from '../helper-components/TokenBlock';

/**
 * Convert a string to kebab case, removing hyphens before numbers
 * @param str
 * @returns
 */
export function getKebabCase(str: string): string {
    // First, convert the string to kebab case using lodash
    let kebabStr = kebabCase(str);

    // Use a regular expression to remove hyphens before numbers
    kebabStr = kebabStr.replace(/-(\d)/g, '$1');

    return kebabStr;
}

interface CategoryToken {
    token: string;
    dark: string;
    light: string;
}

/**
 * Dynamically creates token mappings for a given type and categories.
 * Uses the light and dark theme configurations to create the tokens.
 *
 * @param type The type of tokens to create, e.g. colors, text, etc.
 * @param categories The categories of tokens to create, e.g. text, background, etc. If not provided, all categories will be created.
 * @returns
 */
const createCategoryTokens = ({
    type,
    categories,
    config = {
        light: LIGHT_THEME_CONFIG,
        dark: DARK_THEME_CONFIG,
    },
}: {
    type: string;
    categories: string[];
    config?: {
        light: Record<string, any>;
        dark: Record<string, any>;
    };
}): CategoryToken[] => {
    const lightThemeTypeTokens = config.light[type];
    const darkThemeTypeTokens = config.dark[type];

    const tokens: CategoryToken[] = [];

    const addTokens = (tokenCategory: string) => {
        const lightThemeCategoryTokens =
            lightThemeTypeTokens[tokenCategory];
        const darkThemeCategoryTokens =
            darkThemeTypeTokens[tokenCategory];

        if (
            typeof lightThemeCategoryTokens === 'string' ||
            typeof darkThemeCategoryTokens === 'string'
        ) {
            return;
        }

        const lightThemeCategoryVariables = extractColorVariables({[tokenCategory]: lightThemeCategoryTokens});
        const darkThemeCategoryVariables = extractColorVariables({[tokenCategory]: darkThemeCategoryTokens});

        lightThemeCategoryVariables.forEach((variable) => {
            const [token, value] = variable.split(':');
            tokens.push({
                token: token.trim(),
                dark: darkThemeCategoryVariables.find((v) => v.startsWith(token))?.split(':')[1].trim(),
                light: value.trim(),
            });
        });
    };

    if (categories?.length) {
        categories.forEach((category) => {
            if (lightThemeTypeTokens.hasOwnProperty(category)) {
                addTokens(category);
            }
        });
    } else {
        // add all category tokens from that type if no categories are specified
        Object.keys(lightThemeTypeTokens).forEach((category) => {
            addTokens(category);
        });
    }

    return tokens;
};

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
 * @param type The type of tokens to create, e.g. colors, font, spacing, etc.
 * @param categories The categories of tokens to create, e.g. text, background, etc. If not provided, all categories will be created.
 * @param theme The theme to use for the token values
 * @param render A function which returns a component to render the token visually
 * @returns
 */
export const extractTokensFromTheme = ({
    type,
    categories = [],
    currentTheme = THEMES.LIGHT,
    render = () => null,
}: {
    type: string;
    categories?: string[];
    currentTheme?: string;
    render: (token: CategoryToken) => React.ReactNode;
}) => {
    const colorTokens = createCategoryTokens({ type, categories });

    return colorTokens.map((token) => ({
        token: {
            render: () => <TokenBlock copy>{token.token}</TokenBlock>,
        },
        value: {
            render: () => (
                <TokenBlock>{token[currentTheme as keyof CategoryToken]} </TokenBlock>
            ),
        },
        [type]: {
            render: () => render(token),
        },
    }));
};

/**
 * Extracts tokens from global styles
 *
 * Returned token objects will have the following keys
 * - token: The token name
 * - value: The value of the token
 * - [type]: For visual representation of the token
 *
 * @param type The type of token to extract, e.g. colors, font, spacing, etc.
 * @param globalStyle The global styles to extract tokens from, in string form.
 * @param regExp The regular expression to use to extract tokens.
 * @param render A function which returns a component to render the token visually
 *
 * @returns
 */
export const extractTokensFromGlobalStyles = ({
    type,
    globalStyleString,
    regExp,
    render,
}: {
    type: string;
    globalStyleString: string;
    regExp: RegExp;
    render: (token: string, value: string) => React.ReactNode;
}) => {
    const matches = Array.from(globalStyleString.matchAll(regExp));

    return matches.map(([tokenWithValue, , value]) => {
        const token = tokenWithValue.split(':')[0];
        return {
            token: {
                render: () => <TokenBlock copy>{token}</TokenBlock>,
            },
            value: {
                render: () => <TokenBlock>{value}</TokenBlock>,
            },
            [type]: {
                render: () => render(`var(${token})`, value),
            },
        };
    });
};
