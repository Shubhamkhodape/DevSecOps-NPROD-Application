const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");
const errorHandler = require("./middleware/errorHandler");
const morgan = require("morgan");
const app = express();

const healthRoutes = require("./routes/healthRoutes");
/*
|--------------------------------------------------------------------------
| Global Middlewares
|--------------------------------------------------------------------------
*/

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
module.exports = app;
app.use("/api/v1/notes", noteRoutes);
app.use("/health", healthRoutes);
app.use(errorHandler);
app.use(morgan("combined"));

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "DevSecOps Notes API Running 🚀"
    });
});

/*
|--------------------------------------------------------------------------
| Export App
|--------------------------------------------------------------------------
*/

module.exports = app;