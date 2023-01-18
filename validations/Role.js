import { body } from "express-validator";

export const RoleCreateValidator = [
  body('title', "Слишклм длинное значение максимальное 20 символов").isLength({max: 20}),
];