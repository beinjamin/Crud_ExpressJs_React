import express from "express";
import {getUsers , createUser} from "../controllers/users";

const router = express.Router();

route.get("/users", getUsers);
route.post("/user", createUser);