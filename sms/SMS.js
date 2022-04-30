async function SMS(req, res) {
  try {
    // const doctor = await DoctorModel.find({});
    return res.status(200).send(true);
  } catch (err) {
    res.status(400).send(err);
  }
}
