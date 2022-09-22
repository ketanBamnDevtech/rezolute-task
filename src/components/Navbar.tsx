import {
  faClockRotateLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarContainer, Navlink, NavMain } from "../utils/styles/components/nav";

function Navbar() {
  return (
    <NavbarContainer>
      <Navlink to="/">
        Rezolute
      </Navlink>
      <NavMain>
        <Navlink to="/">
            <FontAwesomeIcon color="white" icon={faMagnifyingGlass} size="sm" />
            Search
        </Navlink>
        <Navlink to="/history">
            <FontAwesomeIcon color="white" icon={faClockRotateLeft} size="sm" />
            history
        </Navlink>
      </NavMain>
    </NavbarContainer>
  );
}

export default Navbar;
