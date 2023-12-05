/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }
  outsideLength(index) {
    return index < 0 || index > this.todoList.length - 1;
  }
  remove(index) {
    return !this.outsideLength(index) ? this.todoList.splice(index, 1) : null;
  }
  update(index, updatedTodo) {
    return !this.outsideLength(index)
      ? this.todoList.splice(index, 1, updatedTodo)
      : null;
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    return !this.outsideLength(indexOfTodo) ? this.todoList[indexOfTodo] : null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
