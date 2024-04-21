import { useEffect } from "react";
import { useState } from "react";
import { User } from "./User";
import "./GithubUser.css";

export const FindGithubUser = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`https://api.github.com/users/${user}`);
      const data = await resp.json();
      if (data) {
        setUserData(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user !== "") {
      fetchUserData();
    }
  }, []);

  if (loading) {
    return <h1 className="loading-text">The content is yet to be loaded</h1>;
  }

  if (errorMessage !== null) {
    <h1>There is an error while fetching the data ! {errorMessage}</h1>;
  }

  const handleSearch = () => {
    if (user !== "") {
      fetchUserData();
    }
    setUser("");
  };

  const handleModelToggle = () => setOpenModel(!openModel);

  return (
    <div className="user-wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search User..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          onClick={() => {
            handleSearch();
            handleModelToggle();
          }}
        >
          Search
        </button>
      </div>
      <div className="user-data-wrapper">
        {userData !== null
          ? openModel && (
              <User user={userData} clickToClose={handleModelToggle} />
            )
          : null}
      </div>
    </div>
  );
};
