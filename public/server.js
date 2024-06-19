const express = require("express");
const path = require("path");

// Define PORT
const PORT = process.env.PORT || 8080;

// Set app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve files
app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(PORT, () => console.log(`Running on port http://localhost:${PORT}`));
