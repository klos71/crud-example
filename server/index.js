const express = require("express");
var cors = require("cors");

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());

const items = [];

app.get("/", (req, res) => {
  res.json(items);
});

app.get("/:id", (req, res) => {
  const item = items.find((i) => i.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.post("/", (req, res) => {
  const { body } = req;
  const len = items.push({ id: items.length, body });
  res.json({ id: len - 1, body });
});

app.put("/:id", (req, res) => {
  const { body } = req;
  console.log(body, req.params.id);
  const index = items.findIndex((i) => i.id == req.params.id);

  if (index >= 0) {
    items[index].body = body;
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.delete("/:id", (req, res) => {
  const index = items.find((i) => i.id === req.params.id);
  items.splice(index, 1);
  res.json(items);
});

app.listen(port, () => {
  console.log(`CRUD experiment ${port}`);
});
