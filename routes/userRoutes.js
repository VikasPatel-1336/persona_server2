const express = require("express");
const userRouter = express.Router();
const { register, login } = require("../controllers/authControllers");
const{getCourseDetails,contactdetails}=require("../controllers/courseController");

userRouter.get("/courses",getCourseDetails);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/contactdetails", contactdetails);


module.exports = userRouter;
