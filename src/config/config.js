import dotenv from "dotenv";

dotenv.config();

const dbUri = process.env.DB_URI;
const jwtSecret = process.env.JWT_SECRET;

export { dbUri, jwtSecret };
