import React, { useState, useEffect } from "react";
import axios, { Axios, AxiosError } from "axios";

interface User {
  id: number;
  name: string;
  username: string;
}

const Fetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUsers(res.data);
        setIsLoading(false);
      } catch (err) {
        setError((err as AxiosError).message);
        setIsLoading(false);
      }

      return () => {
        controller.abort();
      };
    };
    fetchUsers();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Dinesh", username: "dineshbhandari2023" };
    setUsers([newUser, ...users]);

    axios
      .post(`https://jsonplaceholder.typicode.com/users/${newUser.id}`)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div className="text-center p-3">
      <p className="text-danger">{error}</p>
      {isLoading && <div className="spinner-border"></div>}

      <h1 className="border">Fetched Data</h1>
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}, {user.username}{" "}
            <button className="btn btn-secondary m-3">Update</button>
            <div
              className="btn btn-outline-danger m-3"
              onClick={() => {
                deleteUser(user);
              }}
            >
              Delete
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
