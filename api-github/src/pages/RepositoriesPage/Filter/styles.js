import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.5rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.gray700};
  color: ${(props) => props.color || props.theme.colors.gray200};
  width: 100%;
  min-height: 2.5rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s, color 0.3s;
  padding: 0 1.5rem;
  cursor: pointer;

  &:hover,
  &.selected {
    background: ${(props) => props.color || props.theme.colors.primary};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.white};
    transform: translateX(5px) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;
    &:hover,
    &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.gray400};
  border: none;
  text-align: left;
  padding: 1rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    text-align: center;
    width: 100%;
    padding: 0.5rem;
    margin: 0 auto;
  }
`;
