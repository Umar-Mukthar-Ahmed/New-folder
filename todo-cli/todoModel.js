const { DataTypes, Model } = require("sequelize"); // Import Model
const { sequelize } = require("./connectDB.js");

class Todo extends Model {
  static async addTask(params) {
    return await Todo.create(params);
  }

  displayableString() {
    return `${this.id} ${this.title}-${this.dueDate}`;
  }
}

Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Second argument with table name
    sequelize, // Add the sequelize instance
    tableName: "todos",
  }
);

module.exports = Todo;

Todo.sync(); // Create the table
