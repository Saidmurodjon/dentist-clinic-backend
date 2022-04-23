
async function PostAdmin(req, res) {
  try {
  if(req.body.login=="admin"&&req.body.password=="admin"){

    return res.status(200).send("admin");
  }
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  PostAdmin,
};
