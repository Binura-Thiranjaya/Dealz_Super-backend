//Import Packages
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
//Initialize App
const app = express();
//Import DB
//import db from "./utils/dbConnect.js";

//Import Routes
import apiRouter from "./routes/index.js";

app.use(cors());//Allow Cross-Origin Requests
app.use(express.json());//Parse JSON bodies
app.use(bodyParser.json());//Parse URL-encoded bodies

 app.use("/dealz-super", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World !");
});//Default Route

export default app;