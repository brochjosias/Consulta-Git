import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
  background: ${(props) => props.theme.colors.gray800};
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.gray700};
  color: ${(props) => props.theme.colors.gray200};
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  border-radius: 8px;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray500};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  width: 80px;
  height: 64px;
  border: none;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: ${(props) =>
      `rgba(${parseInt(props.theme.colors.primary.slice(1, 3), 16)}, ${parseInt(
        props.theme.colors.primary.slice(3, 5),
        16
      )}, ${parseInt(props.theme.colors.primary.slice(5, 7), 16)}, 0.8)`};
  }

  svg {
    width: 32px;
    height: 32px;
    fill: ${(props) => props.theme.colors.white};
    transition: fill 0.3s;
  }

  &:hover svg {
    fill: ${(props) => props.theme.colors.white};
  }
`;
