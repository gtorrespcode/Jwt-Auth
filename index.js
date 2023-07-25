import express from "express";
import userRoute from "./src/routes/user.route.js"
import connecToDatabase from "./src/database/db.js";

const port = 3000;

const app = express();
connecToDatabase();
app.use(express.json());
app.use("/user", userRoute);



app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
})

