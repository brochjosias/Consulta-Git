import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${(props) =>
    props.theme.colors.gray900}; /* Fundo escuro para o loading */
  color: ${(props) => props.theme.colors.white}; /* Texto branco */
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  background: ${(props) =>
    props.theme.colors.gray900}; /* Fundo escuro para o container */

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) =>
    props.theme.colors.gray800}; /* Fundo escuro para a sidebar */
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: auto; /* Adicionei scroll para conteúdo longo */
  padding: 1.5rem; /* Espaçamento interno */
  border-right: 1px solid ${(props) => props.theme.colors.gray700}; /* Borda sutil */

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    min-width: 100%; /* Sidebar ocupa toda a largura em telas pequenas */
    max-height: auto; /* Altura automática */
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray700}; /* Borda inferior */
  }
`;

export const Main = styled.section`
  background: ${(props) =>
    props.theme.colors.gray900}; /* Fundo escuro para a área principal */
  width: 100%;
  height: 100vh;
  overflow-y: auto; /* Adicionei scroll para conteúdo longo */
  padding: 2rem; /* Espaçamento interno */

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: auto; /* Altura automática em telas pequenas */
    padding: 1.5rem; /* Reduzi o padding para telas pequenas */
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1rem; /* Padding menor para telas muito pequenas */
  }
`;
