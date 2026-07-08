const mongoose = require("mongoose");

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        console.warn("MONGO_URI is not set. Skipping MongoDB connection for now.");
        return;
    }

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");
        console.log(`Database Host: ${connection.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Failed");
        console.error(error.message);
    }
};

module.exports = connectDB;
