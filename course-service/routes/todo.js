const express = require('express');
const router = express.Router();
const todos = [
    { todoId: 1, todoName: 'todo1',isCompleted:true },
    { todoId: 2, todoName: 'todo2',isCompleted:true },
    { todoId: 3, todoName: 'todo3',isCompleted:true },
    { todoId: 4, todoName: 'todo4',isCompleted:false },
];
router.get('/',(req,res)=>{
    res.send(todos);
});
module.exports = router;