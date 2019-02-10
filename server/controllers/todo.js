const Todo = require("../models/todo");

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().exec()
    return res.json({
      todos
    })
  } catch (error) {
    next(error)
  }
};

exports.addTodo = (req, res, next) => {
  const {
    newTodo
  } = req.body;
  const todo = new Todo({
    ...newTodo
  });
  todo.save().then(todo => {
    res.json({
      ...todo._doc,
      _id: todo.id
    });
  });
};

exports.deleteTodo = async (req, res, next) => {
  const {
    _id
  } = req.body;
  try {
    await Todo.findByIdAndDelete({
      _id
    }).exec();
    return res.send("Success");
  } catch (error) {
    next(error)
  }
};