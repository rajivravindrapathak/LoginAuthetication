import express from "express"
import cors from "cors"
import mongoose from "mongoose"

// const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {   
                                                                    //  mongodb+srv://RajivRavindraPathak:<password>@newcluster.kt454.mongodb.net/?retryWrites=true&w=majority
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Db connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// Routes
app.post("/login", (req, res) => {
    const { email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({message: "Login successfull", user: user})
            } else {
                res.send({message: "password did' nt match"})
            }
        } else {
            res.send({message: "User not registerd"})
        }
    } )
})

app.post("/register", (req, res) => {

    const { name, email, password } = req.body
    User.findOne({email: email}, (err, user) => {
        if(user) {
            res.send({message: "User already registered"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered" })
                }
            })
        }
    })
  
})

app.listen(8080, () => {
    console.log("be stared at port 8080")
})