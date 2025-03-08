const MessageModal = require("../Models/Messages.Modal");

const MessageController = async (req,res) => {

    const {firstName, lastName, email, phone, message} = req.body;

    if(!firstName || !lastName || !email ||!phone ||!message) {
        return res.status(400).send({error: "All fields are required..."});
    }
    
    const UserMessage = await MessageModal.create({firstName, lastName, email, phone, message});
    if(UserMessage){
        // console.log("Data:" , firstName, lastName, email, phone, message);
        return res.send({message:"Form Submitted...", UserMessage});
    }


};

module.exports = MessageController;