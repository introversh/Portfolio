require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB Connected")).catch(err=>console.error("MongoDB Connection Error:", err));
const express = require("express");
const cors = require("cors");
const app=express();
const PORT =  3000;
const Message = require("./models/Message"); 
const sendThankYouEmail = require("./mailer");
app.use(cors({
    origin: "https://introversh.onrender.com/", 
    methods: "GET,POST",
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to the Contact API");
});
app.post("/", async (req,res)=>{
    const{name,email,message}=req.body;
    if(!name||!email||!message){
        return res.status(400).json({error:"All fields are mandatory"});
    }
    try {
        const newMessage = new Message({ name, email, message });
        await Promise.all([newMessage.save(),
        sendThankYouEmail(email, name)]);
        res.json({ message: "Your message has been received", data: newMessage });
    } catch (error) {
        res.status(500).json({ error: "Failed to save message" });
    }
});
app.listen(PORT, ()=>{
    console.log("Hello");
});

