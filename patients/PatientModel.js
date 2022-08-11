const mongoose = require("mongoose");
const PatientSchema = mongoose.Schema({
  name: String,
  lastName: String,
  tel: String,
  address: String,
  age: String,
  total:Number,
  service: [],
  signature: String,
  type:String,
  doctorName:String,
  doctorID:String,
  doctorPay:Boolean,
  role: {
    type: String,
    default: "patient",
  },
  date: String,
});
const PatientModel = mongoose.model("PatientModel", PatientSchema);
module.exports = PatientModel;
