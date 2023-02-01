import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import UserModel from '../models/UserModel.js';

/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @returns {object} res.json({toket, userData})
 */
export const register = async (req, res) => {
  try {
      // Проверка на ошибки при заполнении формы
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json(errors.array());
      }
        
      // Хеширование паролей
      const passwordRaw = req.body.password; // Получение пароля из формы
      const salt = await bcrypt.genSalt(10); // Создание соли для хеширования
      const passwordHash = await bcrypt.hash(passwordRaw, salt); // Хеширование
  
      // Создание документа записи пользователя
      const doc = new UserModel({
          name: req.body.name,
          email: req.body.email,
          department: req.body.department,
          password: passwordHash
      });
  
      // Сохранение документа в БД 
      const user = await doc.save();

      // Содание токена
      const token = jwt.sign({_id:user._id}, 'secretKey', { expiresIn: '1h'});

      const {password, ...userData} = user._doc;

      // Возврящаем токет и данные пользователя
      res.status(200).json({...userData, token,});
  } catch {
      res.status(500).json({
          message: "Неудалось зарегистрироваться"
      });
  }
}

/**
 * 
 * @param {object} req 
 * @param {object}} res 
 * @returns {object} res.json({token, userData})
 */
export const login = async (req, res) => {
  try {
      // Ищем пользователя по электронной почте
      const user = await UserModel.findOne({ email: req.body.email});
      if (!user) {
          return res.status(401).json({
              message: 'Неверный логин или пароль'
          }); // Authentication failed
      }

      // Проверяем пароль
      const isValidPassword = await bcrypt.compare(req.body.password, user.password);

      if (!isValidPassword) {
          return res.status(401).json({
              message: 'Неверный логин или пароль'
          }); // Authentication failed
      }

      // Содание токена
      const token = jwt.sign({_id:user._id,}, "secretKey", {expiresIn: '1h'});
      
      const {password, ...userData} = user._doc;
      
      // Возврящаем токет и данные пользователя
      res.status(200).json({...userData, token,});

  } catch (error) {
      res.status(500).json({
          message: "Неудалось авторизоваться"
      });
  }
}

/**
 * 
 * @param {object} req 
 * @param {object} res
 * @returns {object} res.json({userData})
 */
export const getMe = async (req, res) => {
  try {
      // Проверка ищем пользователя по id
      const user = await UserModel.findById(req.userId);
      if (!user) {
          res.status(404).json({message: "Пользователь не найден"});
      }

      const {password, ...userData} = user._doc;

      // Возврящаем данные пользователя
      res.status(200).json({...userData});
  } catch {
      res.status(500).json({message: "Неудалось получить данные"});
  }
}

export const getAll = async (req, res) => {
    try {
        const users = await UserModel.find();        
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({message: "Неудалось получить пользователей!"});
    }
}

export const update = async (req, res) => {
    try {
        const userId = req.params.id;

        const passwordRaw = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(passwordRaw, salt)

        UserModel.findByIdAndUpdate({
            _id: userId
        }, {
            title: req.body.title,
            email: req.body.email,
            department: req.body.department,
            role: req.body.role,
            password: passwordHash

        }, {
            returnDocument: "after" 
        }, (err, doc) => {
            if (err) {
                return res.status(500).json({message: "Неудаось обновить пользователя"})
            }
            if (!doc) {
                return res.status(404).json({message: "Пользователь не найден"});
            }

            res.status(200).json({doc});
            }
        )
    } catch (error) {
        res.status(500).json({message: "Неудалось обновить пользователя"});
    }
}

export const remove = async (req, res) => {
    try {
        const userId = req.params.id;

        UserModel.findByIdAndDelete({
            _id: userId
        }, (err, doc) => {
            if (err) {
                return res.status(500).json({message: "Неудалось удалить пользователя"});
            }
            if (!doc) {
                return res.status(404).json({message: "Пользователь не найден"});
            }

            res.status(200).json(doc);
        });

    } catch (error) {
        res.status(500).json({message: "Неудалось удалить пользователя"});
    }
}