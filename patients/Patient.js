const PatientModel = require("./PatientModel");
async function GetPatient(req, res) {
  try {
    const patients = await PatientModel.find({});
    return res.status(200).send(patients);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function AddPatient(req, res) {
  try {
    const category = new PatientModel({
      name: req.body.name,
      lastName: req.body.lastName,
      tel: req.body.tel,
      address: req.body.address,
      age: req.body.age,
      service: req.body.service,
      signature: req.body.signature,
      type: req.body.type,
      date: req.body.date,
      doctorName: req.body.doctorName,
    });

    category.save((err, category) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          errors: err.meesage,
        });
      }
      return res.json({
        message: "Created category successfully",
        category,
      });
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function UpdatePatient(req, res) {
  try {
    let userId = req.params.id;
    let category = {
      name: req.body.name,
      lastName: req.body.lastName,
      tel: req.body.tel,
      address: req.body.address,
      age: req.body.age,
      service: req.body.service,
      signature: req.body.signature,
      type: req.body.type,
      date: req.body.date,
    };
    let result = await PatientModel.findByIdAndUpdate(userId, category);

    return res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
}
async function DeletePatient(req, res) {
  try {
    let userId = req.params.id;
    let result = await PatientModel.findByIdAndDelete(userId);

    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = {
  GetPatient,
  AddPatient,
  UpdatePatient,
  DeletePatient
};
