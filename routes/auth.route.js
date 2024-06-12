const { Router } = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jvt = require("jsonwebtoken");

const router = Router();

router.post("/registration", async (req,res) => {
    try {
        const { email, password } = req.body;
        const isUsed = await Users.findOne({ email });
        if (isUsed) {
            return res.status(300).json({ message: "This email already exist!" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = Users({
            email,
            password: hashedPassword
        });
        user.save();
        res.status(201).json({message:"User has been created"});
    } catch (error){
        console.log(error);
    }
});

router.post("/login", async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user){
            return res
                .status(400)
                .json({message:"User with same email not exist!"});
        }
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch){
            return res
                .status(400)
                .json({message:"Passwords is different!"});
        }
        const jvtSecret = "gjdkflgjdfksgjfkjgsfdjgkfdjglfsdjglk";
        const token = jvt.sign(
            {userId: user.id},
            jvtSecret,
            {expiresIn: "1h"}
        );
        res.json({token, userId:user.id, user});
    } catch (error){
        console.log(error);
    }
});

router.get("/all_users", async (req,res) => {
    try {
        const users = await Users.find();
        if (!users){
            return res
                .status(400)
                .json({message:"User with same email not exist!"});
        }
        res.json({ users });
    } catch (error){
        console.log(error);
    }
});

module.exports = router;