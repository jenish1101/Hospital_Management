const DoctorsModel = require("../../../Backend/Models/Doctors.Modal");

// For Fetch Doctor Details
const DoctorsController = async (req, res) => {
  const doctorData = await DoctorsModel.find({});
  return res.json({ message: "Doctors", doctorData });
};

// For Add Doctors Details
const AddDoctorDetailsController = async (req, res) => {
  const { name, surname, age, gender, specialty } = req.body;
  
  const imagePath = req.file ? `/Images/${req.file.filename}` : null;

  try {

    // if(!name ||!surname ||!age ||!gender ||!specialty ||!imagePath){
    //     return res.json({message:"Please enter All Fields..."});
    // }

    const DoctorsData = await DoctorsModel.create({
      name,
      surname,
      age,
      gender,
      specialty,
      image: imagePath,
    });

    if (DoctorsData) {
      return res.json({ message: "Doctor Add Successfully...", DoctorsData });
    }else{
        return res.json({ message: "Doctor Add Failed..." });
    }
  } 
  catch (error) {
    return res.json({ message: "Error: " + error.message });
  }
};


// For Update Doctor Details
  const UpdateDoctorDetailsController=async(req,res)=>{
    const { name, surname, age, gender, specialty } = req.body;
      const imagePath = req.file ? `/Images/${req.file.filename}` : null;

      try {
          const updatedDoctor = await DoctorsModel.findByIdAndUpdate(
              req.params.id,
              { name, surname, age, gender, specialty, ...(imagePath && { image: imagePath }) },
              { new: true }
          );

          if (!updatedDoctor) return res.status(404).json({ message: "Doctor not found" });

          return res.json({ message: "Doctor updated successfully", updatedDoctor });
      } 
      catch (error) {
          return res.status(500).json({ message: "Error updating doctor: " + error.message });
      }
  }

const DeleteDoctorController=async(req,res)=>{
  try {
    const deletedDoctor = await DoctorsModel.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) return res.status(404).json({ message: "Doctor not found" });

    return res.json({ message: "Doctor deleted successfully" });
  } 
  catch (error) {
    return res.status(500).json({ message: "Error deleting doctor: " + error.message });
}
}


module.exports = {
  DoctorsController,
  AddDoctorDetailsController,
  UpdateDoctorDetailsController,
  DeleteDoctorController,
};
