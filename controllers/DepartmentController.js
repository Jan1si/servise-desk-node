import { validationResult } from "express-validator";
import DepartmentModel from "../models/DepartmentModel.js";

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getAll =  async (req, res) => {
    try {
        // Получаем все отделения
        const departments = await DepartmentModel.find();
        res.status(200).json({departments});

    } catch {
        res.status(500).json({
            message: "Неудалось получить отделы"
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const create = async (req, res) => {
    try {
        // Проверка на ошибки при заполнении формы
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json(error.array());
        }

        // Создаём новый документ отделения
        const doc = new DepartmentModel({title: req.body.title});

        // Сохраняем новое отделение
        const department = await doc.save();

        // Возвращаем данные новой роли
        res.status(200).json({department});

    } catch {
        res.status(500).json({
            message: "Неудалось добавить отдел"
        });
    };
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const update = async (req, res) => {
    try {
        // Получаем id отделения
        const departmentId = req.params.id;

        // Ищим отделение по id и обновляем
        DepartmentModel.findByIdAndUpdate({
            _id:departmentId
        },{
            title: req.body.title
        }, {
            // Возвращаем отделение после обновления
            returnDocument: "after"
        }, (err, doc) => {
            // Проверка на ошибки
            if (err) {
                return  res.status(500).json({
                    message: "Неудалось обновить отдел"
                });
            }

            // Проверка на наличие документа
            if (!doc) {
                return res.status(400).json({
                    message: "Отдел не найден"
                });
            }

            // Возвращаем обновлённый документ
            res.status(200).json({doc, message: "Отделение было обновленно"});
        } );
    } catch {
        res.status(500).json({
            message: "Неудалось обновить отдел"
        });
    };
}

/**
 * 
 * @param {req} 
 * @param {res} 
 * @returns {res.json}
 */
export const remove = async (req, res) => {
    try {
        // Получаем id отделения
        const departmentId = req.params.id;

        // Ищим отделение по id и удаляем 
        DepartmentModel.findByIdAndRemove({
            _id:departmentId
        }, (err, doc) => {
            // Проверка на ошибки
            if (err) {
                return res.status(500).json({
                    message: "Неудалось удалить отдел"
                });
            }

            // Проверка на наличие документа
            if (!doc) {
                return res.status(400).json({
                    message: "Отдел не найден"
                });
            }

            res.status(200).json({message: "Отдел удален"});
        });
        
    } catch {
        res.status(500).json({
            message: "Неудалось удалить отдел"
        });
    };
}