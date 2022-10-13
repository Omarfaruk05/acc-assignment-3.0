const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;



const applicationSchema = mongoose.Schema(
    {
     
       name: {
            type: String,
            trim: true,
            required: [true, "Please provide your name."],
            minLength: [3, "Name is too large."],
            maxLength: [50, "Name is too large."],
       },
       email: {
            type: String,
            validator: [validator.isEmail, "Please provide a valide email"],
            trim: true,
            lowercase: true,
            required: [true, "Email is required"]
       },
       location: {
            type: String,
            enum: {
               values: ['Dhaka', "Chattogram", "Sylhet", "Khulna", "Ranjhahi", "Rangpur", "Mymenshing", "Barishal"],
               message: "{VALUE} is not acorrate divition!"
            }
       },
      jobType: {
            type: String,
            enum: {
                values: ["On site", "Remote", "Hybird"],
                message: "{VALUE} is not acorrate.",
            }
      },
      appliedFrom: {
               type: String,
               required: true,
      },
      applicationDate: {
            type: Date,
            default: Date.now(),
      },
    },
    {
        timestamps: true,
    }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;