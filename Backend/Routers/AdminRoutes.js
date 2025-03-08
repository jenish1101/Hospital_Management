const express = require('express');
const router = express.Router();

// Multer For Files/Image Upload 
const multer = require("multer");
// Configure Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/Images"); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});
const upload = multer({ storage });


// Controllers 
const AdminRegisterController = require("../Controllers/Admin/AdminRegister.Controller");
const AdminLoginContoller = require("../Controllers/Admin/AdminLogin.Controller");
const AdminHomeController = require("../Controllers/Admin/AdminHome.Controller.js");
const AppoinmentController = require("../Controllers/Admin/Appoinment.Controller");
const {ClientMessagesController, ReplyToClientMessageController} = require("../Controllers/Admin/ClientMessages.Controller");
const {DoctorsController,AddDoctorDetailsController,UpdateDoctorDetailsController,DeleteDoctorController} = require("../Controllers/Admin/Doctors.controller");




// Middelware 
const AdminauthMiddleware = require("../Middleware/AdminauthMiddleware");



// Routers 
router.route("/register").post(AdminRegisterController);
router.route("/login").post(AdminLoginContoller);
router.route("/home").get(AdminauthMiddleware,AdminHomeController);
router.route("/client-message").get(AdminauthMiddleware,ClientMessagesController);
router.route("/appoinments").get(AdminauthMiddleware,AppoinmentController);
router.route("/client-message/reply").post(ReplyToClientMessageController);


// Doctors
router.route("/doctors").get(AdminauthMiddleware,DoctorsController);
router.route("/doctors/add").post(upload.single("image"),AddDoctorDetailsController);

// Update & Delete Doctor
router.route("/doctors/update/:id").put(upload.single("image"), UpdateDoctorDetailsController);
router.route("/doctors/delete/:id").delete(DeleteDoctorController);

module.exports = router;