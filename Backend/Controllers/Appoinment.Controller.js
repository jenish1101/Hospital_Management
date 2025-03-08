const ApponinmentModal = require("../Models/Appoinment.Modal");

const AppointmentController = async (req, res) => {
  //  console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    phone,
    bloodGroup,
    dob,
    gender,
    appointmentDate,
    department,
    doctor,
    address,
  } = req.body;

  // console.log(
  //   firstName,
  //   lastName,
  //   email,
  //   phone,
  //   bloodGroup,
  //   dob,
  //   gender,
  //   appointmentDate,
  //   department,
  //   doctor,
  //   address
  // );

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !bloodGroup ||
    !dob ||
    !gender ||
    !appointmentDate ||
    !department ||
    !doctor ||
    !address
  ) {
    return res.send({ message: "Please Enter All Fields..." });
  } 

    const AppoinmentData = await ApponinmentModal.create({
      firstName,
      lastName,
      email,
      phone,
      bloodGroup,
      dob,
      gender,
      appointmentDate,
      department,
      doctor,
      address,
    });

    if(AppoinmentData){
      return res.send({ message: "Apponinment Book Successfully..." , AppoinmentData});
    }

};

module.exports = AppointmentController;
