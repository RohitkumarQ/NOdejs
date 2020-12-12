const mongoose = require("mongoose");


const adminpannel = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    father_name: {
        type: String,
        required: true
    },
    home_contect: {
        type: Number,
        required: true
    },
    personal_contect: {
        type:Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    bankaccuntno: {
        type: String,
        required: true,

    }
})

const employee = new mongoose.model("employee", adminpannel);

module.exports = employee