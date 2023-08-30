const express = require("express");
const userRouter = express.Router();
const { register, login } = require("../controllers/authControllers");
const{getCourseDetails,contactdetails,getQuizDetails,getStudyMaterialDetails}=require("../controllers/courseController");
const{VideoStream}=require("../controllers/authVideo");

userRouter.get("/courses",getCourseDetails);
userRouter.get("/getquizdetails",getQuizDetails);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/contactdetails", contactdetails);
userRouter.get("/VideoStream", VideoStream);
userRouter.get("/studyMaterial",getStudyMaterialDetails);


module.exports = userRouter;
