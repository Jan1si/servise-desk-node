import { body } from "express-validator";


export const TaskValidator = [
    body('title', "Значение слишком короткое минимум  10 символов").isLength({min: 10}),
    body('title', "Значение слишком длинное максимум  100 символов").isLength({max: 100}),
    body('desc', "Значение слишком короткое минимум  10 символов").isLength({min: 10}),
];