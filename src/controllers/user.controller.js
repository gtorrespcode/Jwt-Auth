import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      res.status(400).send({ message: "Submit all the fields" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      res.status(400).send({ message: "User not found" });
    }

    res.send({
      message: `${user.username}, your account was created`,
      user: {
        id: user._id,
        name,
        username,
        email,
        password,
      },
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
try {
  const users = await userService.findAllService();

  if (!users || users.length === 0) {
    res.status(400).send({ message: "There are not users in this database" });

  }

  res.send(users);

} catch (err){
  res.status(400).send({ message: err.message });

}
}

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.findByIdService(id);

    if(!user){
      res.status(400).send({ message: "User not found" });

    }

    res.send(user);

  } catch(err){
    res.status(400).send({ message: err.message });

  }
}

export default { create, findAll, findById };
