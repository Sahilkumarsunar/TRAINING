const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
// fake data
const user = {
  name: "sahil",
  rollno: 2232899,
  course: "full stack",
};
app.get("/api/user", (req, res) => {
  console.log("req recieved form the frontend");
  res.json(user);
});
app.listen(PORT, () => {
  console.log("listening at PORT:", PORT);
});
