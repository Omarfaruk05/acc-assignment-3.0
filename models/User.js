const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            validator: [validator.isEmail, "Please provide a valide email"],
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, "Email is required"]
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            validate:{
                validator: (value)=>validator.isStrongPassword(value, {
                    minLength: 6,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                }),
                message: "Password is not strong engoug."
            },
        },
        confirmPassword: {
            type: String,
            required: [true, "Please confirm your password."],
            validate: {
                validator: function(value){
                    return value === this.password;
                },
                message: "Password dosen't match."
            },
        },
        role: {
            type: String,
            enum: ["candidate", "hiring manager", "admin"],
            default: "candidate",
        },
        firstName: {
            type: String,
            required: [true, "Please provide your first name."],
            trim: true,
            minLength: [3, "First name must be at least 3 characters."],
            maxLength: [80, "First name is too large."],
        },
        lastName: {
            type: String,
            required: [true, "Please provide your last name."],
            trim: true,
            minLength: [3, "Last name must be at least 3 characters."],
            maxLength: [100, "Last name is too large."],
        },
        contactNumber: {
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value);
                },
                message: "Please provide a valid phone number.",
            },
        },
        imageUrl: {
            type: String,
            validate: [validator.isURL, "Please provide a valide image URL."]
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", function(next){
    const password = this.password;

    const hashPass = bcrypt.hashSync(password, 10);

    this.password = hashPass;
    this.confirmPassword = undefined;

    next();

})

const User = mongoose.model("User", userSchema);

module.exports = User;