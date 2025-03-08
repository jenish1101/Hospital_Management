const express = require('express');
const app = express();
const cors = require('cors');
// Middleware to parse JSON request body
app.use(express.json()); 
app.use(cors());
require('dotenv').config();

var cookieParser = require('cookie-parser')
app.use(cookieParser())

// Serve static files from the uploads folder
// app.use('/Images', express.static('public/Images'));
const path = require("path");
// Serve the images folder correctly
app.use("/Images", express.static(path.join(__dirname, "public/Images")));


//Routes
const ClientRouters = require("./Routers/ClientRoute");
const AdminRouters = require("./Routers/AdminRoutes");
app.use("/api/client", ClientRouters)
app.use("/api/admin", AdminRouters)


// app.post("/", (req, res)=>{
//     const {firstName, lastName, email, phone, message} = req.body;
//     console.log("Data:", firstName, lastName, email, phone, message);
    
// });

// Server Connection 
const PORT = process.env.PORT || 5000;

// Import the database connection function
const connectDB = require("./Database/Db");
// Call the connectDB function to connect to MongoDB
connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})