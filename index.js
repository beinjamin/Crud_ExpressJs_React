import express from "express";
import bordyParser from "bordy-parser";
import cors from "cors";


const app = express();
const port = 3000;

app,use(bordyParser.json());
app,use(cors());

app,get("/",(req,res)=> res,send ("Hello From Express"));
app,listen (port , () => console.log ('server is listening on port: http://localhost:${port}')

);
