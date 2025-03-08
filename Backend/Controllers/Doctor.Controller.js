const DoctorModel = require("../Models/Doctors.Modal");

const DoctoController = async(req,res)=>{
    
    try {
        DoctorData  = await DoctorModel.find({});
        return res.json({message:"Doctor Data...", DoctorData})
    } 
    catch (error) {
        return res.json({message:"Error", error});
    }
}

module.exports = DoctoController