import express from "express";
import ErrorMiddleware from "./middleware/ErrorHandling.js";
const app = express();
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT ||  5000

app.use(express.json());

app.get("/", (req, res) => {
    const data = req.body;
    res.json("your name is : "+data.name);
})

app.post("/users/:id", (req, res) => { 
    try {
        const data = req.params.id;
        console.log(data);
        res.send("your id is : " + data);
    } catch (error) {
        next(error);
    }
});
app.use(ErrorMiddleware);

app.listen(port, function () {
    console.log("listening on port number: " + port);
})
