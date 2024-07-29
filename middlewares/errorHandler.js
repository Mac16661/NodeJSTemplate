const logEvents = require("../controllers/logEvents");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  logEvents(err.message, "errorsLog.txt");
  res.status(500).send(err.message);
};

module.exports = errorHandler;
