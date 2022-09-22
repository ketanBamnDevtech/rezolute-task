import { Container, Data } from "../../../utils/styles/components/userDetails";

interface StastsAreaProps {
  repos: string;
  followers: string;
  following: string;
}

export const UserDetails = ({
  repos,
  followers,
  following,
}: StastsAreaProps) => {
  return (
    <Container>
      <Data>
        <span>Repos</span>
        <strong>{repos}</strong>
      </Data>

      <Data>
        <span>Followers</span>
        <strong>{followers}</strong>
      </Data>

      <Data>
        <span>Following</span>
        <strong>{following}</strong>
      </Data>
    </Container>
  );
};
