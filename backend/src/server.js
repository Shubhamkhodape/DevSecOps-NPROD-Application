require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");

/*
|--------------------------------------------------------------------------
| Connect Database
|--------------------------------------------------------------------------
*/

connectDB();

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("=================================");
    console.log(" DevSecOps Notes API Started");
    console.log("=================================");
    console.log(` Environment : ${process.env.NODE_ENV || "development"}`);
    console.log(` Port        : ${PORT}`);
    console.log("=================================");
});