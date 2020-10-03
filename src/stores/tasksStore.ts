import { action, computed, observable } from "mobx";
import Task from "../models/task.models";

export default class TasksStore {
  @observable private todoTasks: Array<Task> = [];
  @observable private finishedTasks: Array<Task> = [];

  @computed
  public get getTodoTasks() {
    return this.todoTasks;
  }

  @computed
  public get reveresedTodoTasks() {
    return this.todoTasks.reverse();
  }

  @computed
  public get getFinishedTasks() {
    return this.finishedTasks;
  }

  @computed
  public get reveresedFinishedTasks() {
    return this.finishedTasks.reverse();
  }

  // -- @action
  @action
  public addTask(task: Task) {
    var temp = this.todoTasks;
    temp.push(task);
    this.todoTasks = temp;
  }

  @action
  public removeTask(taskToRemove: Task) {
    this.finishedTasks.splice(
      this.finishedTasks.findIndex(
        (task) => taskToRemove.getKey === task.getKey
      ),
      1
    );
  }

  @action
  public doneTask(taskToMove: Task) {
    var temp = this.finishedTasks;
    taskToMove.setIsDone(true);
    var tasks: Task[] = this.todoTasks.splice(
      this.todoTasks.findIndex((task) => taskToMove.getKey === task.getKey),
      1
    );
    temp.push(tasks[0]);
    this.finishedTasks = temp;
  }
}
