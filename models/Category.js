import mongoose from "mongoose";

const CategoryShema = new mongoose.Schema({
  title: {
    type:String,
    require: true,
    unique: true
  }
});


export default mongoose.model('Category', CategoryShema);