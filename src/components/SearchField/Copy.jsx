import { useEffect, useState } from "react";

export default function SearchedField() {
  // state to hold the user data
  const [userData, setUserData] = useState([]);

  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);

  const fetchUserData = async () => {
    const resp = await fetch("https://dummyjson.com/users");
    const data = await resp.json();

    setUserData(data?.users);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSearchField = (e) => {
    const inputValue = e.target.value.toLowerCase();

    setSearchInputValue(inputValue);

    const filterValue = userData.filter((user) =>
      user.firstName.toLowerCase().includes(inputValue)
    );

    setFilteredValue(filterValue);
  };

  const handleFilteredSearch = (e) => {
    console.log(e.target.innerText);
    setSearchInputValue(e.target.innerText);
    setFilteredValue([]);
  };
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="search User"
        onChange={handleSearchField}
        value={searchInputValue}
      />

      <div>
        {filteredValue && (
          <div>
            <ul>
              {filteredValue.map((user) => (
                <li onClick={handleFilteredSearch} key={user.id}>
                  {user.firstName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
