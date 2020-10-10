import { action, computed, makeObservable, observable } from "mobx";
import Task from "../models/task.models";

export default class TasksStore {
  @observable public todoTasks: Array<Task> = Array<Task>();
  @observable public finishedTasks: Array<Task> = Array<Task>();

  constructor() {
    makeObservable(this);
  }

  @computed
  public get getTodoTasks(): Array<Task> {
    return this.todoTasks;
  }

  @computed
  public get reveresedTodoTasks(): Array<Task> {
    return this.todoTasks.slice().reverse();
  }

  @computed
  public get getFinishedTasks(): Array<Task> {
    return this.finishedTasks;
  }

  @computed
  public get reveresedFinishedTasks(): Array<Task> {
    return this.finishedTasks.slice().reverse();
  }

  @action
  public addTask(task: Task) {
    this.todoTasks = this.todoTasks.concat(task);
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
    taskToMove.setIsDone(true);
    var tasks: Task[] = this.todoTasks.splice(
      this.todoTasks.findIndex((task) => taskToMove.getKey === task.getKey),
      1
    );
    this.finishedTasks = this.finishedTasks.concat(tasks[0]);
  }
}
