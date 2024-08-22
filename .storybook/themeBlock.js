import styled, { css } from "styled-components";

const ThemeBlock = styled.div(({ theme, left, fill }) => {
    console.log("oh jeez", { theme, left, fill });
    return css`
        position: static;
        top: 0;
        left: ${left || fill ? 0 : "50vw"};
        border-right: ${left ? "1px solid #202020" : "none"};
        right: ${left ? "50%" : 0};
        width: ${fill ? "100%" : "50%"};
        height: max(100%, 700px);
        bottom: 0;
        overflow: auto;
        padding: 1rem;
        background: ${theme?.bgPrimary};
    `;
});

export default ThemeBlock;
