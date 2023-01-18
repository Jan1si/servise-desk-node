import mongoose from "mongoose";

const DepartmentShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Department", DepartmentShema);