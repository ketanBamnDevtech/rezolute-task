import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../colors";

export const NavbarContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;
  align-self: center;
  background-color: ${colors.card};
`;

export const NavMain = styled("div")`
    display: flex;
`;

export const Navlink = styled(Link)`
    font-size: 20px;
    padding-left: 15px;
    text-decoration: none;
    color: #fff;
    svg {
        padding-right: 5px
    }
`;