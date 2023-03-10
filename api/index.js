import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";



const app=express();

app.use(express.json());
app.use("/api/posts",postRoutes)
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)

app.get("/test",(req,res)=>{
    res.json("It works")
});


app.listen(8000,()=>{
    console.log("Connected");
})