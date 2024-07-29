const express = require("express");
const app = express();
const path = require("path");

const PORT = require("./config/config.js");

const urlLogger = require("./middlewares/urlLogger");
const errorHandler = require("./middlewares/errorHandler");
const authenticateToken = require("./middlewares/verifyUser");

//TODO: Middlewares
app.use(express.json());

//TODO: Custom middlewares
app.use(urlLogger);

//TODO: Static files
app.use(express.static("public"));

//TODO: Routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));

//If no relevent routs found this will execute
app.all("*", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(authenticateToken); //TODO: for authenticate JWT tokens
app.get("/secure", (req, res) => {
  res.status(200).send("accessed secret files");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
