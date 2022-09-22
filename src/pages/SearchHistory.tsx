import { faClockRotateLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { userHistory } from "../App";
import { toast } from "react-toastify";
import {
  Container,
  Heading,
  Table,
  TableData,
  TextHover,
  Thead,
} from "../utils/styles/pages/history";

type SearchHistoryprops = {
  userSearchHistory: userHistory[];
  setUserSearchHistory: React.Dispatch<React.SetStateAction<userHistory[]>>;
};

function SearchHistory({
  userSearchHistory,
  setUserSearchHistory,
}: SearchHistoryprops) {
  const deleteUserHistory = (item: userHistory) => {
    setUserSearchHistory((d) => d.filter((data) => data.id !== item.id));
    toast.success("deleted", { position: toast.POSITION.TOP_CENTER });
  };
  return (
    <Container>
      <Heading>
        {" "}
        <FontAwesomeIcon color="white" icon={faClockRotateLeft} size="sm" />
        History
      </Heading>
      <Table>
        <tr>
          <Thead>name</Thead>
          <Thead>time</Thead>
          <Thead>action</Thead>
        </tr>
        {[...userSearchHistory]
          .reverse()
          .map((item: userHistory, index: number) => {
            return (
              <tr key={index}>
                <TableData>
                  <Link to={`/${item.username}`}>
                    {" "}
                    <TextHover>{item?.username}</TextHover>{" "}
                  </Link>
                </TableData>
                <TableData>{item?.date.toLocaleTimeString("en-US")}</TableData>
                <TableData>
                  <TextHover
                    className="m-1"
                    onClick={() => deleteUserHistory(item)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faTrash} color="red" />{" "}
                  </TextHover>
                </TableData>
              </tr>
            );
          })}
      </Table>
    </Container>
  );
}

export default SearchHistory;
