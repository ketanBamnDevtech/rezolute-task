import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.background};
  height: calc(100% -100vh)
    display: flex;
    align-items: center;

  @media (min-width: 768px) {
    padding: 3.1rem 0;
    width: 85%;
    margin: 0 auto;
  }
`;

export const Main = styled("div")`
  display: flex;
  gap: 15px;

  @media (max-width: 991px) {
    display: block;
  }
`;