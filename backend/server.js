const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./routes/authRoutes")
const Books = require("./routes/bookRoutes")
const reviewRoutes = require('./routes/reviewRoutes'); // Import review routes

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res) => {
    res.send("hey")
})

app.use("/users", User);
app.use("/books", Books);
app.use('/reviews', reviewRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
