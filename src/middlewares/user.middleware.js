import mongoose from "mongoose";
import userService from "../services/user.service.js";

export const idValidation = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).send({ message: `The ID: ${id} is not valid` });
    }

    req.id = id;

    next();
}

export const userValidation = async (req, res, next) => {
    const user = await userService.findByIdService(req.id);

    if (!user){
    res.status(400).send({ message: "User not found" });

    }

    req.user = user;

    next();

}