import mongoose from "mongoose";

const TaskShema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  desc: String,
  category:{
    type: String,
    require: true
  },
  status:{
    type: String,
    require: true
  },
  creater:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  worker:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
},{ timestamps: true
});

export default mongoose.model('TaskModel', TaskShema);