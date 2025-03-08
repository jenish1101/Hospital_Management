const RegistrationModal = require("../Models/Registration.Modal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const LoginController = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  // console.log(email, password, confirmPassword);

  try {
    if (!email || !password || !confirmPassword) {
      return res.json({ message: "Please Enter All Fields..." });
    } else if (password != confirmPassword) {
      return res.json({
        message: "Password and Confirm Password Should be Same...",
      });
    }

    const Email_Exist = await RegistrationModal.findOne({ email });
    // Check User Exist Or Not By Email
    if (!Email_Exist) {
      return res.json({ message: "Password Or Email Invalid..." });
    }

    // password validate
    const MatchPassword = await bcrypt.compare(password, Email_Exist.password);
    if (!MatchPassword) {
      return res.json({ message: "Password Or Email Invalid..." });
    }

    const token = jwt.sign(
      { id: Email_Exist._id, email: Email_Exist.email },
      process.env.JWT_SECRET
    );
    res.cookie("ClientToken", token); //(Not Compulsary If You Used Context api for set and remove Jwt Toke In Cookies).
    // console.log("Token: " + token);

    return res.json({ message: "Login Successfully..." , token});
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports = LoginController;
