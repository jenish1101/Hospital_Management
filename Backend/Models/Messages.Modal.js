const mongoose  = require('mongoose');

const ClientMessage = new mongoose.Schema({
    firstName:{
        type: 'string',
    },
    lastName:{
        type: 'string',
    },
    email:{
        type: 'string',
    },
    phone:{
        type: 'number',
    },
    message:{
        type: 'string',
    },
    reply:{
        type: 'string',
        default: "",
    }
})

module.exports = mongoose.model('ClientMessage', ClientMessage);
