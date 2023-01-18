import { body } from "express-validator";

export const  CategoryValidator = () => [
  body('title', 'Слишком длинное значение максимум 20 символов').isLength({max: 20})
];