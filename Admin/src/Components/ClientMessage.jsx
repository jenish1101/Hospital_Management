import { useState, useEffect } from "react";
import axios from "axios";
import "./ClientMessage.css";
import { useNavigate } from "react-router-dom";

const ClientMessage = () => {
  const [messages, setMessages] = useState([]);
  const [replies, setReplies] = useState({}); // Store replies for each message

  const navigate = useNavigate();

  // Fetch client messages from backend
  const ClientMessageData = async () => {
    try {
      const response = await axios.get("/api/admin/client-message");
      setMessages(response.data.ClientMessageData);
    } catch (error) {
      console.error("Error fetching messages:", error);
      navigate("/login");
      setTimeout(() => {
        alert("Login To Proceed...");
      }, 1000);
    }
  };

  useEffect(() => {
    ClientMessageData();
  }, []);

  // Handle textarea change
  const handleReplyChange = (id, text) => {
    setReplies((prevReplies) => ({
      ...prevReplies,
      [id]: text, // Store reply text for specific message ID
    }));
  };

  // Handle sending reply to backend
  const handleSendReply = async (id) => {
    // Log replies to verify data before sending
    // console.log("Replies: ", replies);
    if (!replies[id]) {
      alert("Please enter a reply before sending.");
      return;
    }

    try {
      const response = await axios.post(`/api/admin/client-message/reply`, {
        replyMessage: replies[id], // Send reply message
        id: id, // Send the message ID
      });

      if (response) {
        alert(response.data.message);
        ClientMessageData(); //Fetch Client Data When Admin Reply Client Message
        // Optionally clear the reply after sending
        // setReplies((prevReplies) => ({ ...prevReplies, [id]: "" }));
      }
    }
    catch (error) {
      console.error("Error sending reply:", error);
      alert("Failed to send reply. Please try again.");
    }
  };

  return (
    <div >
      <h1 className="client-messages-title">Client Messages</h1>
      <div className="client-messages-container">
        {messages.length === 0 && <p>No messages found.</p>}
        {messages.map((msg) => (
          <div key={msg._id} className="message-card">
            <h3>
              {msg.firstName} {msg.lastName}
            </h3>
            {/* <p><strong>ID:</strong> {msg._id}</p> */}
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Phone:</strong> {msg.phone}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <p><strong>Answer:</strong> {msg.reply}</p>

{/* Display reply input field only when reply is not sent */}
            {
              !msg.reply && (
                <>
                  {/* Textarea for Reply */}
                  <textarea
                    placeholder="Write your reply here..."
                    className="reply-textarea"
                    value={replies[msg._id] || ""} // Display the reply from the state
                    onChange={(e) => handleReplyChange(msg._id, e.target.value)} // Handle input change
                  ></textarea>

                  <button className="send-reply-btn " onClick={() => handleSendReply(msg._id)}>Send Reply</button>
                </>
              )
            }

          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMessage;
