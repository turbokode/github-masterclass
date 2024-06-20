import express from "express";

const server = express();

const users: Array<{ name: string; age: number }> = [
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  { name: "Nairo Mudumane", age: 28 },
];

server.get("/users", (req, res) => {
  return res.json(users);
});

server.listen(3000, () => console.log("server running"));
