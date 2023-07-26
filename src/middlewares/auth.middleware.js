import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/config.js";
import userService from "../services/user.service.js";

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(400).send({ message: "Not allowed" });
    }

    const parts = authorization.split(" ");

    const [schema, token] = parts;

    if (parts.length !== 2) {
      res.status(400).send({ message: "Error in the authentication" });
    }

    if (schema !== "Bearer") {
      res.status(400).send({ message: "Error in the authentication" });
    }

    jwt.verify(token, jwtSecret, async (err, decoded) => {
      if (err) {
        res.status(400).send({ message: "Invalid token" });
      }

      const user = await userService.findByIdService(decoded.id);

      if (!user || !user.id) {
        return res.status(400).send({ message: "Invalid token" });
      }

      console.log("You are allowed");

      req.userId = user.id;
      return next();
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
