import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.gray900};
  color: ${(props) => props.theme.colors.white};
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.gray900};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.gray800};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: auto;
  padding: 1.5rem;
  border-right: 1px solid ${(props) => props.theme.colors.gray700};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    min-width: 100%;
    max-height: auto;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray700};
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.gray900};
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: auto;
    padding: 1.5rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1rem;
  }
`;
