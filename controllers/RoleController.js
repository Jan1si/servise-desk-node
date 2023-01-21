import RoleModel from "../models/RoleModel.js";
import { validationResult } from 'express-validator';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getAll = async (req, res) => {
  try {
    // Получаем все роли
    const roles = await RoleModel.find();
    res.status(200).json({roles});

  } catch {
    res.status(500).json({
      message: "Неудалось получить роли"
    });
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const create = async (req, res) => {
  try {
    // Проверка на ошибки при заполнении формы
    const error = validationResult(req);
    
    if (!error.isEmpty()) {
      return res.status(400).json(error.array())
    }

    // Создаем новый документ роли
    const doc = new RoleModel({title: req.body.title});

    // Сохраняем новую роль
    const role = await doc.save();

    // Возвращаем данные новой роли
    res.status(200).json({role});

  } catch {
    res.status(500).json({
      message: "Неудалось создать роль"
    });
  }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const update = async (req, res) => {
  try {
    // Получаем id роли
    const roleId = req.params.id;

    // Ищим роль по id и обновляем 
    RoleModel.findByIdAndUpdate({
      _id: roleId
    }, {
      title: req.body.title
    },{
      // Возвращаем роль после обновления
      returnDocument: "after"

    },(err, doc) => {
      
      // Проверка на ошибки
      if (err) {
        return res.status(500).json({
          message: "Неудалось получить роль"
        });
      }

      // Проверка на наличие документа
      if (!doc) {
        return res.status(404).json({
          message: "Роль не найдена"
        });
      }
      
      // Возвращаем обновлённый документ
      res.status(200).json({doc, message: "Роль была изменина"});
    });
  } catch {
    res.status(500).json({
      message: "Неудалось получить роль"
    })
  }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const remove = async (req, res) => {
  try {
    // Получаем id роли
    const roleId = req.params.id;

    // Ищим роль по id и удаляем 
    RoleModel.findByIdAndDelete({
      _id: roleId
    }, (err, doc) => {

      // Проверка на ошибки
      if (err) {
        return res.status(500).json({
          message: "Неудалось удалить роль"
        });
      }

      // Проверка на наличие документа
      if (!doc) {
        return res.status(404).json({
          message: "Роль не найдена"
        });
      }

      res.status(200).json({message: "Роль была удалена"});
    });
  } catch {
    res.status(500).json({
      message: "Неудалось удалить роль"
    });
  }
}
