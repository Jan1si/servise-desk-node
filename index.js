import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import checkAuth from './middleware/checkAuth.js';

import { RegisterValidator, LoginValidator, UserValidator } from './validations/Auth.js';
import { RoleCreateValidator } from './validations/Role.js';
import { CategoryValidator } from './validations/Category.js';
import { DepartmentValidator } from './validations/Department.js';
import { TaskValidator } from './validations/Task.js';


import * as UserController from "./controllers/UserController.js"
import * as RoleController from "./controllers/RoleController.js"
import * as CategoryController from "./controllers/CategoryController.js"
import * as DepartmentController from "./controllers/DepartmentController.js"
import * as TaskController from "./controllers/TaskController.js";


const app = express();

app.use(express.json());
app.use(cors());

app.post('/auth/login', LoginValidator, UserController.login);
app.post('/auth/register', RegisterValidator, UserController.register);
app.get('/auth/me',  UserController.getMe);
app.get('/users', UserController.getAll);
app.patch('/users/:id', UserValidator, UserController.update);
app.delete('/users/:id',  UserController.remove);

app.get('/roles',  RoleController.getAll);
app.post('/roles',  RoleCreateValidator, RoleController.create);
app.patch('/roles/:id',  RoleCreateValidator, RoleController.update);
app.delete('/roles/:id',  RoleController.remove);

app.get('/categories',  CategoryController.getAll);
app.post('/categories',  CategoryValidator, CategoryController.create);
app.patch('/categories/:id',  CategoryValidator, CategoryController.update);
app.delete('/categories/:id',  CategoryController.remove);

app.get('/departmens',  DepartmentController.getAll);
app.post('/departmens',  DepartmentValidator, DepartmentController.create);
app.patch('/departmens/:id',  DepartmentValidator, DepartmentController.update);
app.delete('/departmens/:id',  DepartmentController.remove);

app.get('/tasks', TaskController.getAll);
app.get('/tasks/:id', TaskController.getOne);
app.post('/tasks', checkAuth, TaskValidator, TaskController.create);
app.patch('/tasks/:id', TaskValidator, TaskController.update);
app.delete('/tasks/:id', TaskController.remove);

app.listen(3001, (err) => {
    if (err) {
       return  console.log('Start error server');
    } else {
       return  console.log('Server is running on port http://localhost:3001/');
    }
}); // start server

mongoose.connect('mongodb://localhost:27017/service-desk', (err) => {
    if (err) {
        return console.log("Fail connect to database", err.message);
    } else {
        return console.log("Connected to database");
    }
}); // MongoDB connection