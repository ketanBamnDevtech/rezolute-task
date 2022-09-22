import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
  width: 30%;
  padding: 3rem 2.4rem;
  background: ${colors.card};

  border-radius: 1.5rem;
  margin: 1.6rem auto 0;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: block;

  @media (min-width: 768px) {
    padding: 5.2rem 1.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  @media (max-width: 991px) {
    width: 76%;
    display: block;
    padding: 1rem 2rem;
  }

  > div {
    max-height: 500px;
    overflow: auto;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Head = styled.h1`
  color: ${colors.themeBtn};
  text-align: center;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${colors.background};
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;
export const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  color: ${colors.themeBtn};
`;
export const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #787878;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;
