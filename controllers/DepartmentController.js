import { validationResult } from "express-validator";
import Department from "../models/Department.js";

export const getAll =  async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch {
        res.status(500).json({
            message: "Неудалось получить отделы"
        });
    }
}

export const create = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json(error.array());
        }

        const doc = new Department({title: req.body.title});
        const department = await doc.save();

        res.json({department});

    } catch {
        res.status(500).json({
            message: "Неудалось добавить отдел"
        });
    };
}

export const update = async (req, res) => {
    try {
        const departmentId = req.params.id;
        
        Department.findByIdAndUpdate({
            _id:departmentId
        },
        {
            title: req.body.title
        }, (err, doc) => {
            if (err) {
                return  res.status(500).json({
                    message: "Неудалось обновить отдел"
                });
            }
            if (!doc) {
                return res.status(400).json({
                    message: "Отдел не найден"
                });
            }
            res.status(200).json({doc});
        } );
    } catch {
        res.status(500).json({
            message: "Неудалось обновить отдел"
        });
    };
}

export const remove = async (req, res) => {
    try {
        const departmentId = req.params.id;
        Department.findByIdAndRemove({
            _id:departmentId
        }, (err, doc) => {
            if (err) {
                res.status(500).json({
                    message: "Неудалось удалить отдел"
                });
            }
            if (!doc) {
                res.status(400).json({
                    message: "Отдел не найден"
                });
            }
            res.status(200).json({
                message: "Отдел удален"
            });
        });
        
    } catch {
        res.status(500).json({
            message: "Неудалось удалить отдел"
        });
    };
}