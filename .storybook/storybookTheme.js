import "./fonts.css";
import { create } from "@storybook/theming";

const STORYBOOK_LIGHT_THEME = create({
    base: "light",
    brandTitle: "gra.UI.ty",
    brandUrl: "https://github.com/Newton-School/grauity",
    brandImage:
        "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/383f97fde24e45d18e60ef15f9dc866b-logo_black.svg",
    brandTarget: "_self",

    // UI
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    appBorderColor: "#E1E5EA",
    appBorderRadius: 8,

    // Typography
    fontBase: '"Switzer", sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: "#5B6271",
    textInverseColor: "#8C95A6",

    // Toolbar default and active colors
    barTextColor: "#5B6271",
    barSelectedColor: "#0673f9",
    barBg: "#F6F7F9",

    // Form colors
    inputBg: "#ffffff",
    inputBorder: "1px solid #E1E5EA",
    inputTextColor: "#5B6271",
    inputBorderRadius: 8,
});

const STORYBOOK_DARK_THEME = create({
    base: "dark",
    brandTitle: "gra.UI.ty",
    brandUrl: "https://github.com/Newton-School/grauity",
    brandImage:
        "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/1d6eb791260241f195bb3d9ea6780dbe-logo_white.svg",
    brandTarget: "_self",

    // UI
    appBg: "#0b0c0e",
    appContentBg: "#23282f",
    appBorderColor: "#30363d",
    appBorderRadius: 8,

    // Typography
    fontBase: '"Switzer", sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: "#ffffff",
    textInverseColor: "#16191D",

    // Toolbar default and active colors
    barTextColor: "#ffffff",
    barSelectedColor: "#0673f9",
    barBg: "#16191d",

    // Form colors
    inputBg: "#3b4149",
    inputBorder: "1px solid #30363d",
    inputTextColor: "#ffffff",
    inputBorderRadius: 8,
});

const STORYBOOK_THEME = {
    LIGHT: STORYBOOK_LIGHT_THEME,
    DARK: STORYBOOK_DARK_THEME,
};

export default STORYBOOK_THEME;
