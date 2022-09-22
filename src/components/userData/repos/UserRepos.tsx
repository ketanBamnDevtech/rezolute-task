import { useEffect, useState } from "react";
import { RepoType, UserDataProps } from "../../../types";
import { getUserRepos } from "../../../utils/apis/fetchData";
import { joinedDate } from "../../../utils/formatter";
import { Card, CardBody, CardSubtitle, CardTitle, Container, Head } from "../../../utils/styles/components/repo";

export const UserRepos = ({ user }: UserDataProps) => {
  const [repos, setRepos] = useState<RepoType[]>([]);

  useEffect(() => {
    const callBack = ({ data }: any) => {
      setRepos(data);
      //toast ....

    };

    const errorHandler = (error: any) => {
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.error;
      }
      //toast ....
    };

    getUserRepos(user.login, callBack, errorHandler);
  }, [user]);

  return (
    <Container>
      <Head>RepoSitories</Head>
      <div>
        {repos.map((repo) => (
          <Card key={repo.id}>
            <CardBody>
              <CardTitle>{repo.name}</CardTitle>
              <p>{joinedDate(repo.created_at)}</p>

              <p>Desc: {repo.description}</p>
              <CardSubtitle>
                Lang: {repo.language ? repo.language : "not mentioned!"}
              </CardSubtitle>
              <CardSubtitle>Branch: {repo.default_branch}</CardSubtitle>
              <CardSubtitle>
                <a href={repo.html_url} target="_blank">
                  Visit Repo
                </a>
              </CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </div>
    </Container>
  );
};

