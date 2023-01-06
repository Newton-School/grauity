import React from "react";
import { GrauityInit } from "../ui";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <GrauityInit fontSize={"16px"} multiplier={1}>
            <Story />
        </GrauityInit>
    ),
];
