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

export const Heading = styled.h2`
  text-align: center;
  color: #fcf;
`;

export const Table = styled.table`
  background-color: ${colors.card};
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.th`
  min-width: 300px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 8px;
  color: ${colors.themeBtn};
`;

export const TableData = styled.td`
  min-width: 300px;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  padding: 5px 8px;
  text-align: center;
  color: ${colors.themeBtn};
`;

export const TextHover = styled.div`
  color: #0d6efd;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  color: ${colors.textBolded};
  &:hover {
    color: ${colors.themeBtn};
  }
`;