import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.gray200};
    font-family: ${(props) => props.theme.fontFamily.sans};
    padding: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
