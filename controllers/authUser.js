const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function genAccessToken(user) {
  return jwt.sign({ username: user }, process.env.ACCESS_TOKEN, {
    expiresIn: "30s",
  });
}

const handleAuth = async (req, res) => {
  //get data and verify it
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Both username and password are require" });

  //TODO: $$$$$$$$$$$$$$$$$$$$$$$$$  look into db for that user and veryfiy hashed password  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  try {
    //$2b$10$zYEnutVOnkRFaxEMaRE0keaWpX3jfS6AGoeNPpLlz2KtyT/QuAEHe
    //subhodip123
    const plainPass = await bcrypt.compare(
      pwd,
      "$2b$10$zYEnutVOnkRFaxEMaRE0keaWpX3jfS6AGoeNPpLlz2KtyT/QuAEHe"
    );

    //TODO: send green signal
    if (plainPass) {
      //TODO: creating token:
      const token = genAccessToken(user);
      return res.status(201).json({ token });
    }

    res.status(400).json({ message: "user unauthorized" });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
    console.log(err.message);
  }
};

module.exports = handleAuth;
