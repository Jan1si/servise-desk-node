import express from 'express';
import mongoose from 'mongoose';
import { RegisterValidator, LoginValidator } from './validations/Auth.js';
import { RoleCreateValidator } from './validations/Role.js';
import checkAuth from './middleware/checkAuth.js';
import * as UserController from "./controllers/UserController.js"
import * as RoleController from "./controllers/RoleController.js"
import * as CategoryController from "./controllers/CategoryController.js"



const app = express();

app.use(express.json());

app.get('/', (req, res) => {res.send('Hello World');});
app.post('/auth/login', LoginValidator, UserController.login);
app.post('/auth/register', RegisterValidator, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/roles', checkAuth, RoleController.getAll);
app.post('/roles', checkAuth, RoleCreateValidator, RoleController.create);
app.patch('/roles/:id', checkAuth, RoleCreateValidator, RoleController.update);
app.delete('/roles/:id', checkAuth, RoleController.remove);

app.get('/categories', checkAuth, CategoryController.getAll);
app.post('/categories', checkAuth, CategoryController.create);
app.patch('/categories/:id', checkAuth, CategoryController.update);
app.delete('/categories/:id', checkAuth, CategoryController.remove);




app.listen(3000, (err) => {
    if (err) {
       return  console.log('Start error server');
    } else {
       return  console.log('Server is running on port http://localhost:3000/');
    }
}); // start server

mongoose.connect('mongodb://localhost:27017/service-desk', (err) => {
    if (err) {
        return console.log("Fail connect to database", err.message);
    } else {
        return console.log("Connected to database");
    }
}); // MongoDB connection