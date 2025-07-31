const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req,res)=>{
    try {
        //generate Pass
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        
        //create new user
        const newUsr = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });

        //save user and send response
        const user = await newUsr.save();
        res.status(200).json(user._id);

    } catch (error) {
        res.status(500).json(error);
    }
})

//login
router.post("/login", async (req,res)=>{
    try {
        //find user
        const user = await User.findOne({username: req.body.username});
        if (!user) return res.status(400).json("Wrong username or password");
        
        // validate password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).json("Wrong username or password");

        const token = jwt.sign({
            email: user.email, 
            username: user.username,
            userId: user._id,
        }, process.env.SECRET_KEY);
        
        res.status(200).json({username: user.username, token: token});
    } catch (error) {
        return res.status(500).json(error);
    }
})

// Get current user
router.get("/me", async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decodedToken.userId);
        if (!user) return res.status(404).json("User not found");

        res.status(200).json({ username: user.username, email: user.email });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
