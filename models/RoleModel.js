import mongoose from "mongoose";

const RoleShema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    require: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Roles', RoleShema);