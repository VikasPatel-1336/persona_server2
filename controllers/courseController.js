const Courses = require("../models/coursesModel");
const Detail = require("../models/contactModel");
const Quiz = require("../models/quizModel");
const getCourseDetails = async (req, res) => {
  try {
    const details = await Courses.find();
    res.status(200).json({ details });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const contactdetails = async (req, res) => {
  const { name, email, phonenumber, subject, message } = req.body;
  try {
    const newDetail = new Detail({
      name,
      email,
      phonenumber,
      subject,
      message,
    });
    await newDetail.save();
    res
      .status(200)
      .json({ detail: newDetail, message: "Details saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
      
    });
  }
};
 const getQuizDetails = async (req, res) => {
  try {
    const details = await Quiz.find();
    res.status(200).json({ details });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
 }
module.exports = { getCourseDetails, contactdetails,getQuizDetails};
