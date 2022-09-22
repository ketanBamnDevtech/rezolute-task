import React, { useState, useCallback, useEffect } from "react";
import { UserProps } from "../types";
import { joinedDate } from "../utils/formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../utils/apis/fetchUserDetails";
import {
  Container,
  Input,
  InputArea,
  InputLabel,
  SubmitBtn,
  Warn,
} from "../utils/styles/components/searchBar";
import { toast } from "react-toastify";

type SearchbarProps = {
  setUser: (user: UserProps | null) => void;
  userName: string | undefined;
};

export const SearchBar = ({ setUser, userName }: SearchbarProps) => {
  const [empty, setEmpty] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    if (userName) {
      setUserInput(userName);
      fetchUser(userName);
    }
  }, [userName]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (userInput.trim() === "") {
        setEmpty(true);
        setUser(null);
        return;
      }
      setEmpty(false);
      fetchUser(userInput);
    },
    [userInput]
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value),
    [userInput, setUserInput]
  );

  async function fetchUser(name: string) {
    const errorHandler = (error: any) => {
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.message;
        const status = error.response.request.status;
        toast.error(`${errorMsg} with ${status}`);
      }
      setNotFound(true);
      setUser(null);
    };

    const callBack = ({ data }: any) => {
      const user: UserProps = {
        login: data.login,
        id: data.id,
        pfp: data.avatar_url,
        name: data.name,
        joinedAt: joinedDate(data.created_at),
        username: data.login,
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        links: {
          location: data.location,
          twitter: data.twitter_username,
          company: data.company,
          blog: data.blog,
        },
      };
      setNotFound(false);
      setUser(user);
      toast.success("user Found");
    };
    getUser(name, callBack, errorHandler);
  }

  return (
    <Container>
      <InputArea onSubmit={handleSubmit}>
        <InputLabel>
          <FontAwesomeIcon color="white" icon={faMagnifyingGlass} size="2xl" />
        </InputLabel>

        <Input
          name="username"
          id="username"
          type="text"
          value={userInput}
          onChange={onChangeInput}
          placeholder="Search username ..."
        />
        {empty && <Warn>Enter User</Warn>}
        {notFound && <Warn>Not Found</Warn>}

        <SubmitBtn type="submit">Search</SubmitBtn>
      </InputArea>
    </Container>
  );
};
