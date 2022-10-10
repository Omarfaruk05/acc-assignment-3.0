const mongoose = require('mongoose');
const validator = require('validator');


const jobSchema = mongoose.Schema(
    {
       title: {
            type: String,
            trim: true,
            required: [true, "Please provide a job title."],
            minLength: [5, "Last name is too large."],
            maxLength: [150, "Last name is too large."],
       },
       description: {
            type: String,
            required: [true, "Please provide a job description."],
       },
       category: {
            type: String,
            required: [true, "Please provide job category."],
       },
       company: {
            type: String,
            required: [true, "Please provide company name."],

       },
       location: {
            type: String,
            enum: {
               values: ['Dhaka', "Chattogram", "Sylhet", "Khulna", "Ranjhahi", "Rangpur", "Mymenshing", "Barishal"],
               message: "{VALUE} is not acorrate divition!"
            }
       },
       salary: {
            type: Number,
            required: true,
            min: [0, "Salary can't be negative"],
      },
      type: {
            type: String,
            enum: {
                values: ["On site", "Remote", "Hybird"],
                message: "{VALUE} is not acorrate.",
            }
      },
      vacancy: {
        type: Number,
        required: [true, 'Please provide job vacancy.']
      },
      postingDate: {
            type: Date,
            default: Date.now(),
      },
      lastApplicationDate: {
        type: Date,
        default: Date.now() + (30*24*3600*1000),
      }, 
    },
    {
        timestamps: true,
    }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;