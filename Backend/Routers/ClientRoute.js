const express = require('express');
const router = express.Router();

// authorization Middleware 
const authMiddleware = require("../Middleware/authMiddleware");


const MessageController = require("../Controllers/MessageController");
const RegisterController = require("../Controllers/Register.Controller");
const LoginController = require("../Controllers/Login.Controller");
const AppointmentController = require("../Controllers/Appoinment.Controller");
const DoctorController = require("../Controllers/Doctor.Controller");
const ClientQueryController = require("../Controllers/ClientQuery.Controller");
const ClientAppointmentMainPageController = require("../Controllers/ClientAppoinmentMainPage.Controller");
const AboutController = require("../Controllers/About.Controller");
const FAQController = require("../Controllers/FAQ.Controller");
const HomeController = require("../Controllers/Home.Controller");
const YourAppoinmentsController = require("../Controllers/YourAppoinments.Controller");


// router.post("/messages", MessageController);
router.route("/register").post(RegisterController);
router.route("/login").post(LoginController);

router.route("/messages").post(MessageController)
router.route("/appoinment").post(AppointmentController);
router.route("/doctor-data").get(DoctorController);




router.route("/about").get(authMiddleware,AboutController);
router.route("/client-appoinment-main").get(authMiddleware,ClientAppointmentMainPageController);
router.route("/client-query").get(authMiddleware,ClientQueryController);
router.route("/faq").get(authMiddleware,FAQController);
router.route("/home").get(authMiddleware,HomeController);
router.route("/your-appoinment").get(authMiddleware,YourAppoinmentsController);


module.exports = router;