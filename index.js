import express from "express";
import mongoose from "mongoose";

const app = express()

mongoose.connect("mongodb://localhost:27017/mydb")

const serverListening = () => {
    console.log("Listening to port 5000")
}
app.listen(5000, serverListening)

// (async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/mydb")
//         console.log("DB Connected")

//         const serverListening = () => {
//             console.log("Listening to port 5000")
//         }
//         app.listen(5000, serverListening)
//     }
//     catch (err) {
//         console.log(err)
//         throw err
//     }
// })()