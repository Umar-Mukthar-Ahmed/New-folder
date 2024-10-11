const { connect } = require("./connectDB.js");
const Todo = require("./todoModel.js");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "third Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID: ${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

const countItem = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Found ${totalCount} item in the table!`);
  } catch (error) {
    console.error(error);
  }
};

const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll({
      where: {
        completed: true,
      },
      order: [["id", "DESC"]],
    });

    const todoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(todoList);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  await getAllTodos();
  await createTodo();
  await countItem();
})();
