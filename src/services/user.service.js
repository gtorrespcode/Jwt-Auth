import User from "../models/User.js";

const createService = (body) => User.create(body);
const findAllService = () => User.find();
const findByIdService = (id) => User.findById({ _id: id });
const updateService = (id, name, username, email, password) =>
  User.findOneAndUpdate({ _id: id }, { id, name, username, email, password });

export default { createService, findAllService, findByIdService, updateService};
