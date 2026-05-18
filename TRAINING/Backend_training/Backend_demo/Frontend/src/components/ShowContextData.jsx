import React from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
const ShowContextData = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Data from the showContextData file </h1>
      {user ? (
        <>
          <h3>Name:{user.name}</h3>
          <h3>RollNo.:{user.rollno}</h3>
          <h3>Course:{user.course}</h3>
        </>
      ) : (
        <h3>no data recieved in the showContextData</h3>
      )}
    </div>
  );
};

export default ShowContextData;
