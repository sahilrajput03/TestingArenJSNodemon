const express = require("express");
const app = express();
app.use(express.json());

let persons = [
  { name: "Nirmal Patel", number: "909-112-3134", id: 1 },
  { name: "Dan Abramov", number: "892-121231", id: 2 },
  { name: "Ryan Folrence", number: "912-341-1231", id: 3 },
  { name: "Joshua", number: "123-141-5131", id: 4 },
  { name: "Lil Wayne", number: "413-313-4134", id: 5 },
];

app.get("/", (req, res) => {
  res.send("<h1>PhoneBook</h1>");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  let time = new Date();

  res.send(
    `<div><p>Phonebook has info for ${persons.length} people.<p> ${time}</div>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

const gernerateId = () => {
  const id = Math.floor(Math.random() * 1000000);
  return id;
};
app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (body.name === "" && body.number === "") {
    return res.status(400).json({
      error: "name or phone number is missing",
    });
  }
  if (!body.content) {
    return res.status(400).json({
      error: "Content missing",
    });
  }
  const person = {
    name: body.content,
    number: Math.floor(Math.random() * 1000000000),
    id: gernerateId(),
  };

  persons = persons.concat(person);

  res.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}.....`);
});
