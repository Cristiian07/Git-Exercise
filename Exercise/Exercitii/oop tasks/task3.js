// Task 3: Implement a Simple Task Management System
// Create a class called Task
// It should have public properties:
// - title: string
// - description: string
// - dueDate: date
// - priority: string - this property should be static and have 3 values: "low", "medium", "high"
// - completed: boolean

// 1. Task Management class:
// - Will start with an empty array of tasks
// - Add/remove tasks
// - Mark task as complete
// - Set task priority
// - Get all tasks by priority
// - Get all task

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.completed = false;
    this.priority = priority;
  }

  static Priority = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
  };
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    }
  }

  removeTask(title) {
    const tempTask = this.tasks.filter((task) => task.title !== title);
    this.tasks = [...tempTask];
  }

  findTask(taskTitle) {
    const task = this.tasks.find((task) => task.title === taskTitle);
    if (task) {
      return task;
    } else {
      throw new Error("Task not found.");
    }
  }

  markTaskAsCompleted(title) {
    const found = this.findTask(title);
    found.completed = true;
  }

  setTaskPriority(priority, title) {
    const task = this.findTask(title);
    task.priority = priority;
  }

  getTasksByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }

  getTasksSortedDueDate() {
    return this.tasks.sort((a, b) => a.dueDate - b.dueDate);
  }
}

const taskManager = new TaskManager();
const task1 = new Task("task1", "desc1", "2026-01-10", Task.Priority.LOW);
const task2 = new Task("task2", "desc2", "2026-01-02", Task.Priority.HIGH);
const task3 = new Task("task3", "desc3", "2026-03-24", Task.Priority.LOW);
const task4 = new Task("task4", "desc4", "2026-01-24", Task.Priority.MEDIUM);

taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);
taskManager.addTask(task4);

taskManager.markTaskAsCompleted("task1");

taskManager.setTaskPriority(Task.Priority.HIGH, "task3");

console.log(taskManager.getTasksByPriority(Task.Priority.HIGH));
console.log(taskManager.getTasksSortedDueDate());
taskManager.removeTask("task3");
