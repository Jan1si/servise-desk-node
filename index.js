import express from 'express';
import mongoose from 'mongoose';
import { registerValidator, LoginValidator } from './validations/Auth.js';
import { roleCreateValidator } from './validations/Role.js';
import checkAuth from './middleware/checkAuth.js';
import * as UserController from "./controllers/UserController.js"
import * as RoleController from "./controllers/RoleController.js"


const app = express();

app.use(express.json());

app.get('/', (req, res) => {res.send('Hello World');});
app.post('/auth/login', LoginValidator, UserController.login);
app.post('/auth/register', registerValidator, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/roles', checkAuth, RoleController.getAll);
app.post('/roles', checkAuth, roleCreateValidator, RoleController.create);
app.patch('/roles/:id', checkAuth, roleCreateValidator, RoleController.update);
app.delete('/roles/:id', checkAuth, RoleController.remove);


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