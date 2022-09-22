import { Bio, Info, JoinedAt, Name, SideInfo, Username } from "../../../utils/styles/components/userInfo";

interface TopAreaProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
}

export const UserInfo = ({ username, name, joinedAt, bio }: TopAreaProps) => {
  return (
    <>
      <Info>
        <SideInfo>
          <Name>{name}</Name>
          <Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </Username>

          <JoinedAt>{joinedAt}</JoinedAt>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  );
};

