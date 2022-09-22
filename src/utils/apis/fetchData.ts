import axios from "axios";
const baseUrl = "https://api.github.com/users";

export const getUser = (userName: string, callback: (res:any)=> void, errorhandler: (e:any)=> void) =>
  axios.get(`${baseUrl}/${userName}`)
    .then((res: any) => callback(res))
    .catch((error: any) => errorhandler(error));

export const getUserRepos = (userName: string, callback: (res:any)=> void, errorhandler: (e:any)=> void) =>
  axios.get(`${baseUrl}/${userName}/repos`)
    .then((res: any) => callback(res))
    .catch((error: any) => errorhandler(error));
