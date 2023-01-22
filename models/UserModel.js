import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
   }
);

export default mongoose.model("Users", UserShema);