const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 50,
    },
    email: {
        type: String,
        required: true,

    },
    phonenumber: {
        type: String,
        required: true,
        max: 10,
    },
    message: {
        type: String,
        required: true,
        max: 500,
    },
    subject: {
        type: String,
        required: true,
        max: 50,
    }

});
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;