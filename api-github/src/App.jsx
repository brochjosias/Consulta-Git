/* eslint-disable import/named */
import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Normalize } from "styled-normalize";
import { AppRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

// Chamda inicial da aplicacao
export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}
