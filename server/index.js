const express = require("express");
var cors = require("cors");

const app = express();
const port = 8080;
app.use(cors());

//Get all the todo items
app.get("/", (req, res) => {
  res.json(true);
});

//Create a new todo item and return the ID to the client (body: todo-item) return id for todo item
app.post("/", (req, res) => {
  res.json(true);
});

//Update a exisitng todo item (param: id, body: todo-item) return sucess
app.put("/", (req, res) => {
  res.json(true);
});

//Delete a todo item (param: id)
app.delete("/", (req, res) => {
  res.json(true);
});

app.listen(port, () => {
  console.log(`CRUD experiment ${port}`);
});
