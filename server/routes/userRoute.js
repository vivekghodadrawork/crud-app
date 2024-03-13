import express from 'express';
import { create, getAll, getOne, update, userdelete } from '../controller/userController.js';


const route = express.Router();

route.post("/create",create);
route.get("/getall",getAll);

route.get("/getone/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",userdelete);

export default route;