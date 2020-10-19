import { observer } from "mobx-react";
import React from "react";
import AddTaskComponent from "../components/addTaskComponent";
import FinishedTasksListComponent from "../components/finishedTasksListComponent";
import TaskComponent from "../components/taskComponent";
import TodoTasksListComponent from "../components/todoTasksListComponent";
import Task from "../models/task.models";
import rootStores from "../stores";
import { TASKS_STORE } from "../stores/storesKeys";
import "./TaskContainer.css"

interface IProps {}

interface IState {}

@observer
export default class TaskContainer extends React.Component<IProps, IState> {
  tasksStore = rootStores[TASKS_STORE];
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentItem: {
        text: "",
        key: 0,
      },
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  render() {
    return (
      <div className="Tasks">
        <AddTaskComponent />
        <TodoTasksListComponent/>
        <FinishedTasksListComponent/>
      </div>
    );
  }
  displayTodo() {
    var todoTasks = this.tasksStore.reveresedTodoTasks;
    return todoTasks.map((task: Task) => {
      return (
        <TaskComponent
          task={task}
          handleOnClick={() => this.handleOnClick(task)}
        />
      );
    });
  }
  displayFinished() {
    var todoTasksFiniehed = this.tasksStore.reveresedFinishedTasks;
    return todoTasksFiniehed.map((task: Task) => {
      return (
        <TaskComponent
          task={task}
          handleOnClick={() => this.handleOnClick(task)}
        />
      );
    });
  }
  private handleOnClick(task: Task) {
    if (task.getIsDone) {
      this.tasksStore.removeTask(task);
    } else {
      this.tasksStore.doneTask(task);
    }
  }
}
