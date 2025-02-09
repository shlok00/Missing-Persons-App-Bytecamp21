const mongoose = require('mongoose')
const validator = require('validator')
const { Schema } = mongoose

const CaseSchema = new Schema({
    caseNumber: {
        type: String,
        required: true,
        text: true
    },
    location: {
        city: { type: String, required: true, text: true },
        state: { type: String, required: true, text: true },
        postalCode: { type: Number, required: true, text: true }
    },
    date: {
        type: String, 
        required: true 
    },
    investigatingDepartment: {
        type: String,
        required: true,
        text: true
    },
    updates: {
        type: [String],
        required: true
    },
    victimMaritalStatus: {
        type: String,
        required: true
    },
    victimName: {
        type: String,
        required: true,
        text: true
    },
    victimGender: {
        type: String,
        required: true
    },
    reward: {
        type: String,
        required: true
    },
    victimInfo: {
        type: String,
        required: false
    },
    victimAge: {
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ['solved', 'ongoing', 'closed'],
        required: true,
        text: true
    },
    officersInvolved: {
        type: [String],
        required: false,
    },
    moreInfoLinks: {
        type: [String],
        required: false
    },
    images: {
        type: [String],
        required: false
    },
    caseAuthority: {
        type: String,
        required: true,
        text: true
    },
    typeOfCase: {
        type: String,
        default: "Robbery",
        required: true
    }
},{ 
    timestamps: true 
} 
)

module.exports = mongoose.model('case', CaseSchema)