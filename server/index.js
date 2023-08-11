const express = require("express");
var cors = require("cors");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ title: "This is some JSON data" });
});

app.get("/", (req, res) => {
  res.json([{ title: "This is some JSON data" }]);
});

app.post("/", (req, res) => {
  const { body } = req.body;
  res.json({ title: "Hello from POST", body });
});

app.put("/", (req, res) => {
  const { body } = req.body;
  res.json({ title: "Hello from PUT", body });
});

app.delete("/:id", (req, res) => {
  res.json({ title: "Delete", id });
});

app.listen(port, () => {
  console.log(`CRUD experiment ${port}`);
});
