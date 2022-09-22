import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchUser from "./pages/SearchUser";
import { useState } from "react";
import { UserProps } from "./types";
import SearchHistory from "./pages/SearchHistory";

export type userHistory = {
  id: number | undefined;
  username: string | undefined;
  date: Date;
};

function App() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [userSearchHistory, setUserSearchHistory] = useState<userHistory[]>([]);

  function setUserData(user: UserProps | null): void {
    if (user) {
      setUser(user);

      const history: userHistory = {
        id: user?.id,
        username: user?.username,
        date: new Date(),
      };
      const checkHistory = userSearchHistory.filter((h) => h.id !== user?.id);
        setUserSearchHistory([...checkHistory, history]);
    
    }
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<SearchUser setUserData={setUserData} user={user} />}
        />
        <Route
          path="/:sname"
          element={<SearchUser setUserData={setUserData} user={user} />}
        />
        <Route
          path="/history"
          element={
            <SearchHistory
              userSearchHistory={userSearchHistory}
              setUserSearchHistory={setUserSearchHistory}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
