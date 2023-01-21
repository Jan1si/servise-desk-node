import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import UserModel from '../models/UserModel.js';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
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
 * @param {*} req 
 * @param {*} res 
 * @returns 
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
 * @param {*} req 
 * @param {*} res 
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