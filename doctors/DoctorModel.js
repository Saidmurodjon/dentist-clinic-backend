const mongoose = require("mongoose");
const DoctorSchema = mongoose.Schema({
  name: String,
  lastName: String,
  tel: String,
  address: String,
  brithday: String,
  login:String,
  password:String,
  age:String,
  type:String,
  role: {
    type: String,
    default: "doctor",
  },
});
const DoctorModel = mongoose.model("DoctorModel", DoctorSchema);
module.exports = DoctorModel;
