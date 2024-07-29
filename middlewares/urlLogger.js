const logEvents = require("../controllers/logEvents");

const urlLogger = (req, res, next) => {
  console.log(Date.now(), `${req.headers.origin}`, `${req.url}`);
  logEvents(req.url, "urlLog.txt");
  next();
};

module.exports = urlLogger;
