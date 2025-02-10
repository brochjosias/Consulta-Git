import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.5rem; /* Aumentei o gap para melhor espaçamento */
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
    gap: 1rem; /* Aumentei o gap para telas menores */
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.gray700}; /* Fundo mais escuro */
  color: ${(props) =>
    props.color || props.theme.colors.gray200}; /* Cor do texto mais clara */
  width: 100%;
  min-height: 2.5rem; /* Aumentei a altura para melhor toque */
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s, color 0.3s;
  padding: 0 1.5rem; /* Aumentei o padding para melhor espaçamento interno */
  cursor: pointer; /* Adicionei cursor pointer para indicar interatividade */

  &:hover,
  &.selected {
    background: ${(props) =>
      props.color ||
      props.theme.colors.primary}; /* Cor primária ao selecionar */
    color: ${(props) =>
      props.color
        ? props.theme.colors.white
        : props.theme.colors.white}; /* Texto branco ao selecionar */
    transform: translateX(5px) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px; /* Bordas arredondadas em telas menores */
    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02); /* Remove o translateX em telas menores */
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) =>
    props.theme.colors.gray400}; /* Cor mais suave para o texto */
  border: none;
  text-align: left;
  padding: 1rem;
  cursor: pointer; /* Adicionei cursor pointer para indicar interatividade */
  transition: color 0.3s;

  &:hover {
    color: ${(props) =>
      props.theme.colors.primary}; /* Cor primária ao passar o mouse */
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center; /* Centraliza o texto em telas pequenas */
    width: 100%; /* Ocupa toda a largura disponível */
    padding: 0.5rem; /* Reduz o padding para telas pequenas */
    margin: 0 auto; /* Centraliza o botão horizontalmente */
  }
`;
