import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  background: ${(props) =>
    props.theme.colors.gray800}; /* Fundo escuro para contraste */
  border-radius: 8px; /* Bordas arredondadas */
  margin: 1rem 0; /* Margem para separar de outros componentes */
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralizar conteúdo */
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 150px; /* Tamanho maior para o avatar */
  height: 150px; /* Tamanho maior para o avatar */
  margin-bottom: 1rem;
  border: 3px solid ${(props) => props.theme.colors.primary}; /* Borda com cor primária */

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.white}; /* Cor branca para o login */
  margin-bottom: 0.5rem; /* Espaçamento abaixo do login */
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;
  color: ${(props) =>
    props.theme.colors.gray400}; /* Cor mais suave para o nome */

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem 0;
  color: ${(props) =>
    props.theme.colors.gray300}; /* Cor mais clara para o conteúdo interno */

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  color: ${(props) =>
    props.theme.colors.gray200}; /* Cor mais clara para os dados */
  margin-bottom: 0.5rem; /* Espaçamento entre os itens de dados */

  svg {
    margin-right: 10px;
    color: ${(props) =>
      props.theme.colors.primary}; /* Cor primária para os ícones */
  }
`;
