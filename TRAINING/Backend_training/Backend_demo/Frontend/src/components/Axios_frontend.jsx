import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios_frontend = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Server Demo</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.id}:{user.name}
          </h3>
          <h3>{user.rollno}</h3>
          <h3>{user.age}</h3>
          <h3>{user.course}</h3>
        </div>
      ))}
    </div>
  );
};

export default Axios_frontend;
