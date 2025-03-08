const RegistrationModal = require("../Models/Registration.Modal");
let bcrypt = require('bcryptjs');

const RegisterController= async(req,res)=>{
    const {firstName, lastName, email, phone, gender, password } = req.body;
        // console.log(firstName, lastName, email, phone, gender, password );
    if(!firstName || !lastName || !email || !phone || !gender || !password){
        return res.json({message:"Please enter All Fields..."});
    }
    else{

        const Email_Exist = await RegistrationModal.findOne({email});
        if(Email_Exist){
            return res.json({message:"Email already exists"});          
        }
        const Phone_Exist = await RegistrationModal.findOne({phone});
        if(Phone_Exist){
            return res.json({message:"Mobile Number already exists"});   
        }

        const HasedPassword = await bcrypt.hash(password,10);
        console.log(HasedPassword);
        

        const RegistartionData = await RegistrationModal.create({
            firstName, lastName, email, phone, gender, password:HasedPassword
        });

        return res.json({message:"Registered Successfully", RegistartionData});
    }
        
};

module.exports=RegisterController;