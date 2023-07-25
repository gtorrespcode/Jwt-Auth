import mongoose from "mongoose";
import { dbUri } from "../config/config.js";

const connecToDatabase = async () => {
  try {
    console.log("Waiting for connections");
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
};

export default connecToDatabase;
