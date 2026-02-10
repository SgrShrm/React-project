import cors from "cors"

import express from "express"
import checkDBconnection from "./connections/database";

checkDBconnection();
const app = express()

// Global middlewares
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("welcome");
})

app.listen(3000, () => {
    console.log("server started");
});