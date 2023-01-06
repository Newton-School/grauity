import "./fonts.css";
import { create } from "@storybook/theming";

export default create({
    base: "dark",
    brandTitle: "gra.UI.ty",
    brandUrl: "https://github.com/Newton-School/grauity",
    brandImage:
        "https://d15kzf698mbmzz.cloudfront.net/dist/f426a54e85b2efc0976d.png",
    brandTarget: "_self",

    // UI
    appBg: "white",
    appContentBg: "white",
    appBorderColor: "rgb(232, 234, 238)",
    appBorderRadius: 8,

    // Typography
    fontBase: '"Switzer", sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: "rgb(87, 97, 117)",
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    barTextColor: "rgb(87, 97, 117)",
    barSelectedColor: "rgb(0, 102, 255)",
    barBg: "rgb(249, 250, 251)",

    // Form colors
    inputBg: "rgb(255, 255, 255)",
    inputBorder: "1px solid rgb(217, 220, 227)",
    inputTextColor: "rgb(87, 97, 117)",
    inputBorderRadius: 8,
});
