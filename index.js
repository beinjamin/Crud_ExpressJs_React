import express from "express";
import bordyParser from "bordy-parser";
import cors from "cors";


const app = express();
const port = 3000;

app,use(bordyParser.json());
app,use(cors());


