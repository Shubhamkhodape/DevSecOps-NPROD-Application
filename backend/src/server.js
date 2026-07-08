require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");

async function startServer() {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startServer();