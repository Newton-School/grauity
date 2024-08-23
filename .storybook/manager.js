// .storybook/manager.js
import { addons } from "@storybook/addons";
import STORYBOOK_THEME from "./storybookTheme";

// Function to set the theme based on user preference
const setTheme = (theme) => {
    addons.setConfig({
        theme: STORYBOOK_THEME[theme],
    });
    localStorage.setItem("storybook-theme", theme);
};

// Get the saved theme from localStorage or default to DARK
const savedTheme = localStorage.getItem("storybook-theme") || "DARK";
setTheme(savedTheme);

// Add a button to toggle themes
const button = document.createElement("button");
button.innerText =
    savedTheme === "DARK" ? "Switch to Light Theme" : "Switch to Dark Theme";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.zIndex = "9999";
button.onclick = () => {
    const newTheme = savedTheme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
    button.innerText =
        newTheme === "DARK"
            ? "Switching to Dark Theme..."
            : "Switching to Light Theme...";
    window.location.reload();
};

document.body.appendChild(button);
