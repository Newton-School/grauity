import React from "react";
import { ThemeWrapper, GrauityInit } from "../ui";
import ThemeBlock from "./themeBlock";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: "fullscreen",
};

const withTheme = (Story, context) => {
    const currentTheme = context.parameters.theme || context.globals.theme;
    return (
        <ThemeWrapper defaultTheme={currentTheme}>
            <GrauityInit fontSize={"16px"} multiplier={1}>
                <ThemeBlock fill>
                    <Story />
                </ThemeBlock>
            </GrauityInit>
        </ThemeWrapper>
    );
};

export const decorators = [withTheme];
