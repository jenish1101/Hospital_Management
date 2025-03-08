const AppoinmentsModel = require("../../../Backend/Models/Appoinment.Modal");

const AppoinmentController = async(req,res)=>{
    const AppoinmentData = await AppoinmentsModel.find({});
    // console.log(AppoinmentData);
    return res.json({message:"Appoinments Data...", AppoinmentData});
}

module.exports = AppoinmentController;