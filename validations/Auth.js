import { body } from "express-validator";


export const LoginValidator = [
    body("email", "Некорректный email").isEmail(),
    body("password", "Слишком короткий пароль минимум 5 символов").isLength({ min: 3 }),
];

export const registerValidator = [
    body("name", "Значение слишком короткое минимум 5 символов").isLength({ min: 4 }),
    body("email", "Некорректный email").isEmail(),
    body("password", "Слишком короткий пароль минимум 5 символов").isLength({ min: 3 }),
];