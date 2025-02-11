import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.gray700}; /* Fundo mais escuro */
  border-left: 3px solid ${(props) => props.color || props.theme.colors.primary}; /* Cor primária ou personalizada */
  padding: 1.5rem; /* Aumentei o padding para melhor espaçamento */
  border-radius: 8px; /* Bordas arredondadas */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px); /* Efeito de levitação ao passar o mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra suave */
  }
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold; /* Texto em negrito para destacar */
  color: ${(props) => props.theme.colors.white}; /* Cor branca para o nome */
  margin-bottom: 0.5rem; /* Espaçamento abaixo do nome */
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 1.5; /* Melhor espaçamento entre linhas */
  color: ${(props) =>
    props.theme.colors.gray300}; /* Cor mais suave para a descrição */
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || props.theme.colors.gray400};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: ${(props) => props.color || props.theme.colors.primary};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
