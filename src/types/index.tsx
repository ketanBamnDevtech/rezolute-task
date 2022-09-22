export interface UserProps {
  login: string;
  id: number;
  pfp: string;
  name: string;
  joinedAt: string;
  username: string;
  bio: string;
  repos: string;
  followers: string;
  following: string;
  links: {
    location: string;
    twitter: string;
    blog: string;
    company: string;
  };
}

export type RepoType = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  default_branch: string;
  created_at: string;
}

export interface TopAreaProps {
  setUser: (user: UserProps | null) => void;
}

export interface UserDataProps {
  user: UserProps;
}

export interface userRepoProps {
  repos: RepoType[];
}
