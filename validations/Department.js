import { body } from "express-validator";

export const  DepartmentValidator = [
    body('title', 'Слишком длинное занчение максимум символов 50').isLength({max: 50})
];