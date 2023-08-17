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
    originalprice:{
    type: String,
    required: true,
    },
    discountedprice:{
    type: String,
    required: true,
    },
    dppsolution:{
    type: String,
    required: true,
    },
    dpp:{
    type: String,
    required: true,
    },
    livelectures:{
    type: String,
    required: true,
    },
    modules:{
    type: String,
    required: true,
    },
    tests:{
    type: String,
    required: true,
    },
    batchdetails:{
    type: [[String]],
    required: true,
    }
});
const Courses = mongoose.model("Courses", CoursesSchema);
module.exports = Courses;
