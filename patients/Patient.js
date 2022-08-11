const PatientModel = require("./PatientModel");
async function GetPatient(req, res) {
  try {
    const patients = await PatientModel.find({});
    return res.status(200).send(patients);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function PatientDay(req, res) {
  console.log(req.body);
  try {
    const ym = new Date().toISOString().slice(0,8)
    const m = new Date().getMonth();
    const d = new Date().toISOString().slice(8,10);
    const patients = await PatientModel.find({
      doctorID:req.body.id,
      date: {
        $gt: `${ym}${d}`,
        $lt: `${ym}${d*1 + 1}`,
      },
    });
    // console.log(`${ym}${d*1+1}`);
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
      doctorID:req.body.doctorID,
      doctorPay:false,
      total:0
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
      doctorID:req.body.doctorID,
      doctorPay:req.body.tasdiq,
      total:req.body.total,
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
  PatientDay,
  AddPatient,
  UpdatePatient,
  DeletePatient,
};
