const ClientMessageModal = require("../../../Backend/Models/Messages.Modal");

// For Get/Find Client Message 
const ClientMessagesController = async(req,res)=>{
    const ClientMessageData = await ClientMessageModal.find();
    // console.log(respond);
    return res.json({message:"ClientMessages Send...",ClientMessageData})
    
}


// For Post/send Clietn Message Reply 
const ReplyToClientMessageController = async (req, res) => {
    const { id, replyMessage } = req.body;
  
    console.log(id, replyMessage);
    
    if (!replyMessage) {
      return res.status(400).json({ error: "Reply message is required." });
    }
  
    try {
      const message = await ClientMessageModal.findById(id);
      if (!message) {
        return res.status(404).json({ error: "Message not found." });
      }
  
      // Update the reply field
      message.reply = replyMessage;
      await message.save();
  
      return res.json({ message: "Reply Sent Successfully", updatedMessage: message });
    } 
    catch (error) {
      console.error("Error processing reply:", error);
      return res.status(500).json({ error: "Server Error. Failed to send reply." });
    }
  };
  


module.exports = {
    ClientMessagesController,ReplyToClientMessageController
};