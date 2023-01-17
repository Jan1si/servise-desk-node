import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import User from '../models/User.js';

export const register = async (req, res) => {
  try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json(errors.array());
      }
  
      const passwordRaw = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(passwordRaw, salt);
  
      const doc = new User({
          name: req.body.name,
          email: req.body.email,
          password: passwordHash
      });
  
      const user = await doc.save();
      const token = jwt.sign({_id:user._id,}, 'secretKey', { expiresIn: '1h'});
      const {password, ...userData} = user._doc;

      res.json({
          ...userData,
          token,
      });
  } catch {
      res.status(500).json({
          message: "Неудалось зарегистрироваться"
      });
  }
}

export const login = async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email});
      if (!user) {
          return res.status(401).json({
              message: 'Неверный логин или пароль'
          }); // Authentication failed
      }

      const isValidPassword = await bcrypt.compare(req.body.password, user.password);

      if (!isValidPassword) {
          return res.status(401).json({
              message: 'Неверный логин или пароль'
          }); // Authentication failed
      }

      const token = jwt.sign({_id:user._id,}, "secretKey", {expiresIn: '1h'});
      
      const {password, ...userData} = user._doc;

      res.json({
          ...userData,
          token,
      });

  } catch (error) {
      res.status(500).json({
          message: "Неудалось авторизоваться"
      });
  }
}

export const getMe = async (req, res) => {
  try {
      const user = await User.findById(req.userId);
      if (!user) {
          res.status(404).json({message: "Пользователь не найден"});
      }

      const {password, ...userData} = user._doc;

      res.json({...userData});
  } catch {
      res.status(500).json({message: "Неудалось получить данные"});
  }
}