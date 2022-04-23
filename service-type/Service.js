const ServiceModel = require("./ServiceModel");

async function GetService(req, res) {
  try {
    const pupils = await ServiceModel.find({});
    return res.status(200).send(pupils);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function AddService(req, res) {
  try {
    const category = new ServiceModel({
      name: req.body.name,
      cost: req.body.cost,
      date: req.body.date,
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

async function UpdateService(req, res) {
  try {
    let userId = req.params.id;
    let category = {
      name: req.body.name,
      cost: req.body.cost,
      date: req.body.date,
    };
    let result = await ServiceModel.findByIdAndUpdate(userId, category);

    return res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function DeleteService(req, res) {
  try {
    let userId = req.params.id;
    let result = await Service.findByIdAndDelete(userId);

    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  GetService,
  AddService,
  UpdateService,
  DeleteService,
};
