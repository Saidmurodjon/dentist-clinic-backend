const DoctorModel = require("./DoctorModel");

async function GetDoctor(req, res) {
  try {
    const doctor = await DoctorModel.find({});
    return res.status(200).send(doctor);
  } catch (err) {
    res.status(400).send(err);
  }
}

// async function CheckDoctor(req, res) {
//   try {
//     const doctor = await DoctorModel.find([]);
//  const foo=[doctor]
//     console.log( typeof doctor);
//     console.log(err);
//       for (let i = 0; i < doctor.length; i++) {
//         if (doctor[i].login===req.body.login && doctor[i].password===req.body.password) {
//           return res.status(200).send(doctor[i]);
//         }
        
//       }

//   } catch (err) {
//     res.status(400).send(err);
//   }
// }
async function AddDoctor(req, res) {
  try {
    const category = new DoctorModel({
      name: req.body.name,
      lastName: req.body.lastName,
      tel: req.body.tel,
      address: req.body.address,
      brithday: req.body.brithday,
      login: req.body.login,
      password: req.body.password,
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

async function UpdateDoctor(req, res) {
  try {
    let userId = req.params.id;
    let category = {
      name: req.body.name,
      lastName: req.body.lastName,
      tel: req.body.tel,
      address: req.body.address,
      brithday: req.body.brithday,
      login: req.body.login,
      password: req.body.password,
    };
    let result = await DoctorModel.findByIdAndUpdate(userId, category);

    return res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function DeleteDoctor(req, res) {
  try {
    let userId = req.params.id;
    let result = await DoctorModel.findByIdAndDelete(userId);

    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  GetDoctor,
  AddDoctor,
  UpdateDoctor,
  DeleteDoctor,
  // CheckDoctor,
};
