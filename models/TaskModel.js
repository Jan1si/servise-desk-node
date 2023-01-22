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
  priority: {
    type: String,
    require: true
  },
  creater:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    require: true
  },
  worker:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  }
},{ timestamps: true
});

export default mongoose.model('Tasks', TaskShema);