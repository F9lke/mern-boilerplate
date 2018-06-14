const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./server/routes/api/users.routes");
const groups = require("./server/routes/api/groups.routes");
const chat = require("./server/routes/api/chat.routes");

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") console.log("production");

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected."))
    .catch(err => console.log(err));

// Activate Routes
app.use("/api/users", users);
app.use("/api/groups", groups);
app.use("/api/chat", chat);

app.listen(port, () => console.log(`Server running on port ${port}`));
