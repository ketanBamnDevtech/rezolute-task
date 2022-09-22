import { faClockRotateLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { userHistory } from "../App";
import {
  Container,
  Heading,
  Table,
  TableData,
  TextHover,
  Thead,
} from "../utils/styles/pages/history";

function SearchHistory({
  userSearchHistory,
  setUserSearchHistory,
}: {
  userSearchHistory: userHistory[];
  setUserSearchHistory: React.Dispatch<React.SetStateAction<userHistory[]>>;
}) {
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
                    onClick={() => {
                      setUserSearchHistory((d) =>
                        d.filter((data) => data.id !== item.id)
                      );
                    }}
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
