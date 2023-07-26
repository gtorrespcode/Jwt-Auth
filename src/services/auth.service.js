import User from "../models/User.js";
import  jwt  from "jsonwebtoken";
import { jwtSecret } from "../config/config.js";

export const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

export const createToken = (id) => jwt.sign({id: id}, jwtSecret, {expiresIn: 51})

