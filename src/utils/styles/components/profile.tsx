import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
  width: 70%;
  padding: 3rem 2.4rem;
  background: ${colors.card};

  border-radius: 1.5rem;
  margin: 1.6rem auto 0;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 1.8rem;
    width: 95%;;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  @media (max-width: 991px) {
    width: 76%;
    display: block;
    padding: 1rem 2rem;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;

  @media (min-width: 900px) {
    display: block;
  }
`;

export const SideArea = styled.div`
  width: 100%;
`;
