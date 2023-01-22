import { body } from "express-validator";

export const  CategoryValidator = [
  body('title', 'Слишком длинное значение максимум 50 символов').isLength({max: 50})
];