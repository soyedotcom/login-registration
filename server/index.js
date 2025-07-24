import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt, { hash } from "bcrypt";
import EmployeeModel from "./models/Employee.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (err) {
          res.json("The password is incorrect");
        }
        if (response) {
          res.json("Success");
        }
      });
    } else {
      res.json("Account not found");
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      EmployeeModel.create({ name, email, password: hash })
        .then((employees) => res.json(employees))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
});

app.listen(3030, () => {
  console.log("server is running");
});
