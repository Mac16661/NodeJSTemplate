const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = async (message, logName) => {
  const date = Date.now();
  const logItem = `${date} \t ${message} \n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
