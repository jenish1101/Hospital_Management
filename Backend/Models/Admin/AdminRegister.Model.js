const mongoose = require("mongoose");

const AdminRegisterSchema = mongoose.Schema({
  username:{
    type: 'string',
  },
  password:{
    type: 'string',
  },
  confirmPassword:{
    type: 'string',
  }
},{ timestamps: true });

module.exports = mongoose.model("AdminRegister", AdminRegisterSchema);
