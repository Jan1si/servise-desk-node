import { body } from "express-validator";


export const LoginValidator = [
    body("email", "Некорректный email").isEmail(),
    body("password", "Слишком короткий пароль минимум 5 символов").isLength({ min: 5 }),
];

export const RegisterValidator = [
    body("name", "Значение слишком короткое минимум 5 символов").isLength({ min: 5 }),
    body("email", "Некорректный email").isEmail(),
    body("password", "Слишком короткий пароль минимум 5 символов").isLength({ min: 5 }),
];

export const UserValidator = [
    body("name", "Значение слишком короткое минимум 5 символов").isLength({ min: 5 }),
    body("email", "Некорректный email").isEmail(),
    body("password", "Слишком короткий пароль минимум 5 символов").isLength({ min: 5 }),
];