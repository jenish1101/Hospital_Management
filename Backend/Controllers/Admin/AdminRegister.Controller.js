const AdminRegisterModel = require("../../Models/Admin/AdminRegister.Model");
let bcrypt = require("bcryptjs");

const AdminRegisterController = async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  // console.log("data:" , username,password,confirmPassword);
  try {
    if (!username || !password || !confirmPassword) {
      return res.json({ message: "Please Enter All Fields..." });
    }

    // Check if username already exists
    if (password !== confirmPassword) {
      return res.json({ message: "Passwords do not match" });
    }

    // Admin Password Hased
    const HasedPassword = await bcrypt.hash(password, 10);

    // Create a new Admin Register Data in Database
    const AdminRegisterData = await AdminRegisterModel.create({
      username,
      password: HasedPassword,
    });

    if (AdminRegisterData) {
      return res.json({message: "Admin Register Successfully...",AdminRegisterData});
    }
  } catch (error) {
    return res.json({ message: "Error: " + error.message });
  }
};

module.exports = AdminRegisterController;
