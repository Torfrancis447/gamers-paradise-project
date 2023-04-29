import mongoose from 'mongoose';
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a user name"]
        },
        email: {
            type: String,
            required: [true, 'Please enter an email address'],
            unique: true,
            lowercase: true,
        },
        age: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

export default User
