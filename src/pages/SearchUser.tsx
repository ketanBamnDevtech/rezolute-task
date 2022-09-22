import { useParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { UserProfile } from "../components/userData/profile/UserProfile";
import { UserRepos } from "../components/userData/repos/UserRepos";
import { UserProps } from "../types";
import { Container, Main } from "../utils/styles/pages/user";

type SearchUserProps = {
  user: UserProps | null;
  setUserData: (user: UserProps | null) => void;
};

function SearchUser({ user, setUserData }: SearchUserProps) {
  const { sname } = useParams();

  return (
    <Container>
      <SearchBar setUser={setUserData} userName={sname} />
      <Main>
        {user && <UserProfile user={user} />}
        {user && <UserRepos user={user} />}
      </Main>
    </Container>
  );
}

export default SearchUser;
