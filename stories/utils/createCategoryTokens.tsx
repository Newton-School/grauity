import { DARK_THEME_CONFIG, LIGHT_THEME_CONFIG } from 'ui/themes';
import { extractColorVariables } from 'ui/themes/utils';

import { CategoryToken } from '../types';

/**
 * Dynamically creates token mappings for a given type and categories.
 * Uses the light and dark theme configurations to create the tokens.
 *
 * @param type The type of tokens to create, e.g. colors, text, etc.
 * @param categories The categories of tokens to create, e.g. text, background, etc. If not provided, all categories will be created.
 * @returns
 */
export const createCategoryTokens = ({
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
        const lightThemeCategoryTokens = lightThemeTypeTokens[tokenCategory];
        const darkThemeCategoryTokens = darkThemeTypeTokens[tokenCategory];

        if (
            typeof lightThemeCategoryTokens === 'string' ||
            typeof darkThemeCategoryTokens === 'string'
        ) {
            return;
        }

        const lightThemeCategoryVariables = extractColorVariables({
            [tokenCategory]: lightThemeCategoryTokens,
        });
        const darkThemeCategoryVariables = extractColorVariables({
            [tokenCategory]: darkThemeCategoryTokens,
        });

        lightThemeCategoryVariables.forEach((variable) => {
            const [token, value] = variable.replace(/;$/, '').split(':');
            tokens.push({
                token: token.trim(),
                dark: darkThemeCategoryVariables
                    .find((v) => v.startsWith(token))
                    ?.replace(/;$/, '')
                    .split(':')[1]
                    .trim(),
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
