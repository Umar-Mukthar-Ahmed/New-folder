const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    // Add a new todo item
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
  });

  test("Should add new todo", () => {
    const initialTodoCount = all.length;
    add({
      title: "Another Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(initialTodoCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
