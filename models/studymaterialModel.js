const mongoose = require("mongoose");

const StudyMaterialSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    lesson:{
        type: String,
        required: true,
    }

});
const StudyMaterial = mongoose.model("StudyMaterial", StudyMaterialSchema);
module.exports = StudyMaterial;