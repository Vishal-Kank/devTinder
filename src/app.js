const express = require("express");

const PORT = 5000;
const app = express();

app.get("/user", (req, res) => {
  res.send({
    firstName: "Vishal",
    lastName: "Kank",
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("New user added...");
});

app.delete("/user", (req, res) => {
  console.log("Deleted the user....");
  res.send("User deleted...");
});

app.use("/about", (req, res) => {
  res.send("About Page");
});

app.use("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log("node server started on port:", PORT);
});
