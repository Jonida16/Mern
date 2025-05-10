const express = require('express');
const router = express.Router();

const { getTasks, setTask, updateTask, deleteTask } = require('../controllers/taskController');

//Metoda GET per te mare tasket
router.get('/', getTasks)

//Metoden POST per krijimin e nje tasku te ri
router.post('/', setTask)

//Metoden PUT per azhornimin e nje tasku
router.put('/:id', updateTask)

//Metoda DELETE per te fshire nje task
router.delete('/:id', deleteTask)


module.exports = router;
