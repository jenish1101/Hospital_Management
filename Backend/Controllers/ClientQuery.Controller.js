const ClientMessageModel = require("../Models/Messages.Modal");

const ClientQueryController = async (req, res) => {
  try {
    // Get logged in user's email address from JWT token in req.user object
    const LoginUser = req.user.email;

    // Fetch Client Messages based on logged in user's email address
    const ClientMessage = await ClientMessageModel.find({ email: LoginUser });

    return res.json({ message: "Client Message...", ClientMessage, LoginUser });
  } 
  catch (error) {
    console.error("Error: ", error);
  }
};

module.exports = ClientQueryController;
