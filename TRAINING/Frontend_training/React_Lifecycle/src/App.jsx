import React, { useState } from "react";
import Home from "./Components/Home.jsx";
import AddStudent from "./Components/AddStudent.jsx";
import StudentList from "./Components/StudentList.jsx";
const App = () => {
  const [student, setStudent] = useState(["Tony", "David"]);
  function addStudent(name) {
    console.log("NEW STUDENT ADDED"); 
    setStudent([...student, name]);
  }
  return (
    <div>
      <h2>This is child to child prop passing</h2>
      <AddStudent AddStd={addStudent} />
      <StudentList allStudents={student}/>
    </div>
  );
};

export default App;
