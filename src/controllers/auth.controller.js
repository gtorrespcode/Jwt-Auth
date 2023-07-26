import { loginService, createToken } from "../services/auth.service.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await loginService(email);

    if (!user){
        res.status(400).send({ message: "User not found" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword){
        res.status(400).send({ message: "User not found" });

    }

    const token = createToken(user.id);
    res.send({token});

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
