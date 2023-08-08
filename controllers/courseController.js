const Courses = require("../models/coursesModel");
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

module.exports = { getCourseDetails };
