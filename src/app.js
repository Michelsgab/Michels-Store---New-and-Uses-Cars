import express from "express";

const app = express();

app.use(express.json());

const cars = [
  { id: 1, make: "Audi", model: "TTRS", year: 2022, color: "Yellow" },
];

app.get("/", (req, res) => {
  res.status(200).send("Your favorite cars store");
});

app.get("/cars", (req, res) => {
  res.status(200).json(cars);
});

app.get("/cars/:id", (req, res) => {
  let index = searchCar(req.params.id);
  res.json(cars[index]);
});

app.post("/cars", (req, res) => {
  cars.push(req.body);
  res.status(201).send("New Car Upload Succesfully!");
});

app.put("/cars/:id", (req, res) => {
  let index = searchCar(req.params.id);
  cars[index].make = req.body.make;
  res.json(cars);
});

app.delete("/cars/:id", (req, res) => {
    let {id} = req.params;
    let index = searchCar(id);
    cars.splice(index, 1);
    res.json(`Car number ${id} has been deleted`);
})

function searchCar(id) {
  return cars.findIndex((car) => car.id == id);
}

export default app;
