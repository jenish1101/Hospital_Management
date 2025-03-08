const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name:{
        type: 'string',
    },
    surname:{
        type: 'string',
    },
    age:{
        type: 'number',
    },
    gender:{
        type: 'string',
    },
    specialty:{
        type: 'string',
    },
    image:{
        type: 'string',
    }

})

module.exports = mongoose.model("Doctors",DoctorSchema)