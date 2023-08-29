const QuizMarksModel = require("../models/quizMarksModel");

const UserMarks= async(req,res)=>{
    const {userTrueAns } = req.body;
    try {
        const userMarks = new QuizMarksModel({
            userTrueAns,
          });
          await userMarks.save();
          res
            .status(200)
            .json({ marks : userMarks, message: "marks saved successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server error , UserMarks not stored", success: false });
    }
}

module.exports={
    UserMarks
}

