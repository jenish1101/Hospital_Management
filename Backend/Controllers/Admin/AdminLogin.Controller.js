const AdminRegisteModel = require("../../../Backend/Models/Admin/AdminRegister.Model.js");
let bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminLoginContoller = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.json({ message: "Please enter username and password" });
    }

    // check if username exists in database  (if not exists, return error message)
    const username_Exist = await AdminRegisteModel.findOne({ username });
    if (!username_Exist) {
      return res.json({ message: "Username not found" });
    }

    // compare password with hashed password from database
    const hasedpassword = await bcrypt.compare(
      password,
      username_Exist.password
    );
    if (!hasedpassword) {
      return res.json({ message: "Password not valid" });
    }

    const token = jwt.sign(
      { id: username_Exist._id, username: username_Exist.username },
      process.env.JWT_SECRET
    );
    res.cookie("AdminToken", token);
    // console.log("Admin token:" , token);
    

    return res.json({ message: "Admin Login successfully...",token });
  } catch (error) {
    return res.json({ message: "Error: " + error.message });
  }
};

module.exports = AdminLoginContoller;
