import { body } from "express-validator";

export const roleCreateValidator = [
  body('title', "Слишклм длинное значение максимальное 20 символов").isLength({max: 20}),
];