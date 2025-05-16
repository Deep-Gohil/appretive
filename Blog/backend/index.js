const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToDatabase = require("./config/db");
const userRouter = require("./routes/user.routes");
const blogRoutes = require("./routes/blog.routes");

const app = express();

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// routes

app.get("/",(req,res)=>{
    res.send("Default Route");
})

app.use("/api/users",userRouter);
app.use("/api/blogs",blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Listening on port",PORT);
    connectToDatabase();
})