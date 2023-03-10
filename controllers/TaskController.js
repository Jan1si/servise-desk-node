import TaskModel from "../models/TaskModel.js";
import { validationResult } from "express-validator";

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({tasks}) - Возвращает все задачи
 * 
 */
export const getAll = async (req, res) => {
  try {
    const tasks = await TaskModel.find().populate('creater').exec();
    res.status(200).json({tasks});
  } catch {
    res.status(500).json({
      message: "Неудалось получить список задач"
    });
  }
}

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({task}) - Возвращает задачу по id
 * 
 */
export const getOne = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await TaskModel.findById(taskId).populate('creater').exec();
    
    if (!task) {
      return res.status(404).json({
        message: "Задача не найдена"
      });
    }

    res.status(200).json({task});
  } catch {
    res.status(500).json({
      message: "Неудалось выполнить поиск задачи"
    });
  }
}


/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({task}) - Возвращает созданную зачачу
 * 
 */
export const create = async (req, res) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json(error.array());
    }

    const doc = new TaskModel({
      title: req.body.title,
      desk: req.body.desk,
      category: req.body.category,
      status: req.body.status,
      creater: req.userId
    });

    const task = await doc.save();

    res.status(200).json({task});

  } catch {
    res.status(500).json({
      message: "Неудалось создать задачу"
    });
  }
}

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({doc}) - Возвращает обновлённую задачу
 * 
 */
export const update = async (req, res) => {
  try {
    const taskId = req.params.id;
    TaskModel.findByIdAndUpdate({
      _id: taskId
    },{
      title: req.body.title,
      desk: req.body.desk,
      category: req.body.category,
      status: req.body.status,
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          message: "Неудалось обновить задачу"
        });
      }
      if (!doc) {
        return res.status(404).json({
          message: "Задача не найдена"
        });
      }

      res.status(200).json({doc});
    })
  } catch {
    res.status(500).json({
      message: "Неудалось обновить задачу"
    });
  }
}

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({tasks}) - Возвращает сообщение о удалении задачи
 * 
 */
export const remove = async (req, res) => {
  try {
    const taskId = req.params.id;
    TaskModel.findByIdAndDelete({
      _id: taskId
    }, (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: "Неудалось удалить задачу"
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Задача не найдена"
          });
        }

        res.status(200).json({
          message: 'Задача удалена'
        });
    });
  } catch {
    res.status(500).json({
      message: "Неудалось удалить задачу"
    });
  }
}