import _ from 'lodash';
import React from 'react';

import { TableRow } from '../../ui/elements/Table/types';
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
    let kebabStr = _.kebabCase(str);

    // Use a regular expression to remove hyphens before numbers
    kebabStr = kebabStr.replace(/-(\d)/g, '$1');

    return kebabStr;
}

interface CategoryToken {
    token: string;
    dark: string;
    light: string;
}

interface ThemeConfig {
    [key: string]: {
        [subcategory: string]: {
            [token: string]: string;
        } | string;
    };
}

/**
 * Dynamically creates token mappings for a given category and subcategories.
 * Uses the light and dark theme configurations to create the tokens.
 *
 * @param category The category of tokens to create, e.g. colors, text, etc.
 * @param subcategories The subcategories of tokens to create, e.g. text, background, etc. If not provided, all subcategories will be created.
 * @returns
 */
const createCategoryTokens = ({
    category,
    subcategories,
    config = {
        light: LIGHT_THEME_CONFIG,
        dark: DARK_THEME_CONFIG,
    },
}: {
    category: string;
    subcategories: string[];
    config?: {
        light: ThemeConfig;
        dark: ThemeConfig;
    };
}): CategoryToken[] => {
    const lightThemeCategoryTokens = config.light[category];
    const darkThemeCategoryTokens = config.dark[category];

    const tokens: CategoryToken[] = [];

    const addTokens = (tokenSubcategory: string) => {
        const lightThemeSubcategoryTokens =
            lightThemeCategoryTokens[tokenSubcategory];
        const darkThemeSubcategoryTokens =
            darkThemeCategoryTokens[tokenSubcategory];

        if (typeof lightThemeSubcategoryTokens === 'string' || typeof darkThemeSubcategoryTokens === 'string') {
            return;
        }

        Object.keys(lightThemeSubcategoryTokens).forEach((tokenSubCategory) => {
            if (lightThemeSubcategoryTokens.hasOwnProperty(tokenSubCategory)) {
                tokens.push({
                    token: `--${getKebabCase(tokenSubCategory)}`,
                    dark: darkThemeSubcategoryTokens[tokenSubCategory],
                    light: lightThemeSubcategoryTokens[tokenSubCategory],
                });
            }
        });
    };

    if (subcategories?.length) {
        subcategories.forEach((subCategory) => {
            if (lightThemeCategoryTokens.hasOwnProperty(subCategory)) {
                addTokens(subCategory);
            }
        });
    } else {
        // add all subcategory tokens from that category if no subcategories are specified
        Object.keys(lightThemeCategoryTokens).forEach((subCategory) => {
            addTokens(subCategory);
        });
    }

    return tokens;
};

/**
 * Creates a table row for each token in a category and subcategory.
 *
 * For a given category, returned token rows will have the following keys:
 * - token: The token name
 * - value: The value of the token
 * - [category]: For visual representation of the token
 *
 * @param category The category of tokens to create, e.g. colors, font, spacing, etc.
 * @param subcategories The subcategories of tokens to create, e.g. text, background, etc. If not provided, all subcategories will be created.
 * @param theme The theme to use for the token values
 * @param render A function which returns a component to render the token visually
 * @returns
 */
export const extractTokensFromTheme = ({
    category,
    subcategories = [],
    theme = THEMES.LIGHT,
    render = () => null,
}: {
    category: string;
    subcategories?: string[];
    theme?: string;
    render: (token: CategoryToken) => React.ReactNode;
}): TableRow[] => {
    const colorTokens = createCategoryTokens({ category, subcategories });

    return colorTokens.map((token) => ({
        token: {
            render: () => <TokenBlock copy>{token.token}</TokenBlock>,
        },
        value: {
            render: () => (
                <TokenBlock>{token[theme as keyof CategoryToken]} </TokenBlock>
            ),
        },
        [category]: {
            render: () => render(token),
        },
    }));
};

/**
 * Extracts tokens from global styles
 *
 * Returned token rows will have the following keys
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