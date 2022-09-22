import { UserInfo } from "./UserInfo";
import UserLinks from "./UserLinks";
import { UserDetails } from "./UserDetails";
import { UserDataProps } from "../../../types";
import { Container,Pfp, SideArea } from "../../../utils/styles/components/profile";

export const UserProfile = ({ user }: UserDataProps) => {
  return (
    <Container>
      <Pfp src={user.pfp} alt={user.name} />

      <SideArea>
        <UserInfo
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
        />

        <UserDetails
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <UserLinks links={user.links} />
      </SideArea>
    </Container>
  );
};

