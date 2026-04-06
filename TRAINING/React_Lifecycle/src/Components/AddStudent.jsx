import React, { useState } from "react";

const AddStudent = ({ AddStd }) => {
  const [newStudent, setNewStudent] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter student name"
        onInput={(e) => setNewStudent(e.target.value)}
      />
      <button onClick={()=>AddStd(newStudent)}>Add student</button>
      </div>
  );
};

export default AddStudent;
