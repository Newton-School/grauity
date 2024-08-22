import React, { useContext } from "react";
import { ThemeWrapper, GrauityInit } from "../ui";
import { ThemeContext } from "../ui/themes/ThemeContext";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const withTheme = (Story, context) => {
    const themeContext = useContext(ThemeContext);
    const handleToggleTheme = themeContext?.handleToggleTheme;
    const currentTheme = context.parameters.theme || context.globals.theme;
    return (
        <ThemeWrapper>
            <GrauityInit fontSize={"16px"} multiplier={1}>
                <Story />
            </GrauityInit>
        </ThemeWrapper>
    );
};

export const decorators = [withTheme];
