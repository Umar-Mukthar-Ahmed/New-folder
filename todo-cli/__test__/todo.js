/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, add, overdue, dueToday, dueLater } = todoList();

// describe("Todo List Test Suite", () => {
//   beforeAll(() => {
//     // Add a new todo item
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: new Date().toISOString().slice(0, 10),
//     });
//   });

//   test("Should add new todo", () => {
//     const initialTodoCount = all.length;
//     add({
//       title: "Another Test todo",
//       completed: false,
//       dueDate: new Date().toISOString().slice(0, 10),
//     });
//     expect(all.length).toBe(initialTodoCount + 1);
//   });

//   test("Should mark a todo as complete", () => {
//     expect(all[0].completed).toBe(false);
//     markAsComplete(0);
//     expect(all[0].completed).toBe(true);
//   });
// });

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    // Add a new todo item
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
  });

  // Existing tests...

  test("Should create a new todo", () => {
    const initialTodoCount = all.length;
    add({
      title: "New Todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(initialTodoCount + 1);
  });

  test("Should retrieve overdue items", () => {
    add({
      title: "Overdue Todo",
      completed: false,
      dueDate: new Date(Date.now() - 86400000).toISOString().slice(0, 10),
    });
    expect(overdue().length).toBe(1);
  });

  test("Should retrieve due today items", () => {
    add({
      title: "Today's Todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(dueToday().length).toBe(3);
  });

  test("Should retrieve due later items", () => {
    add({
      title: "Later Todo",
      completed: false,
      dueDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    });
    expect(dueLater().length).toBe(1);
  });
});
