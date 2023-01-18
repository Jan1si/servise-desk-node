import Role from "../models/Role.js";
import { validationResult } from 'express-validator';

export const getAll = async (req, res) => {
  try {

    const roles = await Role.find();
    res.status(200).json({roles});

  } catch {

    res.status(500).json({
      message: "Неудалось получить роли"
    });

  }
}

export const create = async (req, res) => {
  try {

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json(error.array())
    }

    const doc = new Role({title: req.body.title});

    const role = await doc.save();

    res.json({role})

  } catch {
    res.status(500).json({
      message: "Неудалось создать роль"
    });
  }
}

export const update = async (req, res) => {
  try {
    const roleId = req.params.id;

    Role.findByIdAndUpdate({
      _id: roleId
    },{
      title: req.body.title
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          message: "Неудалось получить роль"
        });
      }

      if (!doc) {
        return res.status(404).json({
          message: "Роль не найдена"
        });
      }

      res.json({message: "Роль была изменина"});
    });
  } catch {
    res.status(500).json({
      message: "Неудалось получить роль"
    })
  }
}

export const remove = async (req, res) => {
  try {

    const roleId = req.params.id;

    Role.findByIdAndDelete({
      _id: roleId
    }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          message: "Неудалось удалить роль"
        });
      }

      if (!doc) {
        return res.status(404).json({
          message: "Роль не найдена"
        });
      }

      res.json({message: "Роль была удалена"});
    });
  } catch {
    res.status(500).json({
      message: "Неудалось удалить роль"
    });
  }
}
