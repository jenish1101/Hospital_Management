const mongoose = require("mongoose");

const RegistrationSchema = mongoose.Schema({
  firstName:{
    type: 'string',
  },
  lastName:{
    type: 'string',
  },
  email:{
    type: 'string',
    // unique: true,
  },
  phone:{
    type: 'number',
    // unique: true,
  },
  gender:{
    type: 'string',
  },
  password:{
    type: 'string',
  },
});

module.exports = mongoose.model("RegistrationSchema", RegistrationSchema);
