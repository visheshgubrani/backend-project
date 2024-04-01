import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";


dotenv.config({
    path: './env'
})

// listening for errors before app listen
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(process.env.PORT);
        
    })})
.catch((err) => {
    console.log(err);
})