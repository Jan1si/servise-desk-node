import CategoryModel from "../models/CategoryModel.js";
import { validationResult } from "express-validator";

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({categories}) - возвращает все категории
 * 
 */
export const getAll = async (req, res) => {
  try {
    // Поучаем все категории 
    const categories = await CategoryModel.find();
    res.status(200).json({categories});

  } catch {
    res.status(500).json({
      message: "Неудалось получить категории"
    });
  }
}

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({category}) - Возвращает созданную категорию
 * 
 */
export const create = async (req, res) => {
  try {
    // Проверка на ошибки при заполнении формы
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json(error.array());
    }

    // Создаем новый документ категории
    const doc = new CategoryModel({title: req.body.title});

    // Сохраняем новую категорию
    const category = await doc.save();

    // Возвращаем данные новой роли
    res.status(200).json({category});

  } catch {
    res.status(500).json({
      message: "Неудалось создать категорию"
    });
  }
}

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({doc}) - Возвращает обновлённую категорию
 * 
 */
export const update = async (req, res) => {
  try {
    // Получаем id категории
    const categoryId = req.params.id;

    // Ищим категорию по id и обновляем 
    CategoryModel.findByIdAndUpdate({
        _id: categoryId
    },{
        title: req.body.title
    },{
        // Возвращаем категорию после обновления
        returnDocument: "after"
    }, (err, doc) => {

        // Проверка на ошибки
        if (err) {
          return res.status(500).json({
            message: "Неудалось получить категорию"
          });
        }

        // Проверка на наличие документа
        if (!doc) {
          return res.status(404).json({
            message: "Категория не найдена"
          });
        } 

        // Возвращаем обновлённый документ
        res.status(200).json({doc});
    });

  } catch  {
    res.status(500).json({
      message: "Неудалось получить категорию"
    });
  }

}

/**
 * @async
 * @param {object} req 
 * Объект с данными из формы
 * @param {object} res 
 * Объект с ответом
 * @returns {object} res.json({message}) - Даёт отвте что категория удалена
 * 
 */
export const remove = async (req, res) => {
  try {
    // Получаем id роли
    const  categoryId = req.params.id;

    // Ищим категорию по id и удаляем 
    CategoryModel.findByIdAndDelete({
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

      res.status(200).json({message: "Категория удалена"})
    });
  } catch {
    res.status(500).json({
      message: "Неудалось удалить категорию"
    });
  }
}