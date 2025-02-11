import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 1rem;
  background: ${(props) => props.theme.colors.gray800};
  border-radius: 8px;
  margin: 1rem 0;
  overflow: visible;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
  border: 3px solid ${(props) => props.theme.colors.primary};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 0.5rem;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;
  color: ${(props) => props.theme.colors.gray400};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.gray300};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.gray200};
  margin-bottom: 0.5rem;

  svg {
    margin-right: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
