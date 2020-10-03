import { action, computed, observable } from "mobx";
import Task from "../models/task.models";

export default class TasksStore {
  @observable public todoTasks: Array<Task> = [];
  @observable public finishedTasks: Array<Task> = [];

  @computed
  public get getTodoTasks() {
    console.log('to do updated')
    var todoTasks = this.todoTasks;
    return todoTasks;
  }

  @computed
  public get reveresedTodoTasks() {
    var todoTasks = this.todoTasks;
    return todoTasks.reverse();
  }

  @computed
  public get getFinishedTasks() {
    console.log('finished updated');
    var finishedTasks = this.finishedTasks;
    return finishedTasks;
  }

  @computed
  public get reveresedFinishedTasks() {
    var finishedTasks = this.finishedTasks;
    return finishedTasks.reverse();
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
