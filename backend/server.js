// 1️⃣ Import libraries
const express = require("express");
const mongoose = require("mongoose");  // <- this line was missing
const cors = require("cors");

// 2️⃣ Create app
const app = express();
app.use(cors());
app.use(express.json());

// 3️⃣ Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://mernuser:mernpass123@cluster0.jawavsj.mongodb.net/"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// 4️⃣ Routes (example)
app.use("/auth", require("./routes/auth"));
app.use("/todos", require("./routes/todos"));

// 5️⃣ Start server
app.listen(5000, () => console.log("Backend running on port 5000"));
