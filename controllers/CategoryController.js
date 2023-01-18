import Category from "../models/Category.js";
import { validationResult } from "express-validator";

export const getAll = async (req, res) => {
  try {
    
    const categories = await Category.find();
    res.json({categories});

  } catch {
    res.status(500).json({
      message: "Неудалось получить категории"
    });
  }
}

export const create = async (req, res) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json(error.array());
    }
    
    const doc = new Category({title: req.body.title});
    const category = await doc.save();

    res.json({category});

  } catch {
    res.status(500).json({
      message: "Неудалось создать категорию"
    });
  }
}

export const update = async (req, res) => {
  try {
    const categoryId = req.params.id;

    Category.findByIdAndUpdate({
        _id: categoryId
    },{
        title: req.body.title
    }, (err, doc) => {

        if (err) {
          return res.status(500).json({message: "Неудалось получить категорию"});
        }

        if (!doc) {
          return res.status(404).json({message: "Категория не найдена"});
        } 

        res.json({message: "Категория изменена"});

    });

  } catch  {
    res.status(500).json({
      message: "Неудалось получить категорию"
    });
  }

}

export const remove = async (req, res) => {
  try {
    const  categoryId = req.params.id;
    Category.findByIdAndDelete({
      _id: categoryId
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          message: "Неудалось удалить кетегорию"
        });
      }
      if (!doc) {
        return res.status(404).json({
          message: "Категория не найдена"
        });
      }

      res.json({message: "Категория удалена"})
    });
  } catch {
    
  }
}