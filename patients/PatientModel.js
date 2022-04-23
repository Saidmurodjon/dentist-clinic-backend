const mongoose = require("mongoose");
const PatientSchema = mongoose.Schema({
  name: String,
  lastName: String,
  tel: String,
  address: String,
  age: String,
  date: String,
  service: [],
  signature: String,
  type:String,
  doctorName:String,
  role: {
    type: String,
    default: "patient",
  },
});
const PatientModel = mongoose.model("PatientModel", PatientSchema);
module.exports = PatientModel;
