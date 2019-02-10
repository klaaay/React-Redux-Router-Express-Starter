const {
    getTodos,
    addTodo,
    deleteTodo
} = require('../controllers/todo')


module.exports = (app) => {
    app.get('/todo', getTodos)
    app.post('/todo', addTodo)
    app.delete('/todo',deleteTodo)
}