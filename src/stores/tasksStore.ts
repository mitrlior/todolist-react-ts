import { action, computed, makeObservable, observable } from "mobx";
import { PassThrough } from "stream";
import fire from "../firebase/firebase";
import Task from "../models/task.models";

export default class TasksStore {
	@observable public todoTasks: Array<Task> = Array<Task>();
	@observable public finishedTasks: Array<Task> = Array<Task>();

	constructor() {
		makeObservable(this);
		this.setDoneTasks();
		this.setFinishedTasks();
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
		fire.database().ref("todos").push(task);
		this.setDoneTasks();
	}
	@action
	public removeTask(taskToRemove: Task) {
    TODO: /*remove task from finished tasks*/
		return;
	}
	@action
	public doneTask(taskToMove: Task) {
    TODO: /*remove task from todotos at firebae*/
		taskToMove.setIsDone(true);
		fire.database().ref("finishedTodo").push(taskToMove);
	}
	public setDoneTasks() {
		this.todoTasks = new Array<Task>();
		fire
			.database()
			.ref("todos")
			.on("value", (snaphot) => {
				snaphot.forEach((snap) => {
					this.todoTasks.push(new Task(snap.val().text, snap.val().key));
				});
			});
	}
	public setFinishedTasks() {
		this.finishedTasks = new Array<Task>();
		fire
			.database()
			.ref("finishedTodo")
			.on("value", (snaphot) => {
				snaphot.forEach((snap) => {
					let t: Task = new Task(snap.val().text, snap.val().key);
					t.setIsDone(true);
					this.finishedTasks.push(t);
				});
			});
	}
}
