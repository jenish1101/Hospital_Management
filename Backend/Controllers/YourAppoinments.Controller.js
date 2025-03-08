const AppoinmentModel = require("../Models/Appoinment.Modal");

const YourAppoinmentsController = async(req,res)=>{

    const getClientByEmail = req.user.email;
    const Yourappoinment = await AppoinmentModel.find({email: getClientByEmail});
    return res.json({message:"Your Appoinments",Yourappoinment});
};

module.exports = YourAppoinmentsController;