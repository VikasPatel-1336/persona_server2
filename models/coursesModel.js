const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
  courseimg:{
    type: String,
    required: true,
  },
    coursename:{    
    type: String,
    required: true,
    },
    courseprice:{
    type: String,
    required: true,
    }
});
const Courses = mongoose.model("Courses", CoursesSchema);
module.exports = Courses;
