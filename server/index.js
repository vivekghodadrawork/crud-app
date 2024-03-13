import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";



const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT  ;

const URL = process.env.MONGOURL  ;

mongoose.connect(URL).then(()=>{
  
    console.log("success------------------------------------");


    app.listen(PORT,()=>{
       // if (err) return console.log(err);
    console.log("Listening at http://localhost:%s", PORT);

    })

}).catch(error=>console.log(error));


app.use("/api",route);




