const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "User name and password are required" });

  //need to check for is user already exists or not and send response accordingly

  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //save to database (username and hashedpassword)

    res.status(201).json({ success: `user ${user} created succcessfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = handleNewUser;
