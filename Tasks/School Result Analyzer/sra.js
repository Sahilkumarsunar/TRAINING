let students = [
  "aarav",
  "vivaan",
  "aditya",
  "vihaan",
  "arjun",
  "sai",
  "reyansh",
  "krishna",
  "ishaan",
  "shaurya",
  "atharv",
  "kabir",
  "rudra",
  "dev",
  "aryan",
  "kunal",
  "ananya",
  "diya",
  "myra",
  "sara",
  "aadhya",
  "pari",
  "ira",
  "navya",
  "meera",
  "riya",
  "saanvi",
  "anika",
  "ishita",
  "kavya",
  "sneha",
  "priya",
  "tanvi",
  "khushi",
  "muskan",
  "nisha",
  "simran",
  "pooja",
  "neha",
  "aditi",
];

let marks = [
  78, 85, 92, 67, 74, 88, 91, 69, 83, 76, 95, 72, 81, 64, 89, 73, 90, 84, 77,
  68, 93, 71, 86, 79, 82, 75, 94, 70, 87, 80, 66, 96, 63, 98, 72, 85, 88, 91,
  74, 99,
];

const result = document.querySelector(".result");

function IndexOfStd() {
  const searchedStd = document.getElementById("indexOfStudent").value;
  if (searchedStd === "") {
    result.innerHTML = `
    <h2>Feild can't be empty</h2>
    `;
  } else {
    const stdIndex = students.indexOf(searchedStd);
    if (stdIndex == -1) {
      result.innerHTML = `
    <h2>Student not found</h2>
    `;
    } else {
      result.innerHTML = `
    <h2>index of student "${searchedStd}" : ${stdIndex}</h2>
    `;
    }
  }
}

function LastIndexOfStudentFcn() {
  const searchedStd = document.getElementById("LastIndexOfStudent").value;

  if (searchedStd === "") {
    result.innerHTML = `
    <h2>Feild can't be empty</h2>
    `;
  } else {
    const stdLastIndex = students.lastIndexOf(searchedStd);
    if (stdLastIndex == -1) {
      result.innerHTML = `
    <h2>Student not found</h2>
    `;
    } else {
      result.innerHTML = `
    <h2>Last index of student "${searchedStd}" : ${stdLastIndex}</h2>`;
    }
  }
}

function enrolledFcn() {
  const searchedStd = document.getElementById("enrolled").value;

  if (searchedStd === "") {
    result.innerHTML = `
    <h2>Feild can't be empty</h2>
    `;
  } else {
    const enrolled = students.includes(searchedStd);
    result.innerHTML = `
    <h2>Is student "${searchedStd}" enrolled : ${enrolled}</h2>`;
  }
}
function findStdPassFcn() {
  const searchedStd = document.getElementById("findStdPass").value;
  if (searchedStd === "") {
    result.innerHTML = `
    <h2>Feild can't be empty</h2>
    `;
  } else {
    const findIfPass = marks.find((x) => x > searchedStd);
    const findIfPassIndex = marks.findIndex((x) => x > searchedStd);
    result.innerHTML = `
    <h2>First student marks > ${searchedStd} is : ${findIfPass}</h2>
    <h2>index is: > ${searchedStd} is : ${findIfPassIndex}</h2>`;
  }
}

function lastStdPassFcn(){
    const findIfPass = marks.findLast((x) => x > 50);
    const findIfPassIndex = marks.findLastIndex((x) => x > 50);
    result.innerHTML = `
    <h2>Last student marks > 50 is : ${findIfPass}</h2>
    <h2>Index is : ${findIfPassIndex}</h2>`;
  
}

const indexOfStudent = document.getElementById("indexOfStudentBtn");
indexOfStudent.addEventListener("click", IndexOfStd);

const LastIndexOfStudentBtn = document.getElementById("LastIndexOfStudentBtn");
LastIndexOfStudentBtn.addEventListener("click", LastIndexOfStudentFcn);

const enrolledBtn = document.getElementById("enrolledBtn");
enrolledBtn.addEventListener("click", enrolledFcn);

const findStdPassBtn = document.getElementById("findStdPassBtn");
findStdPassBtn.addEventListener("click", findStdPassFcn);

const lastStdPassBtn = document.getElementById("lastStdPassBtn");
lastStdPassBtn.addEventListener("click", lastStdPassFcn);
