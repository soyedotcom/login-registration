import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

export default EmployeeModel;
