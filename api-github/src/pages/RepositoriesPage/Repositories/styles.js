import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    ); /* 2 colunas em telas médias */
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr; /* 1 coluna em telas pequenas */
    gap: 1rem; /* Reduzi o gap para telas pequenas */
  }
`;
