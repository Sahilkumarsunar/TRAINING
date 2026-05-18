import { useState, useEffect } from "react";
import { UserContext } from "./UserContext.jsx";
import React from "react";
import axios from "axios";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then((res) => {
        console.log("Api:response data recieved at UserProvider");
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function login() {
    console.log("user has logged in");
  }
  return (
    <div>
      <h1>API PROVIDING CONTEXT DATA FROM file : UserProvider</h1>
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    </div>
  );
};

export default UserProvider;
