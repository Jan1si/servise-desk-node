import mongoose from "mongoose";

const CategoryShema = new mongoose.Schema({
  title: {
    type:String,
    require: true,
    unique: true
  }
}, {
    timestamps: true
});


export default mongoose.model('CategoryModel', CategoryShema);