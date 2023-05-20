import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(undefined);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const url = "https://api.example.com/users";
      const response = await fetch(url);
      const users = await response.json();

      setUsers(users);
      setIsLoading(false);
    }

    fetchUsers();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.firstName}</strong> {user.lastName}
          </li>
        ))}
      </ul>
    );
  }
};

export default UsersList;