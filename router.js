const express = require('express');
const router = express.Router();
const controller = express('./controller')

router.get('/users',controller.getUsers);
router.get('/createUser',controller.addUser);
router.get('/updateUser',controller.UpdateUser);
router.get('/deleteUser',controller.DeleteUser);