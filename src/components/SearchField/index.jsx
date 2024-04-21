import { useEffect, useState } from "react";

export default function SearchUser() {
  // State to hold the user data fetched from the API
  const [userData, setUserData] = useState([]);
  // State to indicate if the data is loading
  const [loading, setLoading] = useState(false);
  // State to hold any error that occurs during the fetch
  const [error, setError] = useState(null);
  // State to hold the search input value
  const [searchInputValue, setSearchInputValue] = useState("");
  // State to hold the filtered user data based on the search input
  const [filteredValue, setFilteredValue] = useState([]);
  // State to control the visibility of user list
  const [showUsers, setShowUsers] = useState(false);

  // Function to fetch user data from the API
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://dummyjson.com/users");
      const data = await resp.json();
      // If data is fetched successfully, update the userData state
      setUserData(data?.users);
      setLoading(false);
    } catch (error) {
      // If an error occurs during fetch, update the error state
      setError(error);
      setLoading(false);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to handle change in the search input
  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    // Update the search input value state
    setSearchInputValue(inputValue);
    // Filter the user data based on the search input
    const filterValue = userData.filter((user) =>
      user.firstName.toLowerCase().includes(inputValue)
    );
    // Update the filteredValue state
    setFilteredValue(filterValue);
    // Show the user list if there is a search input value
    setShowUsers(inputValue !== "");
  };

  return (
    <div className="searched-container">
      <input
        type="text"
        value={searchInputValue}
        onChange={handleChange}
        placeholder="Search User..."
      />
      {/* Conditionally render the user list based on showUsers state */}
      {showUsers && (
        <ul>
          {/* Map through the filtered user data and render list items */}
          {filteredValue.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
