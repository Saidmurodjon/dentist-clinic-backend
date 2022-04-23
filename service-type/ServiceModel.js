const mongoose = require("mongoose");
const ServiceSchema = mongoose.Schema({
  name: String,
  cost: Number,
  date: String,
});
const ServiceModel = mongoose.model("ServiceModel", ServiceSchema);
module.exports = ServiceModel;
