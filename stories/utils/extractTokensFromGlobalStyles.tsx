import React from 'react';

import TokenBlock from '../helper-components/TokenBlock';

/**
 * Extracts tokens from global styles
 *
 * Returned token objects will have the following keys
 * - token: The token name
 * - value: The value of the token
 * - [type]: For visual representation of the token
 *
 * @param globalStyle The global styles to extract tokens from, in string form.
 * @param regExp The regular expression to use to extract tokens.
 * @param type The type of token e.g. colors, font, spacing, etc.
 * @param render A function which returns a component to render the token visually
 *
 * @returns
 */
export const extractTokensFromGlobalStyles = ({
    globalStyleString,
    regExp,
    type,
    render,
}: {
    globalStyleString: string;
    regExp: RegExp;
    type?: string;
    render?: (token: string, value: string) => React.ReactNode;
}) => {
    const matches = Array.from(globalStyleString.matchAll(regExp));

    return matches.map(([tokenWithValue, , _value]) => {
        const token = tokenWithValue.split(':')[0];
        const value = _value.replace(/;$/, '');

        return {
            token: {
                render: () => <TokenBlock copy>{token}</TokenBlock>,
            },
            value: {
                render: () => (
                    <TokenBlock
                        copy
                        color={type === 'colors' ? `var(${token})` : null}
                        background={
                            type === 'colors' ? 'var(--bg-subtle-primary-default, #ffffff)' : ''
                        }
                    >
                        {value}
                    </TokenBlock>
                ),
            },
            ...(type &&
                typeof render === 'function' && {
                [type]: {
                    render: () => render(`var(${token})`, value),
                },
            }),
        };
    });
};
