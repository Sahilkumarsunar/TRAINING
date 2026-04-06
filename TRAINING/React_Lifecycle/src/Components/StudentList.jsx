import React from "react";

const StudentList = ({ allStudents }) => {
  return (
    <div>
      <h3>THESE ARE ALL THE STUDEENTS</h3>
      {allStudents.map((name, index) => (
        <p>
          {index + 1}:{name}
        </p>
      ))}
    </div>
  );
};

export default StudentList;
