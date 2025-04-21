const express = require('express');
const router = express.Router();
const {createTask, getTasks, getTaskById, deleteTask, updateTask} = require('../controller/taskController');

router.post('/createTask', createTask);
router.get('/getTasks', getTasks);
router.get('/getTaskById', getTaskById);    
router.delete('/deleteTask', deleteTask);  
router.put('/updateTask', updateTask);     


module.exports = router;
